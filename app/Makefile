all: start_app

build_and_start_app:
	docker-compose -f docker/docker-compose.yml up --build -d

start_app:
	docker-compose -f docker/docker-compose.yml up -d

clean:
	docker-compose -f docker/docker-compose.yml down --volumes