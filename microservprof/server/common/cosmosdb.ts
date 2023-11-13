import { CosmosClient, Database } from "@azure/cosmos";
import { DefaultAzureCredential } from "@azure/identity";


const cosmosclient = new CosmosClient({
    endpoint:process.env.COSMOSDBURL as string,
    aadCredentials: new DefaultAzureCredential()


});

export default cosmosclient.database(process.env.COSMOSDBDB as string);
