# Get files in OneDrive

Gets a list of files and folders in a OneDrive folder.

![img](../../../../images/flow/onedrive-get-files-in-folder.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow retrieves a list of OneDrive items (files and optionally folders) from a specified folder, identifies which of those items are Excel files, and for each Excel file reads its contents and processes the data row by row.


## Properties

| Name                 | Required | Description                                                                                                    |
| -------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Connection           | Yes | The connection to the OneDrive account. Setting up a connection requires a Microsoft `Work or School account`. |
| Folder               | No | The OneDrive folder to read from.                                                                              |
| Include folders      | No | True to include folders in the list of [OneDriveItems](./api-reference/onedrive-item.md) to return.            |
| Result variable name | Yes | The name of the variable that contains the list of [OneDriveItems](./api-reference/onedrive-item.md) returned. |

<br/>

## Returns

[List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1) of [OneDriveItems](./api-reference/onedrive-item.md) containing metadata about the files (and optionally folders) in the specified OneDrive folder.  
If no folder is specified, the items in the root folder is returned.
