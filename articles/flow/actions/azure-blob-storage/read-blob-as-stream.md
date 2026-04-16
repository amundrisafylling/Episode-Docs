# Read Blob as stream

Reads the contents of an [Azure Blob](https://learn.microsoft.com/en-us/azure/storage/blobs/) as a [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream). Prefer using streaming over [Read Blob as byte array](read-blob-as-byte-array.md) if possible. Streaming is generally faster and uses less memory, because streaming doesn't require loading the entire blob into memory before you can start working with the data.

![Read Blob As Stream](../../../../images/flow/read-blob-as-stream.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow iterates through blob files in Azure Blob Storage, checks if the content is inside a CSV file, reads the blob as a stream, and finally reads the CSV file as a stream of records. Used actions: [Get Blob info](), [If](../built-in/if.md) and [Read Blob as byte array](read-blob-as-byte-array.md).



> [!NOTE]
> If you need to read the file multiple times, for example processing its contents and then sending the file somewhere else (such as to an archive), you MUST use the byte array option instead of streaming because the stream can only read once.

Once you have the blob contents, you must _load_ it using a compatible action in order to make use of the data.

For example, a CSV file can be loaded using the [Open CSV file as DataReader](../csv/open-csv-file-as-datareader.md), [Read CSV file as DataTable](../csv/read-csv-file-as-datatable.md), or [For each row in CSV file](../csv/for-each-row.md) actions. Once loaded, you can start working with the data in the CSV file.

> [!CAUTION]
> Trying to load a Stream using an incompatible action will fail.

<br/>

## Properties

| Name                 | Required | Description  |
| -------------------- | -------- | -------------------------------------------- |
| Connection       | Yes | The [Azure Blob container connection](./azure-blob-container-connection.md). The currently supported options are `SAS URI` and `Connection string + container name`.    |
| Dynamic connection | No | A connection dynamically created using the [Create Azure Blob container connection](./create-azure-blob-container-connection.md) action.    |
| Blob name prefix     | No | To filter the list of blobs, specify a string for the [prefix parameter](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-list#filter-results-with-a-prefix). **Note!** The prefix is case sensitive. |
| Result variable name | Yes | The name of the Flow variable that contains the list of the blob names.                                                                                                                                                  |

<br/>

## Returns

[Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream)
<br/>

[!INCLUDE [](./__videos.md)]