# Append to S3 object

Appends a byte array or stream to an [Amazon S3 ](https://docs.aws.amazon.com/s3/?nc2=h_ql_doc_s3)object.

![Append Amazon](../../../../images/flow/appendAmazon.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow ensures that data is either appended to an existing file or a new object is uploaded. 

## Properties

| Name        | Required | Description                                                                                 |
| ----------- | -------- | ------------------------------------------------------------------------------------------- |
| Title       | No |  The title of the action.   |
| Connection  | Yes | Specify the [connection](connecting-to-amazon-s3.md) to the Amazon S3 bucket. |
| Object name | Yes | The name of the object to append to. If the object doesn't exist yet, it will be created.        |
| Object data        | Yes | The data to append. It must be a byte array or [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream) |
| Description | No | Additional notes or comments about the action or configuration.  |
