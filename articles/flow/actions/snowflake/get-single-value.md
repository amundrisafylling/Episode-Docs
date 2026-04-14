# Get single value

Executes a query in a [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database and returns a single scalar value.

Use this action when your query is expected to return exactly one row and one column — for example, a count, a status flag, or a specific field value. If the query returns multiple rows, only the first value is used.

![The Get single value action configured in the flow editor](../../../../images/flow/snowflake-get-single-value.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow retrieves a single value (the current user's display name) from Snowflake and passes it to a function for logging.

## Properties

| Name                      | Required | Description                                                                                                      |
|---------------------------|----------|------------------------------------------------------------------------------------------------------------------|
| Title                     | Optional | A display label for this action in the flow editor.                                                              |
| Connection                | Required | The Snowflake [connection](./connecting-to-snowflake.md) to use.                                                 |
| Expression and parameters | Required | The query to execute, along with any optional parameters.                                                        |
| Result variable name      | Optional | The variable that will hold the returned value for use in subsequent actions.                                    |
| Result variable type      | Optional | The .NET type to cast the returned value to (e.g. `String`, `Int32`, `DateTime`). Defaults to `String` if unset. |
| Command timeout (sec)     | Optional | How long to wait before the command times out. Default is 120 seconds.                                           |
| Description               | Optional | Notes about this action's configuration.                                                                         |

## Returns

A single scalar value cast to the type specified by **Result variable type**.

## Using parameters

Declare and assign variables in the **Parameters** property, then reference them in the query using a `:` prefix.

```sql
SELECT Display_Name FROM Snowflake.Account_Usage.Users WHERE USER_ID = :UserId
```

## Using flow variables in the expression

Flow variables can be interpolated directly into the query expression. First [declare the variable](../built-in/declare-variable.md) as `Global` and [assign it a value](../built-in/set-variable.md) in a previous action, then reference it using curly brackets.

```sql
-- TableName is a Global flow variable declared and assigned in a previous action.
SELECT Display_Name FROM {TableName} WHERE USER_ID = :UserId
```

Flow variables and parameters can be combined in the same expression, as shown above.