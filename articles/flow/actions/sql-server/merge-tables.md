# Merge tables

Merges data from a SQL Server source table or view into a target table.  
This action provides a lightweight wrapper for the [Merge](https://learn.microsoft.com/en-us/sql/t-sql/statements/merge-transact-sql) statement in SQL Server. If you need to perform a complex MERGE statement, use the [Execute command](execute-command.md) action and write a custom MERGE statement. 



![Merge Tables](https://profitbasedocs.blob.core.windows.net/flowimages/merge-tables.png)

## Properties

| Name         | Required | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title              | No | A descriptive title for the action.               |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Source   | Yes | Select or enter source table/view to merge from. |
| Target table | Yes |  Select or enter target table name. |
| Merge configuration | Yes | Select or edit merge configuration.  |
| Result variable name | No | Name of the variable returning number of rows affected. |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

[!INCLUDE [](__videos.md)]
