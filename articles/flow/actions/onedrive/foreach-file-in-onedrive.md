# For each file in OneDrive

Iterates over a list of all [items](./api-reference/onedrive-item.md) in a OneDrive folder.

![img](../../../../images/flow/onedrive-foreach-file.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow iterates through all files in a OneDrive folder, deletes each file, and then sends an email notification once all deletions are completed.

## Properties

| Name              | Required | Description                                                                                                   |
|-------------------|-----------|---------------------------------------------------------------------------------------------------------------|
| Connection        | Required  | The connection to the OneDrive account. Setting up a connection requires a Microsoft *Work or School account*. |
| Folder            | Optional  | The OneDrive folder to iterate through. If not specified, the root folder is used.                            |
| Drive item name   | Required  | The variable name that represents each file (driveItem) during iteration.                                      |
| Disabled          | Optional  | If enabled, the node is skipped during execution.                                                             |
| Description       | Optional  | Additional notes describing the purpose or behavior of this node.                                             |
