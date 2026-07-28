@echo off
setlocal
set "RUNTIME_NODE=C:\Users\안녕하세요\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "RUNTIME_PNPM=C:\Users\안녕하세요\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback"
set "PATH=%RUNTIME_NODE%;%RUNTIME_PNPM%;%PATH%"
cd /d "%~dp0"
pnpm exec expo start --lan
