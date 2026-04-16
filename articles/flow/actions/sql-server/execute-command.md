# Execute command

Executes a SQL command in a SQL Server database, and returns the number of rows affected by the query.

> [!NOTE]
> This action does not return the result of the executed query. It simply returns the number of rows affected by the query.


![img](https://profitbasedocs.blob.core.windows.net/flowimages/execute-command.png)

<br/>

## Properties

| Name         | Required            | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title           | No | The title or name of the command.        |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| SQL expression and parameters   | Yes | The command to execute along with any parameters. |
| Result variable name | No | The name of the variable that will contain the number of rows affected.  |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.  |
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32) The number of rows affected.

<br/>

## Example: How to use parameters

To use parameters in the query, declare and assign variables in the `SQL parameters` property.  
Then use the parameters in the query.

```sql

UPDATE Users SET [Name] = @Name WHERE UserId = @UserId

```
<br/>

## Example: How to use Flow variables in the command expression

To use Flow variables in a SQL query as part of the expression, you need to first [declare a variable](../built-in/declare-variable.md) as `Global` and [assign a value to the variable](../built-in/set-variable.md).  
Then, enclose the variable in curly brackets like with the `TableName` variable shown in the example below.

```sql
-- We have declared a Flow variable named TableName and assigned a value to it in a previous action.
UPDATE {TableName} SET [Name] = @Name WHERE UserId = @UserId
```

<br/>

[!INCLUDE [](__videos.md)]
