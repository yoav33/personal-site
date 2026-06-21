(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51282,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},77373,e=>{"use strict";var t=e.i(49828);e.i(97402),e.i(90700);var o=e.i(5399);function i(){let e=`INTRO
=====

Welcome to Raindrop2!

The main benefit of this extension is that it runs completely locally on your network - no cloud, no fees, and it's super fast!

Setup prerequisites:
- Python 3 installed
- The Python packages "flask", "zeroconf", and "qrcode"
`,i=`
SETUP
=====

To set this up to work with Firefox, you need to put a specific JSON file in a Firefox folder. This JSON file will link to a Python script, which you must also have installed. I have made two setup scripts (for macOS and Windows) that do this for you:
`,n=`To use either script, please put host.py and the install script in the same folder. Note that host.py will need to stay in that folder, so it's better to put it under Documents or Desktop rather than Downloads.

IMPORTANT: Make sure that the first line in host.py leads to your Python interpreter!

To run this on macOS, open Terminal in that folder, enter "chmod +x install.sh" then "./install.sh". To run this on Windows, simply open the file.

You can also set this up manually. To do so on macOS or Linux, please write the following into a JSON file and edit the path to host.py:

{
  "name": "com.yoavgrinberg.raindrop2",
  "description": "Raindrop2",
  "path": "/ABSOLUTE/PATH/TO/host.py",
  "type": "stdio",
  "allowed_extensions": [ "raindrop2@yoavgrinberg.com" ]
}

This file should be named "com.yoavgrinberg.raindrop2.json" and should be placed in the following folder (create it if it doesn't exist):

macOS: ~/Library/Application Support/Mozilla/NativeMessagingHosts/
Linux: ~/.mozilla/native-messaging-hosts/com.local.filedrop.json

For Windows, create this file anywhere and link to it with the registry key:
"HKEY_CURRENT_USER\\Software\\Mozilla\\NativeMessagingHosts\\com.yoavgrinberg.raindrop2"
and set the (Default) string to the absolute path of the JSON file.

`,r=`
-----------------------------------------------------------
`;return(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0",paddingBottom:"4rem"},children:[(0,t.jsx)("style",{children:`
        .retro-nav, .retro-btn {
          color: inherit;
          text-decoration: none;
          padding: 0 4px;
          margin-left: -4px;
          cursor: pointer;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        
        .retro-nav:hover, .retro-btn:hover {
          background-color: rgba(128, 128, 128, 0.2);
        }

        .retro-toggle {
          background: none;
          border: none;
          color: inherit;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          padding: 0 4px;
          margin-left: -4px;
          text-align: left;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .retro-toggle:hover {
          background-color: rgba(128, 128, 128, 0.2);
          text-decoration: none;
        }

        .terminal-image {
          border: 2px solid currentColor;
        }
        
        .action-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 1.5rem 0;
        }
      `}),(0,t.jsxs)("pre",{style:{fontSize:"0.85rem",lineHeight:"1.3",whiteSpace:"pre-wrap",maxWidth:"800px"},children:[(0,t.jsx)(()=>{let e=`
           _           _                ____  
 _ __ __ _(_)_ __   __| |_ __ ___  _ __|___ \\ 
| '__/ _\` | | '_ \\ / _\` | '__/ _ \\| '_ \\ __) |
| | | (_| | | | | | (_| | | | (_) | |_) / __/ 
|_|  \\__,_|_|_| |_|\\__,_|_|  \\___/| .__/_____|
                                  |_|         
SETUP INSTRUCTIONS
`;return(0,t.jsx)("div",{style:{color:"#147114",fontWeight:"bold",marginBottom:"1.5rem",lineHeight:"1.2"},children:e})},{}),e,i,(0,t.jsxs)("div",{className:"action-container",children:[(0,t.jsx)("a",{href:"/raindrop2/host.py",download:!0,className:"retro-btn",children:"[ ↓ host.py ]"}),(0,t.jsx)("a",{href:"/raindrop2/install.sh",download:!0,className:"retro-btn",children:"[ ↓ install.sh (macOS) ]"}),(0,t.jsx)(o.default,{href:"/raindrop2/install.bat",className:"retro-btn",children:"[ ↓ install.bat (Windows) ]"})]}),n,r,(0,t.jsx)(o.default,{href:"/",className:"retro-nav",children:"[ <- RETURN TO HOMEPAGE ]"})]})]})}e.s(["default",()=>i])}]);