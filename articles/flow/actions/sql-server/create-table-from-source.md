# Create table from source

Creates a table from an existing table or view in a SQL Server database.

This action creates a copy of another table in a SQL Server database by coping its schema. Note that data is _not_ copied.

![Create Table From Source](https://profitbasedocs.blob.core.windows.net/flowimages/create-table-from-source.png)


## Properties

| Name         | Type            | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title              | No | A descriptive title for the action.               |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Source Table | Yes | Select or enter source table name. |
| Target table | Yes | Select or enter target table name.  |
| Replace existing table | No |  Check if You want to replace the table or an error will be thrown if it already exists. |
| Copy Primary Key   | No | This will copy the primary key from Source to Target. |
| Copy Foreign Key(s) | No | This will copy any foreign keys from Source to Target. |
| Copy Index(es) | No | This will copy the any index from Source to Target. |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

[!INCLUDE [](__videos.md)]