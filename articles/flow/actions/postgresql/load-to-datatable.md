# Load to DataTable

Loads data from a PostgreSQL database into memory as a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable) object.

<br/>

![img](https://profitbasedocs.blob.core.windows.net/flowimages/postgre-load-dataTB.png)

<br/>


## Properties

| Name                        | Required | Description                                                                                      |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| Title                       | Optional | The title or name of the action.                                                                 |
| Connection                  | Required | The PostgreSQL database [connection](postgresql-connection.md).   |
| SQL expression and parameters | Required | The command to execute along with any parameters.                               |
| Table variable name         | Optional | Name of the DataTable variable that stores the result of the query.                              |
| Command timeout (seconds)   | Optional | The time limit for command execution before it times out. Default is 120 seconds.                |
| Description                 | Optional | Any additional notes or information relevant to the DataTable action.                            |
