Remove-Item ./src/_generated/lexica-api -Recurse
curl https://localhost:7040/swagger/v1/swagger.json > ./src/_generated/lexica-api-openapi.json
openapi-generator-cli generate `
  --input-spec ./src/_generated/lexica-api-openapi.json `
  --output ./src/_generated/lexica-api `
  --generator-name typescript-angular `
  --additional-properties apiModulePrefix=Lexica
Remove-Item ./src/_generated/lexica-api-openapi.json