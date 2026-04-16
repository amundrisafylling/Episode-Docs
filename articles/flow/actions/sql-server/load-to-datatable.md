# Load to DataTable

Loads data from a SQL Server database into memory as a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable) object.

![Load To Datatable](https://profitbasedocs.blob.core.windows.net/flowimages/load-to-datatable.png)

<br/>

## Properties

| Name         | Type            | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title              | No | A descriptive title for the action.               |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| SQL expression and parameters   | Yes | The command to execute along with any parameters.   |
| Table variable name | Yes | The name of the variable returning the DataTable  |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

[DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable).
<br/>

[!INCLUDE [](__videos.md)]