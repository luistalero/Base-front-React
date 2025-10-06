FROM node:22.20.0-alpine@sha256:cb3143549582cc5f74f26f0992cdef4a422b22128cb517f94173a5f910fa4ee7 AS builder

RUN --mount=type=cache,id=corepack,target=/root/.cache/node/corepack \
corepack enable && corepack prepare pnpm@10.17.1 --activate

WORKDIR /app

COPY --chown=node:node src/package.json src/pnpm-lock.yaml* ./

RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --ignore-scripts --frozen-lockfile

ENV PATH=/app/node_modules/.bin:$PATH

COPY src .

RUN ["pnpm", "run", "build"]

FROM nginx:1.26.1-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]