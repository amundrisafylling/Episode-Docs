# Upload Amazon S3 object

Uploads a byte array or [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream) to an Amazon S3 bucket.

![img](../../../../images/flow/uppload-s3obj.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow ensures that data is either appended to an existing file or a new object is uploaded. 

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title       | No |  The title of the action.   |
| Connection       | Yes | Specify the [connection](connecting-to-amazon-s3.md) to the Amazon S3 bucket.       |
| Object name        | Yes | The name of the object (file)  |
| Object data        | Yes | The data to upload. It must be a byte array or [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream) |
| Overwrite if object already exists | No | If not checked, the action will fail if a object with the same name already exists. |
| Description | No | Additional notes or comments about the action or configuration. |

