# Read file from share as byte array

Reads the contents of a file in an [Azure Files](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction) share as a byte array.


![img](../../../../images/flow/Read-file-from-share-as-bytearray.png)

**Example** ![img](../../../../images/strz.jpg)  
The example above takes a file from storage, reads its JSON content, saves the data to a database, and then deletes the storage folder to keep things tidy.  Used actions: 1. Read file from share as byte array 2. [Get JSON DataReader](../json/get-json-datareader.md) 3. [Insert rows](../sql-server/insert-data.md) 4. [Delete directory](delete-directory.md).

</br>

## Properties

| Name       | Required | Description                                                              |
| ---------- | -------- | ------------------------------------------------------------------------ |
| Connection | Required | The [Azure Files connection](./connecting-to-azure-files.md) to a Share. |
| File name  | Required | The name and full path to the file to download.                          |

<br/>

## Returns

[Byte](https://learn.microsoft.com/en-us/dotnet/api/system.byte) [array](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays)

