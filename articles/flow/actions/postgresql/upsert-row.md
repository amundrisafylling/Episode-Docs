# Insert or update row

Performs an insert or update (upsert) operation on a table row using defined column-value mappings.

![img](../../../../images/flow/postgresql-upsert.png)

**Example** ![img](../../../../images/strz.jpg)

The Flow above illustrates how to use the `Insert or Update row` action to save customer information to a PostgreSQL database fetched from a web API. Actions used in this Flow are: [HTTP Request](../http/http-request.md), `Insert or update row`, and [Send email](../microsoft-365-outlook/send-email.md).

<br/>

## Properties

| Name                  | Required | Description                                                                       |
| --------------------- | -------- | --------------------------------------------------------------------------------- |
| Title                 | No | A descriptive title for the action.                                               |
| Connection            | Yes | The PostgreSQL database [connection](postgresql-connection.md).                   |
| Table name            | Yes | The name of the table to insert or update a row.                                  |
| Column value mapping  | Yes | Defines the row to update by specifying the columns and corresponding values.     |
| Result variable name  | No | Name of the variable containing the action performed.                             |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds. |
| Description           | No | Additional notes or comments about the action.                                    |

<br/>

## Returns (optional)

Returns a string with either `INSERT` or `UPDATE`.
