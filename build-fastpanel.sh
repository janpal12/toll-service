#!/bin/bash

# Toll Road Admin FastPanel - Auto Builder
# Новые реальные дороги Европы

set -e

echo ""
echo "🛣️  Toll Road EU - Admin FastPanel Builder"
echo "=========================================="
echo ""

# Проверка Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не найден! Установите Node.js 16+"
    exit 1
fi

echo "✅ Node.js $(node --version) найден"
echo ""

# Очистка старых файлов
echo "🧹 Очистка..."
rm -rf dist node_modules package-lock.json

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm install --silent

# Сборка
echo "🔨 Сборка проекта..."
npm run build

echo ""
echo "=========================================="
echo "✅ ГОТОВО К ЗАЛИВУ В FASTPANEL!"
echo "=========================================="
echo ""
echo "📁 Где находятся файлы:"
echo "   $(pwd)/dist/"
echo ""
echo "📋 Инструкция для FastPanel:"
echo "   1. Откройте File Manager в FastPanel"
echo "   2. Перейдите в public_html (или www)"
echo "   3. Загрузите все файлы из папки 'dist'"
echo "   4. Откройте ваш домен в браузере"
echo ""
echo "📊 В панели есть:"
echo "   ✓ 28 реальных дорог Европы"
echo "   ✓ 10 стран"
echo "   ✓ Актуальные цены"
echo "   ✓ Интеграция Stripe"
echo "   ✓ 8 языков"
echo "   ✓ Управление операторами"
echo ""
echo "💳 Для Stripe:"
echo "   Settings → Введите Stripe Key → Сохраните"
echo ""
echo "🧪 Тестовая карта Stripe:"
echo "   4242 4242 4242 4242"
echo "   Любая дата, любой CVC"
echo ""
echo "Архив готов! 🚀"
echo ""
