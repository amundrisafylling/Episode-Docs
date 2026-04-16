# Update context of multiple files in File Storage

Updates the context of multiple files in an InVision File Storage.

Use this operation for batch operations when you need to update the context of multiple files.

A `context` defines what a file is associated with, for example a project, employee or product. The context can be a composite definition, meaning it can be associated with a combination of multiple entities such as a project, employee and product.

![Update Context Of Multiple Files](../../../../../images/flow/update-context-of-multiple-files.png)

**Example** ![Example](../../../../../images/strz.jpg)  
This flow updates the context of multiple files only when the existing context is different or does not exist. It starts with [Get multiple file info from File Storage](get-files-info-from-file-storage.md), which retrieves metadata for the specified files and stores the result in `filesInfo`. Next, an [If action](../../built-in/if.md) checks whether the current context of the files is different from the provided context or not defined. If the condition is **True**, the flow calls **Update context of multiple files in File Storage**, passing the `fileReferenceIds` and the new `fileContext`. This updates the context for all specified files. If the condition is **False**, the flow continues without making any changes.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Connection | Yes | The [InVision connection](../invision-connection.md) used to access File Storage. |
| File storage | Yes | The [File Storage](../../../../invision/docs/filestorage.md) where the files are located. |
| File references | Yes | The list of file reference IDs for the files whose context should be updated. |
| File context | Yes | The new context value to assign to the files. |
| Disabled | No | If selected, the action will not execute. |
| Description | No | A custom description of the action configuration. |
