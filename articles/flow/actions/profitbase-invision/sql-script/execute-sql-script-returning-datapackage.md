# Execute SQL Script returning DataPackage

Executes an [SQL Script](../../../../invision/docs/sqlscripts.md) in an InVision Solution that returns a [DataPackage](../../../../invision/docs/package.md).


![img](../../../../../images/flow/execute-sql-script-returning-datapackage.png) 

**Example** ![img](../../../../../images/strz.jpg)  
This flow executes a SQL script to retrieve DataPackage, [converts](../convert-datapackage-to-datatable.md) the result into a table, [generates a CSV file](../../csv/create-csv-file-as-stream.md) from the data, and [uploads](../../azure-blob-storage/upload-blob.md) the file to blob storage.


>[!NOTE]
> The SQL Script must take less than 5 minutes to complete.


<br/>

## Convert to .NET DataTable
To work with the data returned from the action, convert the result to a .NET DataTable using the [Convert DataPackage to DataTable](../convert-datapackage-to-datatable.md) action. The DataTable can then be used by other actions, such as [Function](../../built-in/function.md) for custom business logic, exporting to Excel, PDF, CSV, or Parquet, writing to databases like PostgreSQL or SQL Server, and more.

## Properties

| Name                 | Required | Description |
|----------------------|----------|-------------|
| Title                | Optional | A descriptive label for the action displayed in the Flow editor. |
| Connection           | Required | Defines the [InVision connection](../invision-connection.md) used to execute the SQL script. |
| SQL Script           | Required | The InVision SQL Script to execute. This script is created and stored in InVision. |
| Language             | Optional | Specifies the language context used during execution, typically for localization or translations. |
| Parameters           | Optional | Defines input parameters passed to the SQL script. Supports static or dynamic parameter mapping. |
| Result variable name | Optional | The name of the variable that will store the returned DataPackage. |
| Disabled             | Optional | When enabled, the action will be skipped during flow execution. |
| Description          | Optional | Additional notes or comments about the action configuration. |


## Returns

Returns a DataPackage containing the result of the SQL script execution.