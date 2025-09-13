# Base
FROM node:20-alpine AS base
WORKDIR /app

# Dependências (cache)
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# Build
FROM base AS build
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
# Se usar Prisma: descomente a linha abaixo
# RUN npm run prisma:generate
RUN npm run build

# Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Instalar serve globalmente
RUN npm install -g serve

# Copiar arquivos estáticos gerados pelo build
COPY --from=build /app/out ./out

EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]