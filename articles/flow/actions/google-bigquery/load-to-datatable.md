# Load to DataTable

Loads data from a Google BigQuery database into memory as a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable) object.

<br/>

![Bigquery Load To Datatable](https://profitbasedocs.blob.core.windows.net/flowimages/bigquery-load-to-datatable.png)

<br/>

## Properties

| Name                        | Required | Description                                                                                      |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| Title                       | No | The title or name of the action.                                                                 |
| Connection                  | Yes | The Google BigQuery database connection.                                                                    |
| SQL expression and parameters | Yes | The command to execute along with any parameters.                               |
| Table variable name         | No | Name of the DataTable variable that stores the result of the query.                              |
| Description                 | No | Any additional notes or information relevant to the DataTable action.                            |

<br/>

## Returns

Returns the [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable) object.
