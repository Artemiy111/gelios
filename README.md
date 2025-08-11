# Редизайн сайта страховой компании "Гелиос"

<img width="2549" height="1214" alt="image" src="https://github.com/user-attachments/assets/d0c208c1-2996-4890-9da6-a417f6855dee" />

- Дизайн в Фигме
- Новейшие подходы к вёрстке
  - Дизайн токены через css variables
  - 2 темы через `light-dark`
  - Вёрстка с помощью скейлинга страницы через fluid font-size
  - Popover Api
  - Анимация дискретных состояний с помощью `animation-behavior: allow-discrete`
  - Logical properties: `margin-block`, `padding-inline`, ...  
  - Цвета в пространстве `oklch`
  - CSS Anchors

- Feature Sliced Design
- Балансировка нагрузки с помощью `nginx`

## Запуск

```bash
  bun install
  bun run db:push
  bun run db:seed
  docker-compose --env-file .env up --build
```
