# Read Calculation Flow database input

Reads rows from an InVision database to be processed sequentially in a Calculation Flow.
If no [Table](table-relationship.md) or [Parameter relationships](parameter-relationship.md) are defined, all rows are processed.

### Properties

| Name                    | Required | Description                                                |
|-------------------------|--------------|------------------------------------------------------------|
| Connection              | Yes | A valid [InVision Connection](../invision-connection.md).                               |
| Source table            | Yes | The table or view to read data from.                       |
| Source columns          | No | The columns to read from the Source table. If you don't specify anything, all columns are read from the source. Note this may add overhead if not all columns are needed, which will impact performance negatively.        |
| Table relationships     | No | The [Table relationship](table-relationship.md) is used to slice the data set being processed. <br/><br/>When a Calculation Flow is executed, the calling context (for example InVision) may pass in a [Data Context](data-context.md) which specifies the context of which the Flow is run. This is typically a selected filter item, for example a specific department or an account group, or a selection of items from multiple different filters.<br/><br/>Under the hoods, the [Table relationships](table-relationship.md) along with the [Data Context](data-context.md) creates a SQL JOIN that defines the data being processed.<br/><br/>If neither this nor the Parameter relationships property is defined, or the caller does not pass in a Data Context, all rows from the Source table is processed.               |
| Parameter relationships | No | Just like the Table relationship, the [Parameter relationship](parameter-relationship.md) is used to slice the data set being processed.<br/><br/> The difference between the [Table relationship](table-relationship.md) and the [Parameter relationship](parameter-relationship.md) is that parameters are a set of _standalone_ values that can be used to slice the data set being processed.<br/><br/>Under the hoods, the Parameters relationships along with the Data Context creates a WHERE clause to slice the data being processed. If both Table and Parameter relationships are defined, and the Data Context contains data for both table and parameter contexts, both features are used to slice the data set being processed (SQL JOIN + WHERE clause).<br/><br/>If neither Parameter nor the Table relationships are defined, or the caller does not pass in a [Data Context](data-context.md), all rows from the Source table are processed.                                                  |
| Order by columns        | No | Specifies the columns to order by when reading data from the source database. |  
| Custom data context     | No | If the caller does not pass in a [Data Context](data-context.md), you can create a Data Context programatically to slice the data set being processed. The example below demonstrates how to create a custom Data Context. |
| Source DataTable        | No | Specify this property to use an existing in-memory DataTable instead of the `Source table`. In this case, no data is read from the database — only the DataTable’s rows are used. The DataTable must match the database table configuration exactly (same column names and data types). When a DataTable is used, the `Parameter relationships`, `Table relationships`, `Order by columns`, and `Custom data context` properties are ignored.| 
| Row variable name       | Yes |  The name of the variable that holds a reference to the row from the source table or query that is currently being processed. You don't need to change the default name, but best practices is to provide a meaningful name that makes it easier to understand what data the row represents. For example, if you are processing sales data, consider naming the variable "salesLine". |

<br/>

### Example - Custom data context 
This example shows how to programatically create a custom [Data Context](data-context.md) for a Calculation Flow.
The code is defined in a [Function](../../built-in/function.md) action.

[!code-csharp[](custom-data-context-example.cs)]

