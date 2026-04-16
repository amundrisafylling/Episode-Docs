# Delete file from File Storage

Deletes a file from an InVision [File Storage](/articles/invision/docs/filestorage.md).

![Delete File File Storage](../../../../../images/flow/delete-file-fileStorage.png)


**Example** ![Example](../../../../../images/strz.jpg)  
This flow [loads all files from File Storage](get-files-info-from-file-storage.md), [filters](../../built-in/foreach.md) them based on defined criteria, and deletes the matching files one by one.





## Properties

| Name          | Required | Description                                      |
|---------------|----------|--------------------------------------------------|
| Connection    | Yes | The [InVision connection](../invision-connection.md) used to access File Storage. |
| File storage  | Yes | The File Storage from which the file will be deleted. |
| File reference| Yes | The reference ID of the file to delete.         |
| Disabled      | No | If enabled, the action will not execute.        |
| Description   | No | Additional information about the action.        |