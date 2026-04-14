# DeltaSet

Contains a collection or rows to insert, update or delete to a database, file or service. 

## Properties

| Name       | Type                                | Description                           |
|------------|-------------------------------------|---------------------------------------|
| Inserts    | List&lt;[DeltaRow](#deltarow)&gt;   | New rows to insert to the target.     |
| Updates    | List&lt;[DeltaRow](#deltarow)&gt;   | Changed rows to update in the target. |  
| Deletes    | List&lt;[DeltaRow](#deltarow)&gt;   | Rows to delete from the target.       |

<br/>

# DeltaRow
Represents a row in a DeltaSet.  

## Properties
| Name       | Type                                  | Description                           |
|------------|---------------------------------------|---------------------------------------|
| Cells      | List&lt;[DeltaCell](#deltacell)&gt;   | The cells in a row.                   |


## Methods
| Name                             | Description                           |
|----------------------------------|---------------------------------------|
| GetKeyValue(string columnName)   | Returns the value the key column with the specified name. |
| GetValue(string columnName)      | Returns the value of the column with the specified name.  |

<br/>

# DeltaCell
Represents a cell in a DeltaRow.  

## Properties
| Name               | Type                 | Description                                     |
|--------------------|----------------------|-------------------------------------------------|
| ColumnName         | [string](https://learn.microsoft.com/en-us/dotnet/api/system.string)   | The name of the column represented by the cell. |
| Value              | [object](https://learn.microsoft.com/en-us/dotnet/api/system.object)   | The value of the cell.                          |
| IsUpdateOrDeleteKey | [bool](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)    | Specifies whether or not the cell represents a column to match on when performing an update or delete. | 