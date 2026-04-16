# Delete directory

Deletes a directory from an [Azure Files](https://learn.microsoft.com/en-us/azure/storage/files/storage-files-introduction) share.


![Delete Directory In File](../../../../images/flow/delete-directory-in-file.png)

**Example** ![Example](../../../../images/strz.jpg)  
The example above takes a file from storage, reads its JSON content, saves the data to a database, and then deletes the storage folder to keep things tidy.  Used actions: 1. [Read file from share as byte array](../azure-files/read-file-as-byte-array.md) 2. [Get JSON DataReader](../json/get-json-datareader.md) 3. [Insert rows](../sql-server/insert-data.md) 4. Delete directory.

</br>

## Properties

| Name                     | Required | Description                                                 |
|--------------------------|-----------|-------------------------------------------------------------|
| Title                    | No | The name of the action.                                      |
| Connection               | Yes |  The [Azure Files connection](./connecting-to-azure-files.md) to a Share.   |
| Directory                | Yes | The path to the directory to delete (e.g., /MyFolder).            |
| Delete all content       | No | If checked, deletes all content within the directory.        |
| Raise exception on failure | No | If checked, triggers an exception if the deletion fails.     |
| Description              | No | Additional information about the action.                     |
