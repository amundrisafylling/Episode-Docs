# Load to DataTable

Loads data from a [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database into memory as a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable).

Use this action when you need to work with a query result set as a whole — for example, to filter, sort, or pass the data to another action. For large result sets where loading all rows into memory at once would be inefficient, use [Get DataReader](./get-datareader.md) instead.

![The Load to DataTable action configured in the flow editor](../../../../images/flow/snowflake-load-datatable.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow loads sales data from Snowflake into memory as a DataTable, exports the top-selling products, and uploads the result to blob storage.

## Properties

| Name                      | Required | Description                                                                      |
|---------------------------|----------|----------------------------------------------------------------------------------|
| Title                     | Optional | A display label for this action in the flow editor.                              |
| Connection                | Required | The Snowflake [connection](./connecting-to-snowflake.md) to use.                 |
| Expression and parameters | Required | The query to execute, along with any optional parameters.                        |
| Table variable name       | Required | The variable that will hold the DataTable for use in subsequent actions.         |
| Command timeout (sec)     | Optional | How long to wait before the command times out. Default is 120 seconds.           |
| Description               | Optional | Notes about this action's configuration.                                         |

## Returns

**DataTable** — the full query result set loaded into memory as a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable).

## Using parameters

Declare and assign variables in the **Parameters** property, then reference them in the query using a `:` prefix.

```sql
SELECT * FROM Orders WHERE CUSTOMER_ID = :CustomerId
```

## Using flow variables in the expression

Flow variables can be interpolated directly into the query expression. First [declare the variable](../built-in/declare-variable.md) as `Global` and [assign it a value](../built-in/set-variable.md) in a previous action, then reference it using curly brackets.

```sql
-- TableName is a Global flow variable declared and assigned in a previous action.
SELECT * FROM {TableName} WHERE CUSTOMER_ID = :CustomerId
```

Flow variables and parameters can be combined in the same expression, as shown above.