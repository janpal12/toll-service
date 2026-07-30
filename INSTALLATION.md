# 🚀 Toll Road EU Admin FastPanel - Installation Guide

## ✅ Что включено

- ✅ **FastPanel** (React + TypeScript + Vite)
- ✅ **Dashboard** с статистикой
- ✅ **Управление дорогами и операторами**
- ✅ **Форма оплаты Stripe** (готова к подключению)
- ✅ **Локальная JSON база данных**
- ✅ **8 языков** (EN, DE, FR, IT, ES, PL, CS, HU)
- ✅ **Красивый темный UI** с анимациями
- ✅ **Экспорт данных**

---

## 📋 Системные требования

- Node.js 16+
- npm или yarn
- Git

---

## 🔧 Быстрая установка

### 1️⃣ Клонируй репо

```bash
git clone https://github.com/janpal12/toll-service.git
cd toll-service
```

### 2️⃣ Установи зависимости

```bash
npm install
```

### 3️⃣ Запусти в режиме разработки

```bash
npm run dev
```

Панель откроется на **http://localhost:5173**

### 4️⃣ Сборка для продакшена

```bash
npm run build
```

Файлы будут в папке `dist/`

---

## 💳 Интеграция Stripe

### Шаг 1: Получи API ключ

1. Зарегистрируйся на https://stripe.com
2. Перейди в **Developers > API Keys**
3. Скопируй **Publishable Key**

### Шаг 2: Добавь ключ в панель

1. Открой страницу **Settings**
2. Вставь Stripe Key
3. Сохрани

### Шаг 3: Форма платежа готова

Перейди на **Payment** → вводи данные карты → нажми **Pay Now**

**Тестовая карта:**
```
4242 4242 4242 4242
Любая дата (MM/YY)
Любой CVC
```

---

## 📁 Структура проекта

```
toll-service/
├── src/
│   ├── components/      # React компоненты
│   ├── pages/           # Страницы панели
│   ├── i18n/            # Переводы (8 языков)
│   ├── styles/          # CSS
│   └── App.tsx          # Главный компонент
├── index.html           # HTML шаблон
├── package.json         # Зависимости
├── vite.config.ts       # Конфиг Vite
├── tailwind.config.js   # Tailwind конфиг
└── README.md            # Этот файл
```

---

## 🎨 Функционал

### 📊 Dashboard
- Просмотр статистики
- Графики доходов
- Последние транзакции

### 🛣️ Roads (Дороги)
- Список всех дорог
- Добавление новых дорог
- Редактирование цен

### 🏢 Operators (Операторы)
- Управление операторами
- Сохранение комиссий
- Отслеживание активности

### 💳 Transponders (Транспондеры)
- История транспондеров
- Статус доставки
- Управление устройствами

### 💰 Transactions (Транзакции)
- Просмотр всех платежей
- Фильтрация по дате
- Экспорт отчетов

### 💳 Payment (Платежи)
- Форма оплаты Stripe
- Поддержка всех карт
- Моментальное подтверждение

### ⚙️ Settings (Настройки)
- Конфигурация Stripe
- Установка комиссии (3%)
- Данные компании

---

## 🌐 Языки

Панель поддерживает:
- 🇬🇧 English
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇮🇹 Italiano
- 🇪🇸 Español
- 🇵🇱 Polski
- 🇨🇿 Čeština
- 🇭🇺 Magyar

Сменить язык можно в правом верхнем углу.

---

## 📦 Архив для залива

БУДУЩВДА я подготовлю архив для директ залива:
```bash
tar -czf toll-admin.tar.gz .
```

Заливаешь на сервер и распаковываешь:
```bash
tar -xzf toll-admin.tar.gz
npm install
npm run build
# Скопируешь dist/ на веб-сервер (Apache/Nginx)
```

---

## 🚀 Деплой на сервер

### Nginx конфиг

```nginx
server {
    listen 80;
    server_name toll-admin.yourdomain.com;
    
    root /var/www/toll-admin/dist;
    index index.html;
    
    location / {
        try_files $uri /index.html;
    }
}
```

### Apache конфиг

```apache
<VirtualHost *:80>
    ServerName toll-admin.yourdomain.com
    DocumentRoot /var/www/toll-admin/dist
    
    <Directory /var/www/toll-admin/dist>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

---

## 🔐 Безопасность

1. **Stripe Key** хранится в Settings (используй переменные окружения на сервере)
2. **HTTPS** обязателен для платежей
3. **CORS** настроен только для твоих доменов
4. **Валидация** на фронтенде + бэкенде

---

## 📞 Поддержка

**Репо:** https://github.com/janpal12/toll-service

**Вопросы?** Открой Issue на GitHub

---

## 📄 Лицензия

Commercial Use Only © 2026 TollRoad EU

---

**Готово! Запускай `npm run dev` и начинай управлять дорогами! 🚗💨**
