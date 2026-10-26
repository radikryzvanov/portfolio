# Сайт-портфолио Радика Рызванова

Личный сайт на Angular 22: сайты и Telegram-боты для малого бизнеса. Услуги, цены, работы, частые вопросы и контакты.

## Технологии

- Angular 22, standalone-компоненты, без NgModule
- Новый синтаксис шаблонов: `@for`, `@if`
- OnPush, TypeScript в строгом режиме
- Статическая предсборка страницы (prerender), деплой на Vercel

## Где менять тексты

Все тексты, цены и ссылки лежат в одном файле: `src/app/data/site.data.ts`. Услуги (`SERVICES`), работы (`WORKS`), шаги (`STEPS`), вопросы (`FAQ`) и контакты (`SITE`).

Стили и цвета: `src/styles.css` (переменные в `:root`).

## Запуск

Нужен Node.js 22.22.3 или новее.

```bash
npm install
npm start        # http://localhost:4200
npm run build    # сборка в dist/portfolio/browser
```
