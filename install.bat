@echo off
REM Toll Road Admin FastPanel Auto-Installer (Windows)
REM Этот скрипт автоматически устанавливает панель в FastPanel

echo 🚀 Toll Road Admin FastPanel Installer
echo ======================================

REM Проверка Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js не установлен. Установите Node.js 16+
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js %NODE_VERSION% найден

echo 📦 Установка зависимостей...
call npm install

echo 🔨 Сборка проекта...
call npm run build

echo.
echo ======================================
echo ✅ УСТАНОВКА ЗАВЕРШЕНА!
echo ======================================
echo.
echo 📁 Файлы находятся в папке: dist\
echo.
echo Что делать дальше в FastPanel:
echo 1. Перейти в File Manager
echo 2. Загрузить файлы из папки 'dist' в public_html
echo 3. Открыть домен в браузере
echo.
echo Домен: https://your-domain.com
echo.
echo Тестовая карта Stripe: 4242 4242 4242 4242
echo.
pause
