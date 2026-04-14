# Execute Command

Executes a SQL command in a [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database and returns the number of rows affected.

> [!NOTE]
> This action does not return query results — only the number of rows affected.

![The Execute command action configured in the flow editor](../../../../images/flow/snowflake-execute-command.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow retrieves a list of active clients, updates their status to Premium in a Snowflake database, and then returns the number of users that were successfully upgraded.

<br/>

## Properties

| Name                      | Required | Description                                                                              |
|---------------------------|----------|------------------------------------------------------------------------------------------|
| Title                     | Optional | A display label for this action in the flow editor.                                      |
| Connection                | Required | The Snowflake [connection](./connecting-to-snowflake.md) to use.                         |
| Expression and parameters | Required | The SQL command to execute, along with any parameters.                                   |
| Result variable name      | Optional | Stores the number of affected rows for use later in the flow.                            |
| Command timeout (sec)     | Optional | How long to wait before the command times out. Default is 120 seconds.                   |
| Description               | Optional | Notes about this action's configuration.                                                 |

<br/>

## Returns

**Integer** [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32) — the number of rows affected by the command.

<br/>

## Using parameters

Declare and assign variables in the **Parameters** property, then reference them in the query using a `:` prefix.

```sql
SELECT Display_Name FROM Snowflake.Account_Usage.Users WHERE USER_ID = :UserId
```

<br/>

## Using flow variables in the expression

Flow variables can be interpolated directly into the SQL expression. First [declare the variable](../built-in/declare-variable.md) as `Global` and [assign it a value](../built-in/set-variable.md) in a previous action, then reference it in the expression using curly brackets.

```sql
-- TableName is a Global flow variable declared and assigned in a previous action.
SELECT Display_Name FROM {TableName} WHERE USER_ID = :UserId
```

> [!NOTE]
> Flow variables and parameters can be combined in the same expression, as shown above.