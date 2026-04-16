# Get single value

Executes a query command in a PostgreSQL database which returns a single value.

<br/>

![Get Single Value Postgre S](../../../../images/flow/getSingleValuePostgreS.png)

<br/>

## Properties  

| Name | Required       | Description    |
|-----------------------------|-----------------|----|
| Title       | No | The title or name of the command.        |
| Connection              | Yes | The PostgreSQL database [connection](postgresql-connection.md).      |
| SQL expression and parameters | Yes | The SQL command to execute along with any parameters.    |
| Result variable name    | No | The name of the variable that stores the result of the SQL query.    |
| Result variable type    | No | Specifies the data type of the result variable (e.g., String, Number).          |
| Command timeout (seconds) | No | The time limit for command execution before it times out. Default is 120 seconds.  |
| Description | No | Additional notes or comments about the action or configuration.      |

<br/>

## Returns

Returns a .NET value of the type specified by `Result variable type`.
