# Execute SQL Script returning a single value.

Executes an [SQL Script](../../../../invision/docs/sqlscripts.md) defined in an InVision Solution that returns a single value.

![img](../../../../../images/flow/execute-sql-script-returning-single-value.png) 

**Example** ![img](../../../../../images/strz.jpg)  
This flow executes a SQL query defined in an InVision Solution to retrieve a single value (productId), logs that value for debugging or auditing purposes, and then returns it as the output of the flow.


>[!NOTE]
> The SQL Script must take less than 5 minutes to complete.

## Properties

| Name                 | Required | Description                                                                                     |
|----------------------|------------|-------------------------------------------------------------------------------------------------|
| Title                | Optional   | A custom title for the action. If not specified, the default action name is used.              |
| Connection           | Required   | A valid [InVision Connection](../invision-connection.md) used to execute the SQL script.                                     |
| SQL Script           | Required   | The InVision SQL script to execute. Returns a single scalar value. This script is created and stored in InVision.  |
| Language             | Optional   | The language or dialect of the SQL script, when applicable.                                     |
| Parameters           | Optional   | Defines input parameters for the SQL script.                                                    |
| Result variable name | Required   | The name of the variable where the scalar result will be stored.                                |
| Result variable type | Required   | The data type of the return value (e.g., String, Number, Boolean).                             |
| Disabled             | Optional   | When enabled, the action is skipped during runtime.                                             |
| Description          | Optional   | Additional notes describing the purpose or usage of the action.                                |

## Returns

Returns the result of the SQL script execution, which may include returned data (such as rows), output parameters, or execution status depending on how the SQL script is defined.