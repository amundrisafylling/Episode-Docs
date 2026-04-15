
# File Storage Setup

>[!NOTE]
> If you run Hypergene InVision as a hosted SaaS service, the File Storage configuration is automatically configured.  
> The contents of this page only applies to on-premises deployments.

## Supported storage mediums

Before you can use  [File Storage](../filestorage.md), you need to set up how the files should be physically stored. You do this by specifying a _file storage provider_, such as Azure Blob Storage or a disk.
<br/>

### Configuring Azure Blob Storage

Using this option, files will be stored in Azure Blob Storage.

To configure Azure Blob Storage, perform the following steps

1. Create an Azure Blob Storage
2. Edit the **Web client** `appsettings.json` file
3. In the `FileStorage` configuration section, do the following

- Change the `StorageType` to "AzureBlobStorage"
- Specify the Azure Blob Storage ``SasUri``

1. Repeat these steps for the **System Worker** appsettings.json file

**Example:**

```json
"FileStorage": {
    "StorageType": "AzureBlobStorage",
    "AzureBlobStorage": {
      "SasUri": "https://....blob.core.windows.net/..."
    },
    ...
  },
```

<br/>

### Configuring Local disk

Using this option, files will be stored on a disk drive under the specified path.

1. Edit the **Web client** `appsettings.json` file
2. In the `FileStorage` configuration section, do the following

- Change the `StorageType` to "FileSystem"
- Specify the FileSystem `Path` property

3. Repeat these steps for the **System Worker** appsettings.json file

**Example:**

```json
"FileStorage": {
    "StorageType": "FileSystem",
    ...
    "FileSystem": {
      "Path": "Z:\\Profitbase\\InVision\\Filestorage"
    },
  },
```


>[!NOTE]
> When using local disk as the physical file storage, it is important to set up backup of the specified path in case of disk failure or other critical errors. Hypergene InVision does not have a built-in backup solution, so this has be set up manually.


<br/>

## Videos

- [File Storage](../../videos/filestorage.md)
- [File Storage - Basics](https://profitbasedocs.blob.core.windows.net/videos/File%20Storage%20-%20Basics.mp4)