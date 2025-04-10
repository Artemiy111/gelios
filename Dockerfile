FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json .
COPY bun.lock .
RUN bun install --frozen-lockfile 

COPY . .
RUN bun run build

FROM node:22-alpine

WORKDIR /app

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/.output ./output
COPY --from=builder /app .
# COPY --from=builder /app/package.json ./

ENV NODE_ENV=production
EXPOSE 3000 3001 3002

CMD ["npm", "run", "serve:local"]