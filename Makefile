GREEN = \033[0;32m
BLUE = \033[0;34m
YELLOW = \033[0;33m
RED = \033[0;31m
RESET = \033[0m

.PHONY: all help build up down restart logs clean fclean re \
        dev-up dev-down install-deps frontend-shell backend-shell \
        ps health

all: help

help:
	@echo "$(BLUE)Portfolio managment$(RESET)"
	
	@echo ""
	@echo "$(GREEN)Development:$(RESET)"
	@echo "  make build         - Build all containers"
	@echo "  make up            - Start application in detached mode"
	@echo "  make dev-up        - Start in interactive mode"
	@echo "  make down          - Stop all containers"
	@echo "  make restart       - Restart all containers"
	@echo ""
	@echo "$(GREEN)Monitoring:$(RESET)"
	@echo "  make logs          - View real-time logs"
	@echo "  make ps            - List active containers"
	@echo "  make health        - Check services status"
	@echo ""
	@echo "$(GREEN)Maintenance:$(RESET)"
	@echo "  make clean         - Stop and remove containers"
	@echo "  make fclean        - Deep clean with volumes and images"
	@echo "  make re            - Full rebuild"
	@echo ""
	@echo "$(GREEN)Utils:$(RESET)"
	@echo "  make install-deps  - Install dependencies locally"
	@echo "  make frontend-shell- Open shell in frontend container"
	@echo "  make backend-shell - Open shell in backend container"
	@echo ""

build:
	@echo "$(YELLOW)Building Docker images...$(RESET)"
	@docker-compose build
	@echo "$(GREEN)Build complete$(RESET)"

up:
	@echo "$(YELLOW)Starting containers...$(RESET)"
	@docker-compose up -d
	@echo "$(GREEN)Application started$(RESET)"
	@echo "$(BLUE)Frontend: http://localhost:5173$(RESET)"
	@echo "$(BLUE)Backend:  http://localhost:5000$(RESET)"

dev-up:
	@echo "$(YELLOW)Starting in development mode...$(RESET)"
	@docker-compose up

down:
	@echo "$(YELLOW)Stopping containers...$(RESET)"
	@docker-compose down
	@echo "$(GREEN)Containers stopped$(RESET)"

restart: down up

logs:
	@docker-compose logs -f

logs-frontend:
	@docker-compose logs -f frontend

logs-backend:
	@docker-compose logs -f backend

ps:
	@docker-compose ps

health:
	@echo "$(YELLOW)Checking services health...$(RESET)"
	@curl -f http://localhost:5173 > /dev/null 2>&1 && \
		echo "$(GREEN)Frontend: OK$(RESET)" || \
		echo "$(RED)Frontend: DOWN$(RESET)"
	@curl -f http://localhost:5000/api/health > /dev/null 2>&1 && \
		echo "$(GREEN)Backend: OK$(RESET)" || \
		echo "$(RED)Backend: DOWN$(RESET)"

clean: down
	@echo "$(YELLOW)Cleaning containers...$(RESET)"
	@docker-compose rm -f
	@echo "$(GREEN)Clean complete$(RESET)"

fclean: clean
	@echo "$(YELLOW)Deep cleaning...$(RESET)"
	@docker-compose down -v --rmi all
	@docker system prune -f
	@echo "$(GREEN)Deep clean complete$(RESET)"

re: fclean build up

install-deps:
	@echo "$(YELLOW)Installing local dependencies...$(RESET)"
	@cd frontend && npm install
	@cd backend && npm install
	@echo "$(GREEN)Dependencies installed$(RESET)"

frontend-shell:
	@docker exec -it 42_frontend sh

backend-shell:
	@docker exec -it 42_backend sh

rebuild-frontend:
	@docker-compose up -d --build frontend

rebuild-backend:
	@docker-compose up -d --build backend