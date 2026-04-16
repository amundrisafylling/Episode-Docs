# REST API Request

The `REST API Request` action enables you to call [Finago Office (24SevenOffice) API](https://rest-api.developer.24sevenoffice.com/doc/v1/) and retrieve data. A typical use case is to create data integrations for pulling data from Finago Office/24SevenOffice into a data platform solution.

![24seven Office REST API](/images/flow/24SevenOffice-rest-api.png)

**Example** ![Example](../../../../images/strz.jpg)  
The example above shows a Flow that use a [dynamic connection](./create-connection.md) to 'request accounts' . The json data in the response content is [converted to a table](../json/get-json-datatable.md) and the data is [inserted into](../sql-server/insert-data.md) an SQL server table.

<br/>

## Properties

<!--prettier-ignore-->
| Name          | Required | Description                                                                                                                                                                          |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    | Yes | The [connection](./connection.md) used to make an authenticated request to the Finago Office REST API. |
| Dynamic connection | No | Use this option if You need to create a connection using different credentials stored outside the workspace (for example in your own database). It is also useful when To dynamically create a connection, use the [Create Finago Office Connection](./create-connection.md) action.  |
| Configuration | Yes | Defines the HTTP request to make to the API. See details [below](#configuration).  |
| Disabled      | No | Boolean value indicating whether the action is disabled (true/false). |
| Description   | No | Additional details or notes about the action. |

<br/>

## Returns

The return type is defined when configuring the action. It can be a custom data type or the raw JSON response from the API.  
We recommend using the built-in [HttpResponse&lt;T&gt;](../../api-reference/built-in-types/http-response.md) type because it will include additional information about the response, such as the HTTP status code and error(s).

We also recommend simply dumping the raw response to a data store, and then use data transformation tools to transform the data into a usable format. If you know the API returns small amounts of data (10 000 - 200 000 records), you can consider using the [Get JSON DataReader](../json/get-json-datareader.md) to flatten JSON to a tabular format and process the data as rows and columns, for example by inserting directly to a SQL Server table.

<br/>

## Configuration

To define a request to the REST API, you can start from a template, or define it manually.
If you press the `New Request` button in the Configuration dialog, you can choose from a set of predefined request templates.  
The template collection contains a subset of the available APIs. If you cannot find a template for the request you want to make, you can refer to the [API documentation](https://rest-api.developer.24sevenoffice.com/doc/v1/) and define the request manually.

<br/>

### Defining a request manually

To define a request manually, please refer to the [API documentation](https://rest-api.developer.24sevenoffice.com/doc/v1/) to learn which endpoint and parameters to use.

1. Define the `Method` (`GET`, `PUT`, `POST`, `DELETE`, etc ). Most APIs for fetching data requires the `GET` method.
2. Define the `URI`. This is the API endpoint, for example `companies/{id}`. If a query requires parameters (for example the company id in this example), insert a variable from Flow using the popup that appears when the URI editor gets focus.
3. Add optional `Query Parameters`. E.g. when requesting TransactionLines, add parameters for `dateFrom` and `dateTo` with date values (ISO format).
4. Define the `Response`. The default response type is [HttpResponse&lt;string&gt;](../../api-reference/built-in-types/http-response.md). This means you get back the raw JSON response from the API. You can change the data type to a custom type if you want to, but keep in mind that this will allocate more memory and impact performance negatively for large data sets such as dimensions and general ledger queries. We recommend simply dumping the raw response to a data store (like a database or blob storage), and then use tools like dbt, SQLMesh or Azure Data Factory to transform the data into a usable format.
