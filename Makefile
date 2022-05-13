.PHONY: docs
docs:
	npx docusaurus start

.PHONY: docs-build
docs-build:
	npm run build

all: install src