#!/bin/bash

# Toll Road Admin FastPanel Auto-Installer
# Этот скрипт автоматически устанавливает панель в FastPanel

set -e

echo "🚀 Toll Road Admin FastPanel Installer"
echo "======================================"

# Проверка Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен. Установите Node.js 16+"
    exit 1
fi

echo "✅ Node.js $(node --version) найден"

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm install

# Сборка проекта
echo "🔨 Сборка проекта..."
npm run build

echo ""
echo "======================================"
echo "✅ УСТАНОВКА ЗАВЕРШЕНА!"
echo "======================================"
echo ""
echo "📁 Файлы находятся в папке: dist/"
echo ""
echo "Что делать дальше в FastPanel:"
echo "1. Перейти в File Manager"
echo "2. Загрузить файлы из папки 'dist' в public_html"
echo "3. Открыть домен в браузере"
echo ""
echo "Домен: https://your-domain.com"
echo ""
echo "Тестовая карта Stripe: 4242 4242 4242 4242"
echo ""
