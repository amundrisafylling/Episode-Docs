# REST API Request

Use [Visma.Net REST APIs](https://integration.visma.net/API-index/) to read/write data.  


The **REST API Request** action allows you to interact with [Visma.Net](https://developer.visma.com/api/visma-net) REST APIs to read or write data. You can retrieve information like customers, projects, or invoices, or update records in the Visma.Net system using HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, etc.).  


<br/>

![img](/images/flow/visma-net-rest-api-request.png)

<br/>

## Properties

| Name            | Type     | Description                                                     |
|----------------- | -------- | -------------------------------------------------------------- |
| Title           | No | The title or name of the request.                         |
| Connection      | Yes | The [Visma.Net Connection](./visma-net-connection.md) used to make an authenticated request to the Visma.Net REST API. |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Configuration   | Yes | Defines the HTTP request to Visma.Net, including the method, URL, parameters, and return type. |
| Company Id      | No | The Company Id to request data from. Default company can be set in the connection. |
| Description     | No | Additional notes or comments about the action or configuration. |

<br>

## Returns  

The return type is defined when configuring the action. It can be a custom data type set by the template, or the raw JSON response from the API.  

For templated requests returning a single item, the return type is an Entity. E.g. v1\Customer\12345 returns a CustomerDTO entity.
For APIs returning collections, the default return value is [HttpResponse&lt;T&gt;](../../../api-reference/built-in-types/http-response.md). This contains the result as a JSON string and the status and any errors of the request.


We recommend storing the raw response in a data store and using data transformation tools to convert it into a usable format. If the API returns a relatively small dataset (10,000–200,000 records), consider using the [Get JSON DataReader](../../json/get-json-datareader.md) to flatten the JSON into a tabular format. This allows you to process the data as rows and columns, such as by inserting it directly into a SQL Server table.

<br/>

## Configuration  

To define a request to the Visma.Net REST API, you can start from a template, or define it manually.
If you press the `New Request` button in the Configuration dialog, you can choose from a set of predefined request templates.  

### Steps for Manual Configuration:  
1. **Method**: Specify the HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc.). Use `GET` for retrieving data.  
2. **URI**: Define the endpoint URL (e.g., `v1/project` or `v2/generalLedgerBalance`). Pass required parameters (e.g., IDs) as query parameters or in the request body.  
3. **Headers and Authorization**:  
   - Authentication is automatically set up from the connection settings.
   - Ensure proper encoding of any additional headers.  
4. **Response Type**: Use `HttpResponse<string>` by default for raw JSON responses. For large responses, this minimizes memory usage and improves performance.  

Refer to the [Visma.Net API documentation](https://integration.visma.net/API-index/) for endpoint-specific guidance.


<br/>

## Error handling

If the response from the Visma.Net request is of type [HttpResponse&lt;T&gt;](../../../api-reference/built-in-types/http-response.md), the response object includes an `IsSuccess` property. If `IsSuccess` is `false`, the response object contains an `ErrorContent` property that relays error messages from the API call or internally thrown exceptions.  

For other response types and severe errors, the action will raise an error that could terminate the Flow unless the `Error` port is connected or the action is wrapped in a [Try-Catch](../../built-in/try-catch.md) block.  
