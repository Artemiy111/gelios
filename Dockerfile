FROM oven/bun:alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production --no-cache

COPY . .
RUN bun run build

FROM node:23-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/bun.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "run", "serve:local"]