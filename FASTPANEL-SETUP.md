# 🚀 Toll Road Admin FastPanel - Архив для FastPanel

## ⚡ Быстрая установка в FastPanel

### Шаг 1️⃣: Распакуй архив на компьютере
```bash
tar -xzf toll-admin-fastpanel.tar.gz
# или используй 7-Zip на Windows
```

### Шаг 2️⃣: Установи и собери

**Для Linux/Mac:**
```bash
cd toll-admin-fastpanel
chmod +x install.sh
./install.sh
```

**Для Windows:**
```cmd
cd toll-admin-fastpanel
install.bat
```

### Шаг 3️⃣: Залей в FastPanel

1. Открой **FastPanel** → **Файловый менеджер**
2. Перейди в папку `public_html` (или `www`)
3. Загрузи все файлы из папки `dist/` в `public_html`
4. Открой свой домен в браузере

---

## 🎯 Готово к работе!

✅ Dashboard работает
✅ Управление дорогами
✅ Форма оплаты Stripe готова
✅ 8 языков
✅ Локальная JSON БД

---

## 💳 Подключение Stripe

1. Открой панель → **Settings**
2. Вставь свой **Stripe Publishable Key**
3. Сохрани
4. Перейди на **Payment** и протестируй

**Тестовая карта:** 4242 4242 4242 4242

---

## 📁 Структура после сборки

```
public_html/
├── index.html
├── assets/
│   ├── js/
│   └── css/
└── (все остальные файлы)
```

---

## ⚙️ Nginx конфиг для FastPanel

Если нужен custom домен, добавь в конфиг FastPanel:

```nginx
location / {
    try_files $uri /index.html;
}
```

---

## 🆘 Если ошибка 404

1. Убедись, что `index.html` в `public_html`
2. Проверь права доступа (644 для файлов, 755 для папок)
3. Перезагрузи страницу (Ctrl+F5)
4. Очисти кэш браузера

---

## 📝 Лицензия

Commercial Use Only © 2026 TollRoad EU

**Готово! Панель работает! 🎉**
