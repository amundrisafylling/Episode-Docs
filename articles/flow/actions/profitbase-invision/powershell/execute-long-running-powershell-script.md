# Execute long-running PowerShell script

Executes a long-running [PowerShell](../../../../invision/docs/powershell.md) script defined in an InVision Solution.


![img](../../../../../images/flow/execute-powershell-script.png) 

**Example** ![img](../../../../../images/strz.jpg)  
This flow inserts data into a database via a parameterized PowerShell script and then deploys a view to reflect the updated data.



>[!NOTE]
> If your Script takes less than 5 minutes to execute, use the [Execute PowerShell Script](execute-powershell-script.md) action instead of the long-running PowerShell Script action.


## Properties

| Name                  | Required | Description                                                                 |
|-----------------------|----------|-----------------------------------------------------------------------------|
| Title                 | Optional | A descriptive label for the action displayed in the Flow editor.           |
| Connection            | Required | Defines the [InVision connection](../invision-connection.md) used to execute the PowerShell script.     |
| PowerShell Script     | Required | Selects the InVision PowerShell script to execute.                          |
| Parameters            | Optional | Defines input parameters passed to the PowerShell script at runtime.        |
| Result variable name  | Optional | The name of the variable that stores the execution result or status.        |
| Disabled              | Optional | If enabled, the action will be skipped during execution.                    |
| Description           | Optional | Additional notes or comments about the action or configuration.             |

## Returns 

Variable - Contains the execution result of the PowerShell script, indicating success or failure.  