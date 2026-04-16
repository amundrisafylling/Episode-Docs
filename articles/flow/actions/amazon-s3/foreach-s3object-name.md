# For each S3 object name

Iterates over a list of all Amazon S3 object names in the Amazon Bucket.

![Foreach Amaz](https://profitbasedocs.blob.core.windows.net/flowimages/foreach-amaz.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow validate that the number of products is exactly 17 before proceeding with processing individual product names. If the count is incorrect, it stops and logs an error. Otherwise, it continues processing the object names in a loop.

## Properties

| Name                      | Required | Description                                                                                 |
| ------------------------- | -------- | ------------------------------------------------------------------------------------------- |
| Title       | No |  The title of the action.   |
| Connection                | Yes | Specify the [connection](connecting-to-amazon-s3.md) to the Amazon S3 bucket. |
| Object name prefix filter | No | Prefix filter for object names. **Note!** The prefix is case sensitive.                     |
| Object name               | Yes | The name of the object to read from.                                                        |
| Description               | No | Additional notes or comments about the action or configuration. |
