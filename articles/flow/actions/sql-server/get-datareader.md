# Get DataReader

Provides a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqldatareader) for reading a forward-only stream of rows from a SQL Server database.

![Get Datareader SQL](https://profitbasedocs.blob.core.windows.net/flowimages/get-datareader-sql.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow example shows a process that reads data from a database, splits records into multiple chunks, converts each chunk into CSV format, and appends it to a blob storage.  
Actions used in the flow are: SQL Server [Get DataReader](), [DataReader chunker](../built-in/datareader-chunker.md), [Create CSV file as byte array](../csv/create-csv-file-as-byte-array.md) and [Append to Blob](../azure-blob-storage/append-to-blob.md). 

<br/>

## Properties

| Name         | Type            | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title           | No | The title or name of the command.     |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| SQL expression and parameters   | Yes | The command to execute along with any parameters.   |
| Reader variable name | No | Name of the return variable.  |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

[IDataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader)

<br/>

[!INCLUDE [](__videos.md)]