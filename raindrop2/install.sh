#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

HOST_NAME="com.yoavgrinberg.raindrop2"
ALLOWED_EXTENSION="raindrop2@yoavgrinberg.com"

# Get the absolute path to the directory where this script is located
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
HOST_PATH="$DIR/host.py"

echo "Configuring Raindrop2 Native Host..."

# 1. Ensure the Python script is executable
chmod +x "$HOST_PATH"
echo "- Made host.py executable."

# 2. Define the target directory for Firefox on macOS
TARGET_DIR="$HOME/Library/Application Support/Mozilla/NativeMessagingHosts"

# Create the directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# 3. Generate the JSON manifest
JSON_PATH="$TARGET_DIR/$HOST_NAME.json"

cat << EOF > "$JSON_PATH"
{
  "name": "$HOST_NAME",
  "description": "Raindrop2 Native Messaging Host",
  "path": "$HOST_PATH",
  "type": "stdio",
  "allowed_extensions": [ "$ALLOWED_EXTENSION" ]
}
EOF

echo "- Wrote manifest to: $JSON_PATH"
echo "Setup complete! Restart Firefox to ensure it picks up the new host."