# Execute SQL Script

Executes an [SQL Script](../../../../invision/docs/sqlscripts.md) defined in an InVision Solution.


![Execute Sqlscript](../../../../../images/flow/executeSQLscript.png) 

**Example** ![Example](../../../../../images/strz.jpg)  
This flow [prepares](../../built-in/function.md) a language setting and a parameters object, then executes a SQL script that inserts data into a database using those inputs.

>[!NOTE]
> If your SQL Script may take longer than 5 minutes to execute, use the [Long Running SQL Script](execute-long-running-sql-script.md) action instead of the regular SQL Script action.

## Properties

| Name                 | Required | Description |
|----------------------|----------|-------------|
| Title                | No | A descriptive label for the action displayed in the Flow editor. |
| Connection           | Yes | Defines the [InVision connection](../invision-connection.md) used to execute the SQL script. |
| SQL Script           | Yes | The InVision SQL Script to execute. This script is created and stored in InVision. |
| Language             | No | Specifies the language context used during execution, typically for localization or translations. |
| Parameters           | No | Defines input parameters passed to the SQL script. Supports static or dynamic parameter mapping. |
| Result variable name | No | The name of the variable that will store the result returned by the SQL execution. |
| Disabled             | No | When enabled, the action will be skipped during flow execution. |
| Description          | No | Additional notes or comments about the action configuration. |

## Returns

Returns an `integer` indicating the result of the SQL script execution.