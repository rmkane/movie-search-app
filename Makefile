# Variables
COMPOSE_DEV := docker-compose.dev.yml
COMPOSE_PROD := docker-compose.prod.yml
DOCKER_COMPOSE := docker compose -f

.DEFAULT_GOAL := help

.PHONY: dev-up dev-down dev-build dev-logs
.PHONY: prod-up prod-down prod-build prod-logs
.PHONY: clean help

# Development environment
dev-up: # Start development environment
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) up

dev-down: # Stop development environment
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) down

dev-build: # Build and start development environment
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) up --build

dev-logs: # Show development logs
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) logs -f

# Production environment
prod-up: # Start production environment
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) up

prod-down: # Stop production environment
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) down

prod-build: # Build and start production environment
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) up --build

prod-logs: # Show production logs
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) logs -f

# Utility commands
clean: # Clean up all containers and volumes
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) down -v
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) down -v
	docker system prune -f

# Help
help: # Show this help message
	@printf "Usage: make \033[36m<target>\033[0m\n\n"
	@awk 'BEGIN {FS = ":.*?# "} \
		/^[a-zA-Z_-]+:.*?# / { \
			printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 \
		}' $(MAKEFILE_LIST)
