@echo off
REM Toll Road Admin FastPanel - Auto Builder (Windows)
REM Новые реальные дороги Европы

color 0a
cls

echo.
echo 🛣️  Toll Road EU - Admin FastPanel Builder
echo ==========================================
echo.

REM Проверка Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js не найден! Установите Node.js 16+
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js %NODE_VERSION% найден
echo.

echo 🧹 Очистка...
if exist dist rmdir /s /q dist
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo 📦 Установка зависимостей...
call npm install --silent
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Ошибка при установке зависимостей
    pause
    exit /b 1
)

echo 🔨 Сборка проекта...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Ошибка при сборке
    pause
    exit /b 1
)

cls
echo.
echo ==========================================
echo ✅ ГОТОВО К ЗАЛИВУ В FASTPANEL!
echo ==========================================
echo.
echo 📁 Где находятся файлы:
echo    %cd%\dist\
echo.
echo 📋 Инструкция для FastPanel:
echo    1. Откройте File Manager в FastPanel
echo    2. Перейдите в public_html (или www)
echo    3. Загрузите все файлы из папки 'dist'
echo    4. Откройте ваш домен в браузере
echo.
echo 📊 В панели есть:
echo    ✓ 28 реальных дорог Европы
echo    ✓ 10 стран
echo    ✓ Актуальные цены
echo    ✓ Интеграция Stripe
echo    ✓ 8 языков
echo    ✓ Управление операторами
echo.
echo 💳 Для Stripe:
echo    Settings → Введите Stripe Key → Сохраните
echo.
echo 🧪 Тестовая карта Stripe:
echo    4242 4242 4242 4242
echo    Любая дата, любой CVC
echo.
echo Архив готов! 🚀
echo.
pause
