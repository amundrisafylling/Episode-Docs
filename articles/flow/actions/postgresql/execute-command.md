# Execute command

Executes a command in a PostgreSQL database. This action is useful when you want to perform database operations such as updating, deleting, or inserting records. The command will execute the provided SQL statement and return the number of rows affected by the operation.

<br/>

![img](https://profitbasedocs.blob.core.windows.net/flowimages/postgre-execute-command.png)

<br/>

## Properties

| Name                        | Required | Description                                                                                      |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| Title                       | No | The title or name of the command.                                                                |
| Connection                  | Yes | The PostgreSQL database [connection](postgresql-connection.md).                                                                    |
| SQL expression and parameters | Yes | The command to execute along with any parameters.                             |
| Result variable name        | No | The name of the variable that will store the number of rows affected by the query.                   |
| Command timeout (seconds)   | No | The time limit for command execution before it times out. Default is 120 seconds.                |
| Description                 | No | Any additional notes or information relevant to the execution command or the SQL operation.       |

<br/>

