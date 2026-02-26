#!/usr/bin/env python3
import sys
import json
import struct
import threading
import socket
import logging
import traceback
import uuid
import qrcode
import io
import os
import tempfile
from flask import Flask, request, send_file
from zeroconf import ServiceInfo, Zeroconf
import base64

LOG_FILE = '/tmp/raindrop2_host.log'
logging.basicConfig(filename=LOG_FILE, level=logging.DEBUG, 
                    format='%(asctime)s - %(levelname)s - %(message)s')

native_stdout = sys.stdout.buffer
sys.stdout = sys.stderr
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

app = Flask(__name__)
zeroconf_instance = None
UPLOAD_DIR = tempfile.mkdtemp()

server_state = {
    "type": "status", "is_running": False, "message": "Waiting.",
    "url": None, "qr_data": None, "port": 5000
}

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

def send_message(message):
    try:
        encoded = json.dumps(message).encode('utf-8')
        native_stdout.write(struct.pack('@I', len(encoded)))
        native_stdout.write(encoded)
        native_stdout.flush()
    except BaseException as e:
        logging.error(f"Failed to send message: {e}")

def read_message():
    try:
        raw_length = sys.stdin.buffer.read(4)
        if len(raw_length) == 0: sys.exit(0)
        msg_length = struct.unpack('@I', raw_length)[0]
        message = sys.stdin.buffer.read(msg_length).decode('utf-8')
        return json.loads(message)
    except BaseException:
        sys.exit(1)

@app.route('/')
def index():
    return '''
    <!doctype html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Raindrop2</title>
      <style>
        :root { --term-bg: #FFFFFF; --term-fg: #004400; --term-dim: #008800; }
        body { background-color: var(--term-bg); color: var(--term-fg); font-family: "Courier New", Courier, monospace; font-size: 14px; text-align: center; padding: 20px; margin: 0; }
        .container { border: 2px solid var(--term-dim); padding: 20px; max-width: 400px; margin: 0 auto; box-sizing: border-box; }
        pre.ascii-logo { font-size: 10px; line-height: 11px; margin: 0 0 20px 0; color: var(--term-fg); font-weight: bold; text-shadow: 0 0 2px rgba(0, 68, 0, 0.2); }
        h2 { font-size: 16px; border-bottom: 1px dashed var(--term-dim); padding-bottom: 10px; margin-top: 0; margin-bottom: 20px; }
        input[type="file"] { display: none; }
        .file-label { display: block; border: 1px dashed var(--term-fg); padding: 30px 10px; margin-bottom: 20px; cursor: pointer; background: rgba(0, 68, 0, 0.04); font-weight: bold; word-break: break-all; }
        .file-label:hover { background: var(--term-fg); color: var(--term-bg); }
        .action-btn { background-color: var(--term-bg); color: var(--term-fg); border: 1px solid var(--term-dim); padding: 15px 20px; cursor: pointer; font-family: inherit; font-weight: bold; width: 100%; font-size: 16px; transition: all 0.1s; }
        .action-btn::before { content: "[ "; color: var(--term-dim); }
        .action-btn::after { content: " ]"; color: var(--term-dim); }
        .action-btn:hover { background-color: var(--term-fg); color: var(--term-bg); }
        .action-btn:hover::before, .action-btn:hover::after { color: var(--term-bg); }
      </style>
    </head>
    <body>
      <div class="container">
        <pre class="ascii-logo">
           _           _                ____  
 _ __ __ _(_)_ __   __| |_ __ ___  _ __|___ \ 
| '__/ _` | | '_ \ / _` | '__/ _ \| '_ \ __) |
| | | (_| | | | | | (_| | | | (_) | |_) / __/ 
|_|  \__,_|_|_| |_|\__,_|_|  \___/| .__/_____|
                                  |_|         
        </pre>
        <h2>Upload to Firefox</h2>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <label class="file-label">
            <span id="file-text">> Take photo</span>
            <input type="file" name="file" capture="environment" onchange="document.getElementById('file-text').innerHTML = 'Selected:<br>' + this.files[0].name;">
          </label>
          <button type="submit" class="action-btn">Send</button>
        </form>
      </div>
    </body>
    </html>
    '''

