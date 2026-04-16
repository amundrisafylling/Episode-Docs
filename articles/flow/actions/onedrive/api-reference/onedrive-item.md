# OneDriveItem

Represents an item in Microsoft OneDrive.

## Properties

| Name         | Required       | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Id           | String          | The id of the drive item                          |
| Name         | String          | The name of the file or folder. If this is a file, it includes the file extension. |
| IsFolder     | Boolean         | True if the item is a folder, otherwise false.    |
| LastModified | DateTimeOffset  | Indicates when the file or folder was last modified.  |
| Size         | Int64           | The size of the file or folder in number of bytes. |
| WebUrl       | String          | The url of the file or folder.                    |
| Path         | String          | The path of the file or folder relative to the Drive root. |
| MediaType    | String          | The [media type](https://en.wikipedia.org/wiki/Media_type) of the file. |
| WebDavUrl    | String          | The WebDAV URL of the file. |
| ETag         | String          | The ETag of the drive item. |