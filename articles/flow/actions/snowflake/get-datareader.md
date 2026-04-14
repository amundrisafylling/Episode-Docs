# Get DataReader

Provides a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqldatareader) for reading a forward-only stream of rows from a [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database.

![img](../../../../images/flow/snowflake-get-datareader.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow reads a large dataset (20,000 orders) from Snowflake using a DataReader, converts the stream into a Parquet file, and uploads it to blob storage.
<br/>

## Properties

| Name         | Required       | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title           | Optional | The title or name of the command.     |
| Connection         | Required   | The Snowflake [connection](./connecting-to-snowflake.md). |
| Expression and parameters   | Required      | The query expression to execute along with any optional parameters.   |
| Reader variable name | Optional  | Name of the variable.  |
| Command timeout (sec) | Optional | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | Optional | Additional notes or comments about the action or configuration. |

<br/>

## Returns

[IDataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader)
