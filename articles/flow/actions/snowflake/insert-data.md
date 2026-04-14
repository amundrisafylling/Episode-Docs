# Insert rows

Inserts rows into a [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database table from a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader) or [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable).

Use this action when you have data already loaded into memory or streaming from another source and need to bulk-insert it into Snowflake. For loading data from a staged file instead, use [Copy into](copy-into.md).

![The Insert rows action configured in the flow editor](../../../../images/flow/snowflake-insert-data.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow retrieves customer data from SQL Server, applies a transformation step, and then inserts the transformed data into a Snowflake table. It returns the number of rows successfully inserted.

## Properties

| Name                 | Required | Description                                                                                       |
|----------------------|----------|---------------------------------------------------------------------------------------------------|
| Title                | Optional | A display label for this action in the flow editor.                                               |
| Connection           | Required | The Snowflake [connection](./connecting-to-snowflake.md) to use.                                  |
| Source               | Required | The data source to insert from — either a DataReader or a DataTable.                              |
| Destination table    | Required | The Snowflake table to insert rows into. You can select an existing table or enter a name.        |
| Result variable name | Optional | Stores the number of inserted rows for use later in the flow.                                     |
| Description          | Optional | Notes about this action's configuration.                                                          |

<br/>

## Returns

**Integer** [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32) — the number of rows successfully inserted into the destination table.