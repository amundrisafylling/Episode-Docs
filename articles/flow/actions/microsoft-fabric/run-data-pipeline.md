# Run Data Pipeline

Runs a Data Pipeline in a Microsoft Fabric Workspace.  

This action will run a Data Pipeline and wait for it to complete before executing the rest of the Flow. The Fabric REST API does not currently support returning output from a Data Pipeline directly back to the caller, but you can instead use the information in the [DataPipelineRunCompleted](#returns) object to look up any output through additional actions. 

![img](/images/flow/microsoft-fabric-run-data-pipeline.png)

> [!NOTE]
> Profitbase Flow runs the Data Pipeline using the [Run On Demand Item Job](https://learn.microsoft.com/en-us/rest/api/fabric/core/job-scheduler/run-on-demand-item-job) Fabric REST API. Make sure to use a Connection with sufficient permissions. The API currently requires `User delegated` permissions to run. Service Principal is NOT supported.

<br/>

## Properties
| Name          | Required | Description                             |
|---------------|----------|-----------------------------------------|
| Connection    | Required | The [Microsoft Fabric Connection](./microsoft-fabric-connection.md) used to make an authenticated request to the Microsoft Fabric REST API. To create a Connection, [please follow these steps](./microsoft-fabric-connection.md). Note! Make sure to choose an authentication method and user with the required priviliges. Please refer to the [Microsoft Fabric API - Run On Demand Item Job documentation](https://learn.microsoft.com/en-us/rest/api/fabric/core/job-scheduler/run-on-demand-item-job) for details. |
| Workspace     | Required | The Workspace that contains the Data Pipeline to run. You can specify the `id` of the Workspace by typing it into the editor, selecting a (string) variable, or selecting it from the list of Workspace displayed in the popup. |
| Pipeline      | Required | The Data Pipeline to run. You can specify the `id` of the Data Pipeline by typing it into the editor, selecting a (string) variable, or selecting it from the list of Data Pipelines displayed in the popup.  |
| Arguments    | Optional | Use this property to specify arguments if the Data Pipeline is parameterized. Make sure that the argument (value) you assign to each parameter has the expected data type. |
| Raise exception on failure | Optional | Specifies whether Flow should raise an exception if the Data Pipeline completes with status `Failed`. When an exception is raised, the Flow terminates with an error immediately. If this property is set to false, you will have to examine the `Status` property of the result (see below) yourself and determine what to do. |

<br/>

## Returns
This action returns a **DataPipelineRunCompleted** response with the following properties:

| Name          | Type           | Description                           |
|---------------|----------------|---------------------------------------|
| Id            | string         | The execution id (job id).             |
| ItemId        | string         | The id of the Data Pipeline.           |
| Status        | string         | The job status. Possible values are `Cancelled`, `Completed`, `Failed`, `Deduped`.  |
| StartTimeUtc  | [DateTimeOffset](https://learn.microsoft.com/en-us/dotnet/api/system.datetimeoffset) | Job start time in UTC. |
| EndTimeUtc    | [DateTimeOffset](https://learn.microsoft.com/en-us/dotnet/api/system.datetimeoffset) | Job end time in UTC.   |

<br/>

[!INCLUDE [](./__videos.md)]