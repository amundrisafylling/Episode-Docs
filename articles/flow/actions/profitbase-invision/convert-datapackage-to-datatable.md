# Convert DataPackage to DataTable

Converts an InVision DataPackage to a .NET [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable).

You can use this action to convert the data returned from an [InVision SQL Script returning data](./sql-script/execute-sql-script-returning-datapackage.md) action to a standard .NET DataTable.  
The DataTable can then be used by other actions, such as [Function](../built-in/function.md) for custom business logic, exporting to Excel, PDF, CSV, or Parquet, writing to databases like PostgreSQL or SQL Server, and more.


![img](../../../../images/flow/execute-sql-script-returning-datapackage2.png) 

**Example** ![img](../../../../images/strz.jpg)  
This flow executes a SQL script[SQL Script returning data](./sql-script/execute-sql-script-returning-datapackage.md), converts the result into a table, [generates a CSV file](../csv/create-csv-file-as-stream.md) from the data, and [uploads](../azure-blob-storage/upload-blob.md) the file to blob storage.


<br/>

## Properties

| Name                | Required | Description |
|---------------------|----------|-------------|
| Title               | Optional | A descriptive label for the action displayed in the Flow editor. |
| Source DataPackage  | Required | The DataPackage, typically returned from a [SQL Script returning data](./sql-script/execute-sql-script-returning-datapackage.md) action, to convert to a .NET DataTable. |
| Table variable name | Required | The name of the variable that stores the converted DataTable. |
| Disabled            | Optional | When enabled, the action is skipped during flow execution. |
| Description         | Optional | Additional notes or comments about the action or configuration. |

<br/>

## Returns
Returns a .NET [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable).