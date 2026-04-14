# Get DataReader

Provides a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqldatareader) for reading a forward-only stream of rows from a [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database.

Use this action when working with large result sets where loading all rows into memory at once would be inefficient. The DataReader streams rows one at a time, making it well suited for pipelines that process or transform data on the way to another destination.

![The Get DataReader action configured in the flow editor](../../../../images/flow/snowflake-get-datareader.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow reads a large dataset (20,000 orders) from Snowflake using a DataReader, [converts the stream into a Parquet](../parquet/create-parquet-file-as-stream.md) file, and [uploads it to blob storage](../azure-blob-storage/upload-blob.md).

## Properties

| Name                      | Required | Description                                                                              |
|---------------------------|----------|------------------------------------------------------------------------------------------|
| Title                     | Optional | A display label for this action in the flow editor.                                      |
| Connection                | Required | The Snowflake [connection](./connecting-to-snowflake.md) to use.                         |
| Expression and parameters | Required | The query to execute, along with any optional parameters.                                |
| Reader variable name      | Optional | The variable that will hold the DataReader for use in subsequent actions.                |
| Command timeout (sec)     | Optional | How long to wait before the command times out. Default is 120 seconds.                   |
| Description               | Optional | Notes about this action's configuration.                                                 |

<br/>

## Returns

[**IDataReader**](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader) — a forward-only stream of rows from the query result. The reader must be consumed sequentially; it does not support random access or re-reading rows.

<br/>

## Using parameters

Declare and assign variables in the **Parameters** property, then reference them in the query using a `:` prefix.

```sql
SELECT * FROM Orders WHERE CUSTOMER_ID = :CustomerId
```

<br/>

## Using flow variables in the expression

Flow variables can be interpolated directly into the query expression. First [declare the variable](../built-in/declare-variable.md) as `Global` and [assign it a value](../built-in/set-variable.md) in a previous action, then reference it using curly brackets.

```sql
-- TableName is a Global flow variable declared and assigned in a previous action.
SELECT * FROM {TableName} WHERE CUSTOMER_ID = :CustomerId
```

