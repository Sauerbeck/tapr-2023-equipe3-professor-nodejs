# tapr-2023-equipe3-professor-nodejs

## Autententicação azure

[DOC](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-linux?pivots=apt)

az login -u mateus.sauerbeck@univille.br

az ad signed-in-user show

az cosmosdb sql role assignment create --account-name cosmossauerbeck --resource-group rg-tapr2023-brazilsouth-dev-001 --role-assignment-id 00000000-0000-0000-0000-000000000002 --role-definition-name "Cosmos DB Built-in Data Contributor" --scope "/" --principal-id 30b26f49-2047-432b-8c1e-e1e972df0207