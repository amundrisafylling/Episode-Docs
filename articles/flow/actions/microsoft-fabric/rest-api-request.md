# Microsoft Fabric REST API Request

The REST API Request action enables you to call [Microsoft Fabric REST APIs](https://learn.microsoft.com/en-us/rest/api/fabric/articles/using-fabric-apis) to automate Fabric processes, such as deploying, updating, deleting objects, or running dataflows and pipelines.

![img](/images/flow/microsoft-fabric-rest-api-request-action.png)  
<br/>

## Properties

| Name          | Required | Description                                                                                                                                                                                                           |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | Yes | The [Microsoft Fabric Connection](./microsoft-fabric-connection.md) used to make an authenticated request to the Microsoft Fabric REST API. To create a Connection, [please follow these steps](./microsoft-fabric-connection.md). |
| Configuration | Yes | Specifies the HTTP request to the Fabric API, including the HTTP method, URL, parameters and return type.                                                                                                             |

<br/>

## Action configuration

To call the Microsoft Fabric REST API, you need to configure the Connection and the Request, as described below.

### Configure the Connection

The first thing you need to do is create a [Microsoft Fabric Connection](./microsoft-fabric-connection.md). Microsoft Fabric only allows authenticated requests, so you cannot make any calls to the API until this step is done.  
Depending on which Fabric service you want to use, you may also need to explicitly grant permissions to resources within the service itself. For example, if you want to access a Power BI resource, you need to go to the Power BI admin portal and grant the Service Principal (Entra ID App created when setting up the Microsoft Fabric Connection) access to the resource you want to access.

### Configure the request

After you have configured the connection, you need to configure the request itself.  
The [Microsoft Fabric REST API documentation](https://learn.microsoft.com/en-us/rest/api/fabric/articles/using-fabric-apis) describes all requests you can make, including parameters, request payloads and response objects. Read the documentation to understand how to form a request, including which HTTP method (GET, POST, PUT, etc) and URL to use.

The image below shows how to [get a list of all available items in a Workspace](https://learn.microsoft.com/en-us/rest/api/fabric/core/items/list-items?tabs=HTTP). You can see that the Workspace Id in the URL gets its value from a variable.

![img](/images/flow/microsoft-fabric-rest-api-request-example1.png)

<br/>

#### Use a request template (Optional)

The `REST API Request action` in Flow include templates for commonly used APIs. To use a template, click the `New Request` button in the configuration editor and choose a template for the request you want to make. It will automatically fill in the HTTP Method, URL and return type (Response). If the API requires a body, a template for the request body is also added. Note that it's just a template, so you need to provide the actual request body yourself by referring to the [Fabric API documentation.](https://learn.microsoft.com/en-us/rest/api/fabric/articles/using-fabric-apis)

![img](/images/flow/microsoft-fabric-rest-api-request-template.png)

<br/>

#### Defining the request Body

Usually, all APIs using the `POST` HTTP method requires a body payload. Please refer to the [Fabric API documentation](https://learn.microsoft.com/en-us/rest/api/fabric/articles/) for details about which APIs this applies to.  
The request body can be defined by either referencing a variable containing the entire body payload (for example an object returned from a [Function](../built-in/function.md)), or by defining the payload as a [JSON](https://en.wikipedia.org/wiki/JSON) object.

##### Defining the request body from a variable

To get the request body from a variable, it needs to somehow be created first. In most cases, you will simply use a [Function](../built-in/function.md) to create and return the object that you want to send via the HTTP request. Note that the object you create must match the format in terms of structure, property names and data types that the HTTP API expects.

To use a variable as the body payload, simply switch to the `Body` tab and select the object from the variable selector. This will serialize the object and send it to the API when the Flow runs.

![img](/images/flow/microsoft-fabric-rest-api-object-body.png)

##### Defining the request body by building a JSON object

You can manually construct the HTTP body by building a [JSON](https://en.wikipedia.org/wiki/JSON) object.

- A JSON object must begin with `{` and end with `}`.
- Property names must be quoted in double quotes.
- `String` and `date` values must be quoted in double quotes.
- Properties must be separated by commas.

When building the JSON object, you can combine hard-code values and variables as shown in the screenshot below.

> [!NOTE]
> You must remember to add quotes around `string` and `date` values, like shown with the `format` property below. Flow does not know which data type a property expects, so you will have to add quotes manually.

![img](/images/flow/microsoft-fabric-rest-api-json-body.png)

<br/>

#### Defining the Response

When a Fabric API returns a value, and you want to use the value later in the Flow, you need to specify the data type of the returned value in the Response tab. If you created the request from a template (described above), the response data type is set automatically for you. If you're making a custom request (not using a template, or modified a template request), you need to first [define a custom data type](../../flows/defining-custom-types.md), and then select the data type in the Response tab. When you define the data type, it is important that it matches the data structure as described by the Fabric API documentation for the request. To define a custom data type, please [read more here.](../../flows/defining-custom-types.md)

![img](/images/flow/microsoft-fabric-rest-api-request-response.png)

<br/>

### Pagination

Some Microsoft Fabric REST APIs break large datasets into smaller chunks when delivering data to clients. [You can read more about this feature here.](https://learn.microsoft.com/en-us/rest/api/fabric/articles/pagination)

The `REST API Request action` handles pagination automatically for you, so you don't have to make multiple calls in order to get all records if the Fabric API splits the dataset into multiple pages.  
Note that when you call an API that _may_ return a paginated response, you are required to define the return type as [List&lt;T&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1) or a type **derived** from [List&lt;T&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1).

### Long running operations

When a Fabric API performs an operation that takes some time to complete, it may return while the operation is still being processed. By default, Flow will automatically wait for long-running operations to complete, so you don't have to worry about handling this yourself.

##### Fire and Forget

If you want to initiate a long-running operation and don't wait for its completion before execution of the Flow continues, uncheck the `Wait for long running operation to complete` property.

![img](/images/flow/microsoft-fabric-rest-api-request-wait.png)

<br/>

##### Handle polling manually

If you don't want Flow to automatically wait for long running operations to complete, but want to handle this yourself, you need to manually poll for the result by making repeated requests using the operation id and location returned from the first response. For more details, [read about Long running operations here.](https://learn.microsoft.com/en-us/rest/api/fabric/articles/long-running-operation)

When you call a long running API and want to handle polling for completion manually, you must define the return type so that it contains the following properties:

```
location: string
retryAfter: int
operationId: string
```

For example, if you call the [Create Item API](https://learn.microsoft.com/en-us/rest/api/fabric/core/items/create-item?tabs=HTTP), your result data type definition should look like this:

```csharp
public class ItemCreatedResponse
{
    public string? OperationId {get; set;}
    public int? RetryAfter {get; set;}
    public string? Location {get; set;}

    public string? Id { get; set; }
    public string? DisplayName { get; set; }
    public string? Description { get; set; }
    public string? Type { get; set; }
    public string? WorkspaceId { get; set; }
}
```

If the item was created immediately, the `OperationId` and `Location` properties will be `null`, while the Id, DisplayName etc properties will have a value.  
If the item is being provisioned (meaning it is in the process of being created), you need to use the `OperationId` or `Location` to make repeated requests until the API responds with a null-value for the OperationId property.


<br/>

[!INCLUDE [](./__videos.md)]