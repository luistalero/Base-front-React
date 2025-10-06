dev:
	docker-compose -f docker-compose.local.yml up --build -d

prod:
	docker-compose up --build -d

down:
	docker-compose down

clean:
	docker system prune -a

prub:
	cd src && pnpm run dev

cache:
	docker compose -f docker-compose.local.yml build --no-cache

time:
	time docker build --progress=plain -t semilla-front:latest .

time-dev:
	time docker build --progress=plain -t semilla-front:latest -f Dockerfile.dev .