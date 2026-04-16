# Insert rows



Inserts rows of data into a SQL Server database using a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader) or a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable).

Use this action when you need to insert a large number of rows into a table.



![Insert Rows](../../../../images/flow/insert-rows.png)



**Example** ![Example](../../../../images/strz.jpg)
The example above takes a file from storage, reads its JSON content, saves the data to a database, and then deletes the storage folder to keep things tidy. Actions used: 1. [Read file from share as a stream](../azure-files/read-file-as-stream.md) 2. [Get JSON DataReader](../json/get-json-datareader.md) 3. Insert rows 4. [Delete directory](../azure-files/delete-directory.md).

</br>


## Properties

| Name                  | Required | Description                                                                 |
|-----------------------|-----------|-----------------------------------------------------------------------------|
| Title                 | No | A descriptive title for the action.                                         |
| Connection            | Yes | The [SQL Server Connection](./connection.md).                               |
| Dynamic connection    | No | Use this option to select a connection created by the [Create Connection](./create-connection.md) action. |
| Source                | Yes | The data to insert. This can be a DataReader or a DataTable.                |
| Destination table     | Yes | Select or enter the name of the table to insert data into.                  |
| Batch size            | No | The number of rows inserted per batch. The default is 5000. The batch size can affect performance, and the optimal setting may vary. |
| Result variable name  | No | The name of the variable that will contain the number of rows inserted.     |
| Command timeout (sec) | No | The time limit for command execution before timing out. The default is 120 seconds. |
| Description           | No | Additional notes or comments about the action or configuration.              |

## Target table schema



The target table must have a schema (columns and data types) that matches the schema of the `Source` DataReader or DataTable.
The columns do not need to be in the same order, but they must **match by name and data type**.




> [!NOTE]
> If you get the error: **"The locale id '...' of the source column '...' and the locale id '...' of the destination column '...' do not match."**, it means the collation is different between the source and target columns (or the default set per database).
> To avoid this, either 
> - use a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable) instead of a [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader) as the **Source**.
> - or convert the COLLATION to match the target when using [SQL Server Get DataReader]. For example: `SELECT ..., CONVERT(varchar(...), [column name] COLLATE target_collation_name) AS [column name], ...`


<br/>

[!INCLUDE [](__videos.md)]
