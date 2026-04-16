# For each file info

Iterates over a list of information per file in an FTP / SFTP directory and sub directories (optional).

![img](../../../../images/flow/ftp-foreach-file-info.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow uses **For each file info** to iterate through all files in a specific FTP folder. It evaluates [if](../built-in/if.md) each file is older than 7 days and [deletes](delete-file.md) it from the server if the condition is met, helping to maintain available storage.

<br/>

## Properties

| Name                          | Required | Description                                                                 |
|-------------------------------|-----------|-----------------------------------------------------------------------------|
| Title                         | No | The title of the action.                                                   |
| Connection                    | Yes | Select a connection to the FTP or SFTP server where files are located.     |
| File name                     | No | Select or enter the name of the file. |
| Directory path                | No | Select or enter the directory to look in. |
| Include files in sub directories | No | Enable this option to include files from all nested subdirectories.         |
| Description                   | No | Additional notes or comments about the action or configuration.            |

<br/>

## Returns

A **FileInfo** object which contains the following properties:


| Property        | Description |
|-----------------|-------------|
| **FileName**    | The name of the file. |
| **FilePath**    | The full path to the file on the FTP server. |
| **IsFolder**    | Indicates whether the item is a folder (`true`) or a file (`false`). |
| **LastModified** | The date and time the file was last modified. |
| **Size**        | The size of the file in bytes. |
