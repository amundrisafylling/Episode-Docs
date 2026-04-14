# Read S3 object as stream

Reads the contents of an Azure Blob as a [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream). Prefer using streaming over [Read Blob as byte array](../azure-blob-storage/read-blob-as-byte-array.md) if possible. Streaming is generally faster and uses less memory, because streaming doesn't require loading the entire blob into memory before you can start working with the data.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/read-as-stream-amaz.png)

**Example** ![img](../../../../images/strz.jpg)  
The flow reads an S3 object as a stream, loads the data into a DataTable, and then inserts it into a database.
</br>
</br>

> [!NOTE]
> If you need to read the file multiple times, for example processing its contents and then sending the file somewhere else (such as to an archive), you MUST use the byte array option instead of streaming because the stream can only read once.

Once you have the blob contents, you must _load_ it using a compatible action in order to make use of the data.

For example, a CSV file can be loaded using the [Open CSV file as DataReader](../csv/open-csv-file-as-datareader.md), [Read CSV file as DataTable](../csv/read-csv-file-as-datatable.md), or [For each row in CSV file](../csv/for-each-row.md) actions. Once loaded, you can start working with the data in the CSV file.

> [!CAUTION]
> Trying to load a Stream using an incompatible action will fail.

<br/>

## Properties

| Name                 | Required | Description                                                                                 |
| -------------------- | -------- | ------------------------------------------------------------------------------------------- |
| Title       | Optional |  The title of the action.   |
| Connection           | Required | Specify the [connection](connecting-to-amazon-s3.md) to the Amazon S3 bucket. |
| Object name          | Required | The name of the object to read from.                                                        |
| Result variable name | Required | The name of the Flow variable that contains the list of the object names.                   |
| Description          | Optional |  Additional notes or comments about the action or configuration. |

<br/>

## Returns

[Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream)
