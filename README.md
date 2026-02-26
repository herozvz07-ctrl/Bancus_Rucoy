# BANCUS RUCOY — Документация

> Официальный сайт сообщества Rucoy Online  
> 🌐 [bancus.c6t.ru](https://bancus.c6t.ru)

---

## Структура файлов

```
bancus.c6t.ru/
├── index.html          → / (Home + поиск игроков)
├── calculator.html     → /calculator
├── partners.html       → /partners
├── scam.html           → /scam
├── gold.html           → /gold
├── giveaways.html      → /giveaways
├── news.html           → /news
├── wiki.html           → /wiki
├── style.css           → Стили
├── calculator.js       → Логика калькуляторов
├── .htaccess           → Чистые URL (Apache)
├── sitemap.xml         → Карта сайта для Google
├── robots.txt          → Инструкции для поисковиков
├── js/
│   ├── nav.js          → Навигация, слайдшоу фона
│   └── admin.js        → Админка, посты, публикации
└── images/
    ├── fon.jpg         → Фон 1 (слайдшоу)
    ├── fon2.jpg        → Фон 2 (слайдшоу)
    └── ...             → Остальные изображения
```

---

## Чистые URL (без .html)

### Apache (.htaccess)
Файл `.htaccess` уже лежит в корне. Загрузи его на хостинг — и URL автоматически станут чистыми:

| Файл | URL |
|------|-----|
| index.html | bancus.c6t.ru/ |
| calculator.html | bancus.c6t.ru/calculator |
| scam.html | bancus.c6t.ru/scam |
| gold.html | bancus.c6t.ru/gold |
| wiki.html | bancus.c6t.ru/wiki |

### Nginx
Добавь в конфиг сервера:
```nginx
location / {
    try_files $uri $uri.html $uri/ =404;
}
```

---

## SEO — Попасть в топ Google

### Что уже сделано
- ✅ Мета-теги `description` и `keywords` на каждой странице
- ✅ Open Graph теги (красивые превью в соцсетях и Telegram)
- ✅ `canonical` ссылки на каждой странице
- ✅ `sitemap.xml` — карта сайта для Google
- ✅ `robots.txt` — разрешение на индексацию

### Что нужно сделать вручную

**1. Добавить мета-теги в каждый HTML файл**

В каждом `.html` файле замени существующий `<meta name="description">` на версию из таблицы ниже, и добавь остальные теги перед `</head>`:

#### index.html
```html
<meta name="description" content="Bancus Rucoy — лучший сайт для Rucoy Online. Поиск игроков, калькулятор урона, Wiki, Gold Market, новости и список скамеров.">
<meta name="keywords" content="Rucoy Online, Rucoy calculator, Rucoy damage calculator, Rucoy wiki, Rucoy gold, Rucoy players, Rucoy Online guide, Bancus Rucoy">
<meta property="og:title" content="Bancus Rucoy — Rucoy Online Tools">
<meta property="og:description" content="Поиск игроков, калькулятор урона, Wiki и многое другое для Rucoy Online">
<meta property="og:url" content="https://bancus.c6t.ru/">
<meta property="og:type" content="website">
<meta property="og:image" content="https://bancus.c6t.ru/images/12dd6b0b-6cbc-4dba-8dc4-72c564bec735-removebg-preview.png">
<link rel="canonical" href="https://bancus.c6t.ru/">
```

#### calculator.html
```html
<meta name="description" content="Rucoy Online Calculator — калькулятор урона, online/offline/power тренировок и черепов. Лучший инструмент для Rucoy Online.">
<meta name="keywords" content="Rucoy Online calculator, Rucoy damage calc, Rucoy training calculator, Rucoy skull calculator, Rucoy power train, Rucoy offline train">
<meta property="og:title" content="Rucoy Online Calculator — Bancus Rucoy">
<meta property="og:url" content="https://bancus.c6t.ru/calculator">
<link rel="canonical" href="https://bancus.c6t.ru/calculator">
```

#### scam.html
```html
<meta name="description" content="Список скамеров Rucoy Online — проверь игрока перед сделкой. База мошенников с доказательствами.">
<meta name="keywords" content="Rucoy Online scammers, Rucoy scam list, Rucoy мошенники, Rucoy Online trade scam">
<meta property="og:title" content="Rucoy Online Scammer List — Bancus Rucoy">
<meta property="og:url" content="https://bancus.c6t.ru/scam">
<link rel="canonical" href="https://bancus.c6t.ru/scam">
```

#### gold.html
```html
<meta name="description" content="Rucoy Online Gold Market — актуальные цены и предложения по покупке и продаже золота.">
<meta name="keywords" content="Rucoy Online gold, Rucoy gold market, Rucoy gold price, Rucoy buy sell gold">
<meta property="og:title" content="Rucoy Online Gold Market — Bancus Rucoy">
<meta property="og:url" content="https://bancus.c6t.ru/gold">
<link rel="canonical" href="https://bancus.c6t.ru/gold">
```

#### wiki.html
```html
<meta name="description" content="Rucoy Online Wiki — гайды, советы и подробная информация по игре Rucoy Online.">
<meta name="keywords" content="Rucoy Online wiki, Rucoy guide, Rucoy Online tips, Rucoy monsters, Rucoy classes">
<meta property="og:title" content="Rucoy Online Wiki — Bancus Rucoy">
<meta property="og:url" content="https://bancus.c6t.ru/wiki">
<link rel="canonical" href="https://bancus.c6t.ru/wiki">
```

#### news.html
```html
<meta name="description" content="Rucoy Online новости — актуальные обновления и события сообщества Bancus Rucoy.">
<meta name="keywords" content="Rucoy Online news, Rucoy updates, Rucoy Online community">
<meta property="og:title" content="Rucoy Online News — Bancus Rucoy">
<meta property="og:url" content="https://bancus.c6t.ru/news">
<link rel="canonical" href="https://bancus.c6t.ru/news">
```

#### giveaways.html
```html
<meta name="description" content="Rucoy Online Giveaways — розыгрыши призов и предметов в сообществе Bancus Rucoy.">
<meta name="keywords" content="Rucoy Online giveaway, Rucoy prizes, Rucoy free items">
<meta property="og:title" content="Rucoy Online Giveaways — Bancus Rucoy">
<meta property="og:url" content="https://bancus.c6t.ru/giveaways">
<link rel="canonical" href="https://bancus.c6t.ru/giveaways">
```

#### partners.html
```html
<meta name="description" content="Партнёры Bancus Rucoy — проверенные сообщества и торговые площадки Rucoy Online.">
<meta name="keywords" content="Rucoy Online community, Rucoy partners, Rucoy shop, Rucoy telegram">
<meta property="og:title" content="Rucoy Online Partners — Bancus Rucoy">
<meta property="og:url" content="https://bancus.c6t.ru/partners">
<link rel="canonical" href="https://bancus.c6t.ru/partners">
```

---

**2. Зарегистрировать сайт в Google Search Console**

1. Зайди на [search.google.com/search-console](https://search.google.com/search-console)
2. Добавь домен `bancus.c6t.ru`
3. Подтверди владение (через HTML файл или DNS запись)
4. Нажми **"Запросить индексирование"** для каждой страницы
5. Отправь `sitemap.xml`: в меню слева → Sitemap → вставь `https://bancus.c6t.ru/sitemap.xml`

**3. Зарегистрировать в Яндекс Вебмастер**

1. Зайди на [webmaster.yandex.ru](https://webmaster.yandex.ru)
2. Добавь сайт и подтверди
3. Отправь sitemap

---

## Админка

Открывается **тройным кликом** по копирайту в футере (`© 2026 BANCUS RUCOY`).

Пароль: `bancus2026`

Через админку можно публиковать посты в разделы: News, Wiki, Gold, Giveaways.

---

## Технологии

- Чистый HTML + CSS + JavaScript (без фреймворков)
- Pixel Art стиль (шрифты: Press Start 2P, VT323)
- Фоновое слайдшоу с Fade эффектом
- Посты хранятся в localStorage браузера
- Поиск игроков через API: `telegram-bot-2-mgnk.onrender.com`
