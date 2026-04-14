# Create Azure Blob container connection

This action creates an Azure Blob container connection and is intended for dynamically connecting to different Azure Blob containers during the execution of a Flow.     

If you store the credentials for connecting to Azure Blob containers outside Flow (for example in your own Azure SQL or PostgreSQL database), use this action to _dynamically_ create a connection for use with the different Azure Blob actions. The connection returned from the action must then be used as the input to the `Dynamic connection` property of an Azure Blob action, for example the [Read blob as stream](./read-blob-as-stream.md) or [Append to blob](./append-to-blob.md) actions.

This enables dynamically connecting to different Azure Blob containers based on parameters or conditions in a Flow.

![img](/images/flow/azure-blob-create-container-connection.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow creates a connection to an Azure Blob Storage container and reads a CSV file from it for further processing.  
Actions used in the flow are: PostgreSQL [Get entity](../postgresql/get-entity.md), [Create Azure Blob container connection](), [Read Blob as stream](read-blob-as-stream.md) and [Open CSV file as DataReader](../csv/open-csv-file-as-datareader.md). 


## SAS URI

[Read about SAS URI for Azure Blob container connections here](./azure-blob-container-connection.md#sas-uri)

| Property         | Required | Description                      |
|------------------|-----------|----------------------------------|
| SAS URI          | Required  | The SAS URI used to connect to the Azure Blob container. |

## Connection string and container name

[Read about Connection strings for Azure Blob container connections here](./azure-blob-container-connection.md#connection-string-and-container-name)

| Property          | Required | Description                     |
|-------------------|----------|---------------------------------|
| Connection string | Required | The connection string to use when connecting to an Azure Blob container. |
| Container name    | Required | The container you want to connect to.  |