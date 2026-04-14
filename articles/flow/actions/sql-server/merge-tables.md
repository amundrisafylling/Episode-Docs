# Merge tables

Merges data from a SQL Server source table or view into a target table.  
This action provides a lightweight wrapper for the [Merge](https://learn.microsoft.com/en-us/sql/t-sql/statements/merge-transact-sql) statement in SQL Server. If you need to perform a complex MERGE statement, use the [Execute command](execute-command.md) action and write a custom MERGE statement. 



![img](https://profitbasedocs.blob.core.windows.net/flowimages/merge-tables.png)

## Properties

| Name         | Required | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title              | Optional        | A descriptive title for the action.               |
| Connection      | Required | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | Optional | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Source   | Required      | Select or enter source table/view to merge from. |
| Target table | Required  |  Select or enter target table name. |
| Merge configuration | Required  | Select or edit merge configuration.  |
| Result variable name | Optional  | Name of the variable returning number of rows affected. |
| Command timeout (sec) | Optional | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | Optional | Additional notes or comments about the action or configuration. |

<br/>

[!INCLUDE [](__videos.md)]
