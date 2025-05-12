.DEFAULT_GOAL := all

UID = $(shell id -u ${USER})
GID = $(shell id -g ${USER})

build:
	docker compose build --progress=plain

run:
	docker compose run --rm --user ${UID}:${GID} tsc

all:
	docker compose run --build --rm --user ${UID}:${GID} tsc
