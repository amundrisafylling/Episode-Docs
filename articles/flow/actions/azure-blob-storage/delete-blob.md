# Delete Blob

Deletes a blob from an Azure Blob container.

![img](../../../../images/flow/delete-blob.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow iterates over blob names and checks for `.txt` files; if the condition is met, the `.txt` blobs are deleted. 
Actions used in the flow are: [For each Blob name](foreach-blob-name.md), [If](../built-in/if.md) and [Delete Blob](). 

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Connection       | Required  | The [Azure Blob container connection](./azure-blob-container-connection.md). The currently supported options are `SAS URI` and `Connection string + container name`.    |
| Dynamic connection | Optional   | A connection dynamically created using the [Create Azure Blob container connection](./create-azure-blob-container-connection.md) action.    |
| Blob name        | Required  | The name of the blob to delete.                        |

<br/>

[!INCLUDE [](./__videos.md)]