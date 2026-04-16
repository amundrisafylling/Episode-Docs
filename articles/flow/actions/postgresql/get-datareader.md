# Get DataReader

Provides a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqldatareader) for reading a forward-only stream of rows from a PostgreSQL database.

![img](../../../../images/flow/postgresql-get-datareader.png)

<br/>

## Properties

| Name         | Required       | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title           | No | The title or name of the command.     |
| Connection         | Yes | The PostgreSQL database [connection](postgresql-connection.md). |
|SQL expression and parameters   | Yes | The command to execute along with any parameters.   |
| Reader variable name | No | Name of the variable.  |
|Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

[IDataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader)


