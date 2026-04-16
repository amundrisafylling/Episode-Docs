# Delete table

Deletes a table from a SQL Server database.  

If the table does not exist, this action does nothing (no error is raised).


![img](https://profitbasedocs.blob.core.windows.net/flowimages/delete-table.png)


## Properties

| Name            | Required | Description                                       |
|-----------------|--------------|---------------------------------------------------|
| Title              | No | A descriptive title for the action.               |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Table name   | Yes | Name of the table to be deleted.  |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds. |
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

[!INCLUDE [](__videos.md)]