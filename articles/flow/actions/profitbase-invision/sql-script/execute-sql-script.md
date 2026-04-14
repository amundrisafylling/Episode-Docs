# Execute SQL Script

Executes an [SQL Script](../../../../invision/docs/sqlscripts.md) defined in an InVision Solution.


![img](../../../../../images/flow/executeSQLscript.png) 

**Example** ![img](../../../../../images/strz.jpg)  
This flow [prepares](../../built-in/function.md) a language setting and a parameters object, then executes a SQL script that inserts data into a database using those inputs.

>[!NOTE]
> If your SQL Script may take longer than 5 minutes to execute, use the [Long Running SQL Script](execute-long-running-sql-script.md) action instead of the regular SQL Script action.

## Properties

| Name                 | Required | Description |
|----------------------|----------|-------------|
| Title                | Optional | A descriptive label for the action displayed in the Flow editor. |
| Connection           | Required | Defines the [InVision connection](../invision-connection.md) used to execute the SQL script. |
| SQL Script           | Required | The InVision SQL Script to execute. This script is created and stored in InVision. |
| Language             | Optional | Specifies the language context used during execution, typically for localization or translations. |
| Parameters           | Optional | Defines input parameters passed to the SQL script. Supports static or dynamic parameter mapping. |
| Result variable name | Optional | The name of the variable that will store the result returned by the SQL execution. |
| Disabled             | Optional | When enabled, the action will be skipped during flow execution. |
| Description          | Optional | Additional notes or comments about the action configuration. |

## Returns

Returns an `integer` indicating the result of the SQL script execution.