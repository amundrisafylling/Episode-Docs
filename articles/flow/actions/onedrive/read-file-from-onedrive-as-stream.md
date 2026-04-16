# Read file from OneDrive as stream

Reads the contents of a file in OneDrive as a stream.

![img](../../../../images/flow/onedrive-read-file-as-stream.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow retrieves a list of OneDrive items (files and optionally folders) from a specified folder, identifies which of those items are Excel files, and for each Excel file reads its contents and processes the data row by row.

## Properties

| Name                 | Required | Description                                                                                                                                                     |
| -------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection           | Yes | The connection to the OneDrive account. Setting up a connection requires a Microsoft `Work or School account`.                                                  |
| File                 | Yes | The path to the file in OneDrive. When using a [OneDriveItem](./api-reference/onedrive-item.md), use the `Path` property like shown in the example image below. |
| Result variable name | Yes | The name of the variable containing the file stream.                                                                                                            |

<br/>

## Returns

A [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream) that provides access to the contents of the file. Use the stream as input to other actions, for example the [Open Excel file as DataReader](../excel/open-excel-file-as-datareader.md) if you are fetching an Excel-file from OneDrive.

<br/>

> [!NOTE]
> When you want to read a file in OneDrive, you need to provide the `path` to the file, not the name. When using a [OneDriveItem](./api-reference/onedrive-item.md) as input, select the `Path` property like shown below.  
> [OneDriveItems](./api-reference/onedrive-item.md) are returned from the [For each file in OneDrive](foreach-file-in-onedrive.md) and [Get files in OneDrive](get-files-in-onedrive.md) actions.

![img](../../../../images/flow/onedrive-read-file-as-stream-select-file.png)
