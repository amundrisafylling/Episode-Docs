# Delete Blob

Deletes a blob from an Azure Blob container.

![Delete Blob](../../../../images/flow/delete-blob.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow iterates over blob names and checks for `.txt` files; if the condition is met, the `.txt` blobs are deleted. 
Actions used in the flow are: [For each Blob name](foreach-blob-name.md), [If](../built-in/if.md) and [Delete Blob](). 

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Connection       | Yes | The [Azure Blob container connection](./azure-blob-container-connection.md). The currently supported options are `SAS URI` and `Connection string + container name`.    |
| Dynamic connection | No | A connection dynamically created using the [Create Azure Blob container connection](./create-azure-blob-container-connection.md) action.    |
| Blob name        | Yes | The name of the blob to delete.                        |

<br/>

[!INCLUDE [](./__videos.md)]