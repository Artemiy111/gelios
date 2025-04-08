# Редизайн сайта страховой компании "Гелиос"

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
  docker-compose --env-file .env up --build
```


error during connect: Get "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/v1.46/containers/json?all=1&filters=%7B%22label%22%3A%7B%22com.docker.compose.config-hash%22%3Atrue%2C%22com.docker.compose.project%3Dgelios%22%3Atrue%7D%7D": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.