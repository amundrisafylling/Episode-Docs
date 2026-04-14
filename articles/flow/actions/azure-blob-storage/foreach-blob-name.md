# For each Blob name

Iterates over a list of all blob names in an Azure blob container. The blob name is the name of the blob object, for example `myfile.txt`. 

![img](../../../../images/flow/foreach-blob-name.png)

**Example** ![img](../../../../images/strz.jpg)  
A company stores customer invoices as PDFs in an Azure Blob Storage container. This flow retrieves all invoice file names, processes each invoice, and updates a database with relevant details. Used actions: [Get Blob names](get-blob-names.md), [For each Blob name]() and [Function](../built-in/function.md).


## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Connection       | Required  | The [Azure Blob container connection](./azure-blob-container-connection.md). The currently supported options are `SAS URI` and `Connection string + container name`.    |
| Dynamic connection | Optional   | A connection dynamically created using the [Create Azure Blob container connection](./create-azure-blob-container-connection.md) action.    |
| Blob name prefix | Optional  | To filter the list of blobs, specify a string for the [prefix parameter](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-list#filter-results-with-a-prefix).**Note!** The prefix is case sensitive. |
| Blob name | Required | The name of the Flow variable that contains the current blob name in the list. |

<br/>

[!INCLUDE [](./__videos.md)]