# Check if table exists

Checks if a table exists in a SQL Server database.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/check-if-table-exist.png)

<br/>

## Properties

| Name            | Required | Description                                       |
|-----------------|----------|---------------------------------------------------|
| Title              | No | A descriptive title for the action.               |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Table name      | Yes | The name of a table to check for. |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description      | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean) True if the table exists, otherwise false.

<br/>

[!INCLUDE [](__videos.md)]
