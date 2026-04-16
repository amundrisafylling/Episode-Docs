# Refresh semantic model

Refreshes a [Semantic Model](https://learn.microsoft.com/en-us/power-bi/connect-data/service-datasets-understand) in a Microsoft Fabric Workspace.

This action calls the PowerBI [Refresh](https://learn.microsoft.com/en-us/power-bi/connect-data/asynchronous-refresh) API to refresh a semantic model. The action can be "fire-and-forget", or it can wait for the refresh to complete (see properties below). Note that a refresh may take a long time to complete, depending on the size of the model, resource constraints and current load on the Power BI service. Power BI may also decide to drop the refresh request if there has been too many refresh requests in a short period of time. 

> [!NOTE]
> You can only refresh semantic models using the `Import` storage mode. Read more about [data refresh in Power BI here](https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-data).

![img](/images/flow/microsoft-fabric-refresh-semantic-model.png)

<br/>

## Properties

| Name                  | Type              | Description                                        |
|-----------------------|-------------------|----------------------------------------------------|
| Connection            | Yes | The [Microsoft Fabric Connection](./microsoft-fabric-connection.md) used to make an authenticated request to the Microsoft Fabric REST API. To create a Connection, [please follow these steps](./microsoft-fabric-connection.md). |
| Workspace             | Yes | The Id of the Workspace that contains the semantic model you want to refresh. You can select a specific workspace, or get the Workspace Id from a variable. |
| Semantic model        | Yes | The Id of the semantic model to refresh. You can select a specific model, or get the semantic model Id from a variable. |
| Refresh type          | No | The type of processing to perform. Options are `Full`, `DataOnly`, and `Automatic`. The default is `Automatic`. Read more about refresh types [here](https://learn.microsoft.com/en-us/rest/api/power-bi/datasets/refresh-dataset?utm_source=chatgpt.com#datasetrefreshtype). |
| Retry count           | No | The number of times the operation retries before failing. The default value is 0. |
| Wait for completion   |                   | Enable this option if you want the action to wait for the refresh to complete before continuing execution of the Flow. Note that this may take a long time, depending on the size of the model and other factors as described under [Considerations and limitations](#considerations-and-limitations) below. |
| Raise exception on failure |              | Enable this option if you want the action to raise an error if Power BI reports back that the refresh has failed for any reason. If you disable this option, the Flow will not automatically alert you if the refresh fails. Instead, you can examine the `Status` property of the response object returned from the action.   |

<br/>

## Returns
This action returns a response object with the following properties.

| Name          | Required | Description                   |
|---------------|------------------|-------------------------------|
| OperationId   | String           | The id of the refresh request returned from the Power BI API. |
| Status        | String           | `Completed`, `Failed`, `Unknown`, `Disabled`, or `Cancelled`.  |

<br/>

**Example**
```json
{
    "operationId": "474fc5a0-3d69-4c5d-adb4-8a846fa5580b",
    "status": "Unknown"
}
```
<br/>

## Default parameters
The Power BI Refresh API is called with the `Retry count` and `Refresh type` properties as specified in the properties list above.  
The remaining parameters use default values as specified [here](https://learn.microsoft.com/en-us/power-bi/connect-data/asynchronous-refresh#parameters).




<br/>

## Considerations and limitations

Please refer to the Power BI API documentation [here](https://learn.microsoft.com/en-us/power-bi/connect-data/asynchronous-refresh#considerations-and-limitations) to learn about limitations and considerations when refreshing semantic models.  

> [!NOTE]
> PowerBI accepts only one refresh operation at a time for a model. If there's a current running refresh and another request is submitted, Power BI raises an error and returns a `400 Bad Request` HTTP status code.

**Semantic model eviction**  
If the Power BI API returns an error describing that the semantic model has been evicted during the refresh operation, Flow automatically retries the refresh one time. Read more about [model eviction here](https://learn.microsoft.com/en-us/power-bi/enterprise/service-premium-large-models#semantic-model-eviction). 

**Large semantic models**  
[Considerations and limitations for large semantic models](https://learn.microsoft.com/en-us/power-bi/enterprise/service-premium-large-models#considerations-and-limitations)

<br/>

## Error handling

**Automatic retry for model eviction**  
If the Power BI API returns an error describing that the semantic model has been evicted during the refresh operation, Flow automatically retries the refresh one time. Read more about [model eviction here](https://learn.microsoft.com/en-us/power-bi/enterprise/service-premium-large-models#semantic-model-eviction).

**Manual error handling and retries**  
You can implement a custom retry logic by wrapping the action in a [Try-Catch](../built-in/try-catch.md) action inside a [While](../built-in/while.md)-loop using a counter to break out of the loop after a certain number of retries.  
If you have enabled the `Raise exception on failure` property, you can handle all errors in the Catch-route and break the loop if you don't want to retry the refresh. (Remeber to also exit the loop when the refresh completes without failure.)


<br/>

[!INCLUDE [](./__videos.md)]