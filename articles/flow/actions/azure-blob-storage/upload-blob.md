# Upload Blob

Uploads a byte array or [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream) to an [Azure Blob](https://learn.microsoft.com/en-us/azure/storage/blobs/) container.

![img](../../../../images/flow/upload-to-asb-blob.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow extracts data from a table, convert it into a CSV file, and upload it to an Azure Blob Storage container. Used actions: [Declare Variable](../built-in/declare-variable.md), [Get DataReader](../sql-server/get-datareader.md), [Create CSV file as stream](../csv/create-csv-file-as-stream.md) and [Upload Blob]().


## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Connection       | Required  | The [Azure Blob container connection](./azure-blob-container-connection.md). The currently supported options are `SAS URI` and `Connection string + container name`.    |
| Dynamic connection | Optional   | A connection dynamically created using the [Create Azure Blob container connection](./create-azure-blob-container-connection.md) action.    |
| Blob name        | Required  | The name of the blob (file)  |
| Blob data        | Required  | The data to upload. It must be a byte array or [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream) |
| Overwrite if blob already exists | Optional | If not checked, the action will fail if a blob with the same name already exists. |

<br/>

[!INCLUDE [](./__videos.md)]