# Bancus Rucoy — Multi-page Structure

## Структура файлов

```
bancus.c6t.ru/              → index.html      (Home + поиск игроков)
bancus.c6t.ru/calculator    → calculator.html  (Калькулятор)
bancus.c6t.ru/partners      → partners.html    (Партнёры)
bancus.c6t.ru/scam          → scam.html        (Список скамеров)
bancus.c6t.ru/gold          → gold.html        (Gold Market)
bancus.c6t.ru/giveaways     → giveaways.html   (Розыгрыши)
bancus.c6t.ru/news          → news.html        (Новости)
bancus.c6t.ru/wiki          → wiki.html        (Вики)

js/nav.js     → Общая навигация, шапка, подвал, тема
js/admin.js   → Админка, посты, localStorage
calculator.js → Логика калькуляторов (твой оригинальный файл)
style.css     → Стили (твой оригинальный файл)
images/       → Все изображения
```

## Чтобы URL был /scam без .html

Если хостинг поддерживает Apache — добавь файл `.htaccess`:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

Тогда `bancus.c6t.ru/scam` автоматически откроет `scam.html`.

## Nginx

```nginx
location / {
    try_files $uri $uri.html $uri/ =404;
}
```

## Что нужно скопировать с оригинального сайта

- `style.css` — твои стили
- `calculator.js` — логика калькуляторов
- Папку `images/` со всеми картинками
