# Toll Road EU - Admin FastPanel

Легкая админ-панель для управления платными дорогами Европы с локальной JSON БД.

## Возможности

✅ Управление дорогами и операторами  
✅ Просмотр статистики и транзакций  
✅ Форма оплаты Stripe (готов к интеграции)  
✅ Локальная JSON база данных  
✅ Мультиязычность (8 языков)  
✅ Красивый темный UI с анимациями  
✅ Экспорт отчётов  

## Стек

- React 18 + TypeScript
- Vite (быстрая сборка)
- Tailwind CSS
- Framer Motion (анимации)
- Zustand (state management)
- i18next (мультиязычность)
- Recharts (графики)
- Leaflet (карты)

## Быстрый старт

```bash
npm install
npm run dev
```

Панель откроется на `http://localhost:5173`

## Структура

```
src/
├── components/       # React компоненты
├── pages/           # Страницы панели
├── store/           # Zustand хранилище
├── services/        # API и сервисы
├── i18n/            # Переводы
├── data/            # JSON данные (локальная БД)
└── styles/          # CSS
```

## Интеграция Stripe

1. Добавь STRIPE_KEY в .env
2. В компоненте Payment используй `<CardElement />` из `@stripe/react-stripe-js`
3. Обработай платёж в handlePayment()

## Лицензия

Copyright © 2026 TollRoad EU. Commercial use only.
