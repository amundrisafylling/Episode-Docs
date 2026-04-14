# Read S3 object as byte array

Reads the contents of an Amazon S3 object into memory as a byte array. You can compare this to downloading a file. Prefer using [streaming](read-s3object-as-stream.md) over reading as byte array if possible. Streaming is generally faster and uses less memory, because streaming doesn't require loading the entire object into memory before you can start working with the data.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/read-as-byte.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow ensures that the object is moved from a staging area to the main storage and then the corresponding table is cleared.
</br>
</br>

> [!NOTE]
> If you need to read the file multiple times, for example processing its contents and then sending the file somewhere else (such as to an archive), you MUST use the byte array option instead of streaming because the stream can only read once.

Once you have the object contents, you must _load_ it using a compatible action in order to make use of the data.

For example, an Excel file can be loaded using the [Open Excel file as DataReader](../excel/open-excel-file-as-datareader.md), [Read Excel file as DataTable](../excel/read-excel-file-as-datatable.md), or [For each row in file](../excel/for-each-row.md) actions. Once loaded, you can start working with the data in the Excel file.

> [!CAUTION]
> Trying to load a byte array using an incompatible action will fail.

<br/>

## Properties

| Name                 | Required | Description                                                                                 |
| -------------------- | -------- | ------------------------------------------------------------------------------------------- |
| Title       | Optional |  The title of the action.   |
| Connection           | Required | Specify the [connection](connecting-to-amazon-s3.md) to the Amazon S3 bucket. |
| Object name          | Required | The name of the object to read from.                                                        |
| Result variable name | Required | The name of the Flow variable that contains the list of the object names.                   |
| Description          | Optional |  Additional notes or comments about the action or configuration.  |

<br/>

## Returns

[Byte](https://learn.microsoft.com/en-us/dotnet/api/system.byte) [array](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays)
