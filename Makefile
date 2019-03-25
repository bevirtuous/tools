PACKAGES = eslint-config unit-tests i18n

clean:
		find . -name "*error.log" -type f -delete
		find . -name "*debug.log" -type f -delete
		lerna clean --yes
		rm -rf ./node_modules/
		rm -rf ./.cache-loader/
		lerna bootstrap

release:
		make clean
		make build
		make push

build:
		make build-lerna
		make publish

build-lerna:
		lerna publish --exact --skip-npm

publish:
		$(eval VERSION=$(shell cat ./lerna.json | grep version | head -1 | awk -F: '{ print $$2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]'))
		$(eval SUBSTR=$(findstring beta, $(VERSION)))
		$(foreach package, $(PACKAGES), $(call do-publish, $(package), $(SUBSTR)))

push:
		git push
		git push --tags

define do-publish
		@if [ "$(strip $(2))" == "beta" ]; \
			then npm publish ./packages/$(strip $(1))/ --access public --tag beta; \
			else npm publish ./packages/$(strip $(1))/ --access public; \
		fi;

endef
