# Get S3 object names

Gets a list of all object names in the Bucket container where, the S3 object is for example `myfile.txt`.

Use this action if you need a list of all the object names in a Bucket. If you only need to iterate over the objects in a bucket _one by one_, consider using the [For each S3 object name](foreach-s3object-name.md) action instead.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/getS3objNames.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow scans a list of object names and checks if a specific file (UC036_Products.xlsx) exists. If found, it could trigger further processing. If not, it may continue checking or exit.

<br/>

## Properties

| Name                      | Required | Description                                                                                 |
| ------------------------- | -------- | ------------------------------------------------------------------------------------------- |
| Title       | Optional |  The title of the action.   |
| Connection                | Required | Specify the [connection](connecting-to-amazon-s3.md) to the Amazon S3 bucket. |
| Object name prefix filter | Optional | Prefix filter for object names. **Note!** The prefix is case sensitive.                     |
| Result variable name      | Required | The name of the Flow variable that contains the list of the objects names.                  |
| Description               | Optional | Additional notes or comments about the action or configuration. |

<br/>

## Returns
[List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<[string](https://learn.microsoft.com/en-us/dotnet/api/system.string)> containing S3 object names.

<br/>


