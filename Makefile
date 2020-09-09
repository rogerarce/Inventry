build-dev:
	npm run build

dev-s3:
	aws s3 sync ./dist/ s3://knowwelllb --exclude 'assets/*' --delete --profile user

deploy-dev: | build-dev dev-s3
