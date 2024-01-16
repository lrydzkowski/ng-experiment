FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine as production
COPY --from=builder /app/dist/ng-experiment /app
EXPOSE 80
CMD ["node", "app/server/server.mjs"]