# Get DataReader

Provides a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqldatareader) for reading a forward-only stream of rows from a Google BigQuery database.

![Bigquery Get Datareader](../../../../images/flow/bigquery-get-datareader.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow reads data from a Google BigQuery database using a forward-only data reader and processes the result as a stream.  
It executes a SQL query, exposes the result as a **DataReader**, and passes that reader to downstream actions that consume the data sequentially, such as formatting the result and uploading it as a file.

<br/>

## Properties

| Name | Required | Description |
|------|----------|-------------|
| Title | No | The name of the action as shown in the flow. |
| Connection | Yes | The Google BigQuery [connection](connecting-to-bigquery.md) used to execute the query. |
| SQL expression and parameters | Yes | The SQL query to execute, including any parameters. |
| Reader variable name | No | Name of the variable that stores the returned DataReader for use by subsequent actions. |
| Description | No | Additional notes about the action or its configuration. |


<br/>

## Returns

[IDataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader)

