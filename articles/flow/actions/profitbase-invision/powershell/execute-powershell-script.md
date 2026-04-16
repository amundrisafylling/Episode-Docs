# Execute PowerShell script

Executes a [PowerShell](../../../../invision/docs/powershell.md) script defined in an InVision Solution.


![Execute Powershell Script](../../../../../images/flow/execute-powershell-script.png) 

**Example** ![Example](../../../../../images/strz.jpg)  
This flow inserts data into a database via a parameterized PowerShell script and then deploys a view to reflect the updated data.


>[!NOTE]
> Maximum execution time of the script is 5 minutes. If the script is expected to take longer, use the [Execute long-running PowerShell script](execute-long-running-powershell-script.md) action.

## Properties

| Name                  | Required | Description                                                                 |
|-----------------------|----------|-----------------------------------------------------------------------------|
| Title                 | No | A descriptive label for the action displayed in the Flow editor.           |
| Connection            | Yes | Defines the [InVision connection](../invision-connection.md) used to execute the PowerShell script.     |
| PowerShell Script     | Yes | Selects the InVision PowerShell script to execute.                          |
| Parameters            | No | Defines input parameters passed to the PowerShell script at runtime.        |
| Result variable name  | No | The name of the variable that stores the execution result or status.        |
| Disabled              | No | If enabled, the action will be skipped during execution.                    |
| Description           | No | Additional notes or comments about the action or configuration.             |


## Returns 

Variable - Contains the execution result of the PowerShell script, indicating success or failure. 