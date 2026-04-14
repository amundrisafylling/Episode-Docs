# REST API Request with paging

Use [Visma.Net REST APIs](https://integration.visma.net/API-index/) to read paged data.  


The **REST API Request with paging** action allows you to use the [Visma.Net](https://developer.visma.com/api/visma-net) REST APIs to retrieve large, paginated datasets. This action simplifies working with endpoints that return multiple pages of data, such as lists of customers, invoices, or accounting records. Pagination is handled automatically, allowing you to focus on processing the data.  You can offcourse use it for none-paged requests also.

 <!-- TODO image.. -->

<br/>

## Properties

| Name            | Required | Description                                                                                   |
|----------------- | -------- | -------------------------------------------------------------- |
| Title           | Optional | The title or name of the request.                         |
| Connection      | Required | The [Visma.Net Connection](./visma-net-connection.md) used to make an authenticated request to Tripletex REST API.         |
| Dynamic connection | Optional | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Configuration   | Required | Defines the HTTP request to Visma.Net, including the method, URL, parameters, and return type.  |
| Company Id      | Optional | The Company Id to request data from. Default company can be set in the connection.        |
| Start page      | Optional | The page to begin retrieving data from. Defaults to 1 (if not specified).                            |
| Items per page  | Optional | The number of items to retrieve per page. Defaults to 1000 (if not specified).                  |
| Max page count  | Optional | The maximum number of pages to fetch. Defaults to 9999 (if not specified).                      |
| Description     | Optional | Additional notes or comments about the action or configuration.                               |

<br>

## Returns  

The return type is defined when configuring the action. It can be a custom data type set by the template, or the raw JSON response from the API.  

For templated requests returning a single item, the return type is an Entity. E.g. v1\Customer\12345 returns a CustomerDTO entity.
For API returning collections, the default return value is [HttpResponse&lt;T&gt;](../../../api-reference/built-in-types/http-response.md). This contains the result as a JSON string and the Status and any errors of the request.


We recommend dumping the raw response into a data store and using data transformation tools to convert it into a usable format. If the API returns a relatively small dataset (10,000–200,000 records), consider using the [Get JSON DataReader](../../json/get-json-datareader.md) to flatten the JSON into a tabular format. This allows you to process the data as rows and columns, such as by inserting it directly into a SQL Server table.


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

For other response types and severe errors, the action will raise an error that could terminate the Flow unless the `On Error` port is connected or the action is wrapped in a [Try-Catch](../../built-in/try-catch.md) block.  

The `On Error` handler is triggered for each `page error`, allowing you to handle errors individually and prevent the Flow from automatically raising an error that might terminate the running process.


<br>

## API Limits  

Visma.Net APIs enforce rate limits to ensure fair usage and optimal performance. If you exceed these limits, the API will return a `429 Too Many Requests` error. 
The action handles this by delaying calls and retrying requests. If the retry limit is reached, an error is returned.
