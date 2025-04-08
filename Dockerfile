FROM oven/bun:latest

WORKDIR /app

COPY package.json .
COPY bun.lock .
RUN bun install

COPY . .
RUN bun run build

EXPOSE 3000 3001 3002

# Команда переопределяется в docker-compose.yml
CMD ["bun", "run", "serve:local"] 