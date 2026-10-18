@echo off
title Entertainment Haven Local Server
cd /d "%~dp0"
echo Starting Entertainment Haven...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause

