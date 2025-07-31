# Movie Search App

## Development Setup

```sh
bun create vite client -- --template react-ts
bun create hono api
```

## Docker Development

To run the development environment with hot reloading:

```bash
docker compose -f docker-compose.dev.yml up --build
```

This will start:

- Client on <http://localhost:5173>
- API on <http://localhost:3000>

## Docker Production

To run the production build:

```bash
docker compose -f docker-compose.prod.yml up --build
```

This will start:

- Client on <http://localhost:80>
- API on <http://localhost:3000>

## Development Commands

- `docker compose -f docker-compose.dev.yml up` - Start development environment
- `docker compose -f docker-compose.dev.yml down` - Stop development environment
- `docker compose -f docker-compose.prod.yml up` - Start production environment
- `docker compose -f docker-compose.prod.yml down` - Stop production environment
