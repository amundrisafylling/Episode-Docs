# Insert rows

Inserts rows into a PostgreSQL database from a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader) or a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable) using bulk insert.

![Postgresql Insert Data](../../../../images/flow/postgresql-insert-data.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow loads customer data and then inserts it into a PostgreSQL table.

## Properties

| Name         | Required       | Description                                       |
|--------------|-----------------|---------------------------------------------------|
|  Title | No | The name of the action. |
| Connection | Yes | The PostgreSQL database [connection](postgresql-connection.md). |
| Source  | Yes |Select the source for data. |
| Destination table   | Yes | Select or enter the name of the table to insert info. |
| Command timeout (seconds) | No | The time limit for command execution before it times out. Default is 120 seconds.  |
| Description | No | Additional notes or comments about the action or configuration.      |
