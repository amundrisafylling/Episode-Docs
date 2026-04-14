# Create Data Pipeline

Creates a Data Pipeline in a Microsoft Fabric Workspace.  

Use this action to automate deployments of Data Pipelines to Fabric Workspaces, for example, if you want to deploy pre-configured Data Pipelines as part of data platform workloads to customers, projects or departments in the organization.

![img](/images/flow/microsoft-fabric-create-data-pipeline.png)  

<br/>

## Properties
| Name          | Required | Description                             |
|---------------|----------|-----------------------------------------|
| Connection    | Required | The [Microsoft Fabric Connection](./microsoft-fabric-connection.md) used to make an authenticated request to the Microsoft Fabric REST API. To create a Connection, [please follow these steps](./microsoft-fabric-connection.md). Note! Make sure to choose an authentication method and user with the required priviliges. Please refer to the [Microsoft Fabric API - Create Data Pipeline documentation](https://learn.microsoft.com/en-us/rest/api/fabric/datapipeline/items/create-data-pipeline) for details. |
| Workspace Id  | Required | The Workspace that you want to create the Data Pipeline in. |
| Pipeline name | Required | The name of the Data Pipeline.           |
| Definition    | Optional | If you want to create a non-empty Data Pipeline that contains actions, properties, parameters, etc, use the Definition property to specify the configuration of the pipeline as a JSON document. You can also provide the configuration as a Base64 encoded JSON string. <br/><br/>  You can get the JSON definitions via the **View --> View JSON code** tab in the Fabric user interface. [Example 1 below](#example-1---definition) shows a sample configuration of a Data Pipeline definition. <br/> <br/> The Base64 option is supported in case you get the definition as a Base64 encoded string from an API, allowing you to simply pass the value along without making any modifications.  |

<br/>

## Returns
This action returns a **DataPipeline** response with the following properties:

| Name          | Required | Description                           |
|---------------|-----------|---------------------------------------|
| Description   | string    | The item description.                 |
| DisplayName   | string    | The name of the Data Pipeline (as defined by the Pipeline name property above). |
| Id            | string    | The id of the Data Pipeline.           |
| WorkspaceId   | string    | The id of the Workspace that the pipeline was deployed to. |

<br/>

## Example 1 - Definition

This example shows a pipeline definition having a single `Wait` activity, a parameter named `myParameter` and a variable named `myVariable`.

You can get the pipeline definitions via the **View --> View JSON code** tab in the Fabric user interface.

```json
{    
    "properties": {
        "activities": [
            {
                "name": "Wait1",
                "type": "Wait",
                "dependsOn": [],
                "typeProperties": {
                    "waitTimeInSeconds": 1
                }
            }
        ],
        "parameters": {
            "myParameter": {
                "type": "string"
            }
        },
        "variables": {
            "myVariable": {
                "type": "String"
            }
        }        
    }
}
```

<br/>

<br/>

[!INCLUDE [](./__videos.md)]
