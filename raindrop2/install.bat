@echo off
setlocal

set HOST_NAME=com.yoavgrinberg.raindrop2
set ALLOWED_EXTENSION=raindrop2@yoavgrinberg.com

:: Get current directory (removing the trailing backslash)
set "DIR=%~dp0"
set "DIR=%DIR:~0,-1%"

echo Configuring Raindrop2 Native Host for Windows...

:: 1. Create a wrapper batch file to execute the Python script reliably
set WRAPPER_PATH=%DIR%\host_wrapper.bat
echo @echo off > "%WRAPPER_PATH%"
echo python "%DIR%\host.py" %%* >> "%WRAPPER_PATH%"
echo - Created wrapper script: %WRAPPER_PATH%

:: 2. Escape backslashes for the JSON format
set "ESCAPED_DIR=%DIR:\=\\%"
set "JSON_PATH=%DIR%\%HOST_NAME%.json"

:: 3. Create the JSON manifest in the local folder
(
echo {
echo   "name": "%HOST_NAME%",
echo   "description": "Raindrop2 Native Messaging Host",
echo   "path": "%ESCAPED_DIR%\\host_wrapper.bat",
echo   "type": "stdio",
echo   "allowed_extensions": [ "%ALLOWED_EXTENSION%" ]
echo }
) > "%JSON_PATH%"

echo - Wrote manifest to: %JSON_PATH%

:: 4. Add the manifest path to the Windows Registry
echo - Updating Windows Registry...
REG ADD "HKCU\Software\Mozilla\NativeMessagingHosts\%HOST_NAME%" /ve /t REG_SZ /d "%JSON_PATH%" /f

echo.
echo Windows Setup complete! Please restart Firefox.
pause