# --- THEMED SUCCESS PAGE ---
@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files: return 'No file', 400
    file = request.files['file']
    if file.filename != '':
        file_id = uuid.uuid4().hex
        file_dir = os.path.join(UPLOAD_DIR, file_id)
        os.makedirs(file_dir, exist_ok=True)
        save_path = os.path.join(file_dir, file.filename)
        file.save(save_path)
        
        local_url = f"http://127.0.0.1:{server_state['port']}/files/{file_id}/{file.filename}"
        
        send_message({
            "type": "file_received",
            "filename": file.filename,
            "mimetype": file.content_type,
            "url": local_url
        })
        return '''
        <!doctype html>
        <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
             body { background: #FFFFFF; color: #004400; font-family: "Courier New", Courier, monospace; text-align: center; padding: 40px 20px; }
             .msg { border: 2px dashed #008800; padding: 20px; display: inline-block; font-weight: bold; background: rgba(0,68,0,0.04); line-height: 1.5; }
             a { color: #004400; text-decoration: none; display: inline-block; margin-top: 30px; font-weight: bold; font-size: 16px; border: 1px solid #008800; padding: 15px; width: 80%; max-width: 300px; }
             a::before { content: "[ "; color: #008800; } a::after { content: " ]"; color: #008800; }
             a:hover { background: #004400; color: #FFFFFF; } a:hover::before, a:hover::after { color: #FFFFFF; }
          </style>
        </head>
        <body>
          <div class="msg">Sent to desktop</div><br>
          <a href="/">Return to portal</a>
        </body>
        </html>
        '''
    return 'Failed', 400

@app.route('/files/<file_id>/<path:filename>')
def serve_file(file_id, filename):
    file_path = os.path.join(UPLOAD_DIR, file_id, filename)
    if os.path.exists(file_path):
        return send_file(file_path)
    return "Not found", 404

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('10.255.255.255', 1))
        return s.getsockname()[0]
    except BaseException:
        return '127.0.0.1'
    finally:
        s.close()

def get_free_port(start_port=5000):
    for port in range(start_port, start_port + 20):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('0.0.0.0', port)) != 0: return port
    return 5000

def generate_qr(url):
    img = qrcode.make(url)
    stream = io.BytesIO()
    img.save(stream, format="PNG")
    return "data:image/png;base64," + base64.b64encode(stream.getvalue()).decode('utf-8')

def start_server():
    global zeroconf_instance, server_state
    try:
        ip = get_local_ip()
        port = get_free_port()
        unique_id = uuid.uuid4().hex[:6]
        hostname = f"raindrop2-{unique_id}.local"
        #hostname = f"raindrop2.local"
        
        url = f"http://{hostname}:{port}"
        
        zeroconf_instance = Zeroconf()
        info = ServiceInfo(
            "_http._tcp.local.", f"Raindrop2_{unique_id}._http._tcp.local.",
            addresses=[socket.inet_aton(ip)], port=port, server=f"{hostname}."
        )
        zeroconf_instance.register_service(info)
        
        server_state.update({"is_running": True, "message": f"Running at: {url}", "url": url, "qr_data": generate_qr(url), "port": port})
        send_message(server_state)
        app.run(host='0.0.0.0', port=port, use_reloader=False)
    except BaseException as e:
        server_state.update({"is_running": False, "message": f"ERR: {str(e)}"})
        send_message(server_state)

if __name__ == '__main__':
    try:
        server_thread = None
        while True:
            msg = read_message()
            if msg.get("command") == "start":
                if not server_thread or not server_thread.is_alive():
                    server_thread = threading.Thread(target=start_server, daemon=True)
                    server_thread.start()
                else:
                    send_message(server_state)
            elif msg.get("command") == "status":
                send_message(server_state)
            elif msg.get("command") == "stop":
                logging.info("Shutdown command received. Exiting.")
                if zeroconf_instance:
                    zeroconf_instance.close()
                sys.exit(0)
    except BaseException as e:
        logging.error(f"Fatal crash: {traceback.format_exc()}")