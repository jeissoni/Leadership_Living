.PHONY: help install dev start build preview clean

help:
	@echo "Leadership Living — recursos teológicos"
	@echo ""
	@echo "  make install   Instala dependencias (npm install)"
	@echo "  make dev       Levanta el sitio en http://localhost:4321"
	@echo "  make start     Alias de make dev"
	@echo "  make build     Genera el sitio estático en dist/"
	@echo "  make preview   Construye y sirve dist/ en local"
	@echo "  make clean     Borra dist/, .astro/ y node_modules/"

install:
	npm install

dev start:
	npm run dev

build:
	npm run build

preview: build
	npm run preview

clean:
	rm -rf dist .astro node_modules
