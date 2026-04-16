# Execute Dataflow

Executes a Dataflow in an InVision Solution.

> [!IMPORTANT]
> InVision Dataflows will be deprecated in a future version of InVision. Use this action to gradually migrate business logic from InVision Dataflows to Flow. Avoid creating new Dataflows in InVision, and prefer using Flow instead.

![img](/images/flow/profitbase-invision-execute-dataflow.png)

<br/>

## Properties
| Name                 | Required | Description                                       |
|----------------------|----------|---------------------------------------------------|
| Title                | No | A descriptive title for the action.               |
| Connection           | Yes | [InVision Connection](invision-connection.md).                              |
| Dataflow             | Yes | The ID of the Dataflow to run.                    |
| Execution arguments  | No | Specifies the arguments passed to the Dataflow. The arguments must be specified as a JSON string as shown in the [example below](#execution-arguments).  |
| Description          | No | Additional notes or comments that describe the action. |

## Execution arguments

Specifies the format of the JSON string that can be used to specify arguments to a Dataflow. 

```json
{
   "globalArguments": {
       "arg1Name": "argValue",
       "arg2Name": "argValue"
    },
    "activitiesExecutionData": [{
        "activityName": "activity name",
	    "arguments": [{
              "name": "arg name",
              "value": "arg value"
	        }
	    ]
	}],
    "dataContext": ""
}
```

To create the JSON string, use the [Function](../built-in/function.md) action like shown below. It creates a JSON string providing arguments for the global variables `department` and `refreshTables`, and specifies the companyId required by the Dataflow activity named `Run Update Script`.

### Example
![img](/images/flow/profitbase-invision-execute-dataflow-exec-args-example.png)

<br/>

```csharp
private string CreateArgs(string companyId, string departmentId)
{
    return $$"""
    {
    "globalArguments": {
        "department": "{{departmentId}}",
        "refreshAllTables": true
        },
        "activitiesExecutionData": [{
            "activityName": "Run Update Script",
            "arguments": [{
                "name": "CompanyId",
                "value": "{{companyId}}"
                }
            ]
        }],
        "dataContext": ""
    }
    """;
}
```