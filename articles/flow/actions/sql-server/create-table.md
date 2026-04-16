# Create table

Creates a table in a SQL Server database.  

If the table already exists, this action does nothing (no error is raised). 


![Create Table2](https://profitbasedocs.blob.core.windows.net/flowimages/create-table2.png)

## Properties

| Name            | Type            | Description                                       |
|-----------------|-----------------|---------------------------------------------------|
| Title              | No | A descriptive title for the action.               |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Table name   | Yes |  Name of the table to be created.  |
| Column definition | Yes | A list of columns with data types. |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No | Additional notes or comments about the action or configuration. |



![Create Table](https://profitbasedocs.blob.core.windows.net/flowimages/create-table.png)


### Column definition

![Col Def](https://profitbasedocs.blob.core.windows.net/flowimages/col-def.png)


<br/>

[!INCLUDE [](__videos.md)]