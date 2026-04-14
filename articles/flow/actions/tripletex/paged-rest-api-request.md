# REST API Request with paging

Use [Tripletex REST APIs (v2)](https://tripletex.no/v2-docs/) to read paged data.  


The **REST API Request with paging** action allows you to use the [Tripletex REST APIs](https://tripletex.no/v2-docs/) to retrieve large, paginated datasets. This action simplifies working with endpoints that return multiple pages of data, such as lists of customers, invoices, or accounting records. Pagination is handled automatically, allowing you to focus on processing the data.  

![img](/images/flow/rest-api-paging-trip.png)  
<br/>

## Properties

| Name            | Required | Description                                                                                   |
|----------------- | -------- | --------------------------------------------------------------------------------------------- |
| Title           | Optional | The title or name of the request.                                                             |
| Connection      | Required | The [Tripletex Connection](./tripletex-connection.md) used to make an authenticated request to Tripletex REST API.         |
| Dynamic connection | Optional | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Configuration   | Required | Specifies the HTTP request to the Tripletex API, including the HTTP method, URL, parameters, and return type. |
| Start index     | Optional | The starting point of the index for data retrieval. Defaults to 0 if not specified.           |
| Items per page  | Optional | The number of items to retrieve per page. Defaults to 5000 if not specified.                  |
| Max page count  | Optional | The maximum number of pages to fetch. Defaults to 9999 if not specified.                      |
| Description     | Optional | Additional notes or comments about the action or configuration.                               |

<br/>

## Returns  

The return type for Tripletex API actions is defined during configuration. It can be either:  
- A **custom data type**, or  
- The raw JSON response from the API.  

We recommend using the built-in [HttpResponse&lt;T&gt;](../../api-reference/built-in-types/http-response.md) type because it will include additional information about the response, such as the HTTP status code and error(s).

We also recommend simply dumping the raw response to a data store, and then use data transformation tools to transform the data into a usable format. If you know the API returns small amounts of data (10 000 - 200 000 records), you can consider using the [Get JSON DataReader](../json/get-json-datareader.md) to flatten JSON to a tabular format and process the data as rows and columns, for example by inserting directly to a SQL Server table.

<br/>

## Configuration  

To define a request to the Tripletex REST API, you can start from a template, or define it manually.
If you press the `New Request` button in the Configuration dialog, you can choose from a set of predefined request templates.  

### Steps for Manual Configuration:  

1. **Method**: Specify the HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc.). Use `GET` for retrieving data.  
2. **URI**: Define the endpoint URL (e.g., `v2/project` or `v2/customer`). Pass required parameters (e.g., IDs) as query parameters or in the request body.  
3. **Headers and Authorization**:  
   - Authentication is automatically set up from the connection settings.
   - Ensure proper encoding of any additional headers.  
4. **Response Type**: Use `HttpResponse<string>` by default for raw JSON responses. For large responses, this minimizes memory usage and improves performance.  

For endpoint-specific details, refer to the [Tripletex API documentation](https://tripletex.no/v2-docs/).  

![img](/images/flow/dynamics365-bc-new-request.png)

<br/>

## Error handling

If the response from the Dynamics 365 Business Central REST API is set to [HttpResponse&lt;T&gt;](../../api-reference/built-in-types/http-response.md), the response object includes an `IsSuccess` property. When `IsSuccess` is false, the response has an `ErrorContent` property that relay the error messages from the API call or from internally thrown exceptions. 
For other response types and for severe errors, the action will raise an error that could terminate the Flow unless either the `On Error` port is connected, or it is wrapped in a [Try-Catch](../built-in/try-catch.md) action. 
The `On Error` error handler will be triggered for each `page error`, allowing you to handle errors individually and preventing Flow from automatically raising an error that might terminate the running process.

<br>

## API Limits  

Tripletex enforces rate limits to manage server load. If you exceed these limits, the API will return a `429 Too Many Requests` error. The action has a built-in retry mechanism (three retries).  

### Best Practices for Handling API Limits:  
- Implement additional retry mechanism.  
- Optimize queries to fetch only necessary data.  
- Monitor API usage to avoid hitting the limit during peak periods.  

For more information, visit the [Tripletex API documentation](https://tripletex.no/v2-docs/).  

By following these guidelines, you can integrate with the Tripletex API efficiently and avoid common pitfalls.
