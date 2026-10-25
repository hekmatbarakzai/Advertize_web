@echo off
cd /d "%~dp0"
echo HEKMAT TECH -- Local development
where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js/npm is not installed. Install Node.js LTS from nodejs.org first.
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo Installing packages for first use...
  call npm install
  if errorlevel 1 (
    echo Installation failed. Check your internet connection.
    pause
    exit /b 1
  )
)
echo Open http://localhost:3000 after the server starts.
call npm run dev
pause
