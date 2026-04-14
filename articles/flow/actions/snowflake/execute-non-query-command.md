# Execute Command

Executes a SQL command in a [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database, and returns the number of rows affected by the query.

![img](../../../../images/flow/snowflake-execute-command.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow retrieves a list of active clients, updates their status to Premium in a Snowflake database, and then returns the number of users that were successfully upgraded.

> [!NOTE]
> This action does not return the result of the executed query. It simply returns the number of rows affected by the query.

<br/>

## Properties

| Name                      | Required | Description                                                                       |
| ------------------------- | --------- | --------------------------------------------------------------------------------- |
| Title                     | Optional  | The title or name of the command.                                                 |
| Connection                | Required  | [The Snowflake connection](./connecting-to-snowflake.md).                         |
| Expression and parameters | Required  | The command to execute along with any parameters.                                 |
| Result variable name      | Optional  | The name of the variable that will contain the number of rows affected.                  |
| Command timeout (sec)     | Optional  | The time limit for command execution before it times out. Default is 120 seconds. |
| Description               | Optional  | Additional notes or comments about the action or configuration.                   |

<br/>

## Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32) The number of rows affected.

<br/>

## Example: How to use parameters

To use parameters in the query, declare and assign variables in the `Parameters` property.  
Then use the parameters in the query.

```sql

SELECT Display_Name FROM Snowflake.Account_Usage.Users WHERE USER_ID = :UserId

```

<br/>

## Example: How to use Flow variables in the command expression

To use Flow variables in a query as part of the expression, you need to first [declare a variable](../built-in/declare-variable.md) as `Global` and [assign a value to the variable](../built-in/set-variable.md).  
Then, enclose the variable in curly brackets like with the `TableName` variable shown in the example below.

```sql
-- We have declared a Flow variable named TableName and assigned a value to it in a previous action.
SELECT Display_Name FROM {TableName} WHERE USER_ID = :UserId
```
