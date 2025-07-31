# Movie Search App

A full-stack movie search application built with **Bun**, **React**, **TypeScript**, and **Hono**.

## 🏗️ Project Structure

```text
movie-search-app/
├── client/                 # React frontend (Vite + TypeScript)
│   ├── src/
│   └── package.json
├── api/                    # Hono backend API
│   ├── src/
│   └── package.json
├── scripts/                # Data fetching utilities
│   └── src/
├── docker-compose.dev.yml  # Development environment
├── docker-compose.prod.yml # Production environment
└── Makefile               # Build and deployment commands
```

## 🚀 Technology Stack

- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime
- **Frontend**: React + TypeScript + Vite
- **Backend**: Hono (lightweight web framework)
- **Data**: TMDB API integration
- **Containerization**: Docker + Docker Compose
- **Build Tool**: Vite for frontend, Bun for backend

## 🛠️ Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed
- Docker and Docker Compose installed

### Development Setup

```bash
# Clone and setup
git clone <repository-url>
cd movie-search-app

# Install dependencies
bun install

# Start development environment
make dev-build
```

## 🐳 Docker Commands

### Using Makefile (Recommended)

```bash
# Development
make dev-up      # Start development environment
make dev-down    # Stop development environment
make dev-build   # Build and start development
make dev-logs    # View development logs

# Production
make prod-up     # Start production environment
make prod-down   # Stop production environment
make prod-build  # Build and start production
make prod-logs   # View production logs

# Utilities
make clean       # Clean up containers and volumes
make help        # Show all available commands
```

### Direct Docker Compose

```bash
# Development
docker compose -f docker-compose.dev.yml up --build

# Production
docker compose -f docker-compose.prod.yml up --build
```

## 🌐 Access Points

### Development Environment

- **Frontend**: <http://localhost:5173>
- **Backend API**: <http://localhost:3000>

### Production Environment

- **Frontend**: <http://localhost:80>
- **Backend API**: <http://localhost:3000>

## 📊 Data Management

The app fetches movie data from TMDB API using the scripts in `scripts/`:

```bash
# Fetch latest movie data
bun run fetch-data
```

## 🔧 Development Workflow

1. **Start development**: `make dev-build`
2. **View logs**: `make dev-logs`
3. **Stop services**: `make dev-down`
4. **Clean up**: `make clean`

## 🚀 Production Deployment

1. **Build and start**: `make prod-build`
2. **Monitor logs**: `make prod-logs`
3. **Stop services**: `make prod-down`
