clean:
		find . -name "*error.log" -type f -delete
		find . -name "*debug.log" -type f -delete
		lerna clean --yes
		rm -rf ./node_modules/
		rm -rf ./.cache-loader/
		lerna bootstrap