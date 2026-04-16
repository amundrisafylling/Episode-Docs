# Bad data

When importing data from a CSV format, you often get bad data in form of badly formatted values, missing fields, or simply unexpected values.
In a large data set, bad data is often hard to track down. By enabling **Error handling** behaviors in the [Data import options](configuration-properties/data-import-options.md), you can record the bad data encountered during a CSV import and investigate which rows and fields are causing the import to fail.

Bad data is stored in the **BadData** property of the action, and can be read as an `IEnumerable<BadDataRecord>` or as an `IDataReader`. This makes it easy to dump the information to a database table or a file for debugging purposes.

The BadDataRecord object has the following properties:

| Name          | Data type        | Description                                         |
|---------------|------------------|-----------------------------------------------------|
| RecordIndex   | Int32            | The index of the record / row in the CSV data set.  |
| RecordData    | String           | The raw record / row in the CSV data set.           |
| DebugInfo     | String           | Descriptive information about what caused the data to fail validation. |

<br/>

#### Example - Dump bad data to SQL Server
To dump bad data to a SQL Server table, do the following:

1) Create a table with the following schema (You can name it whatever you like).

```sql
CREATE TABLE [dbo].[BadData](
	[RecordIndex] [int] NULL,
	[RecordData] [nvarchar](max) NULL, -- Choose a text data type that fits the size of a row from your CSV file
	[DebugInfo] [nvarchar](max) NULL -- This field may contain the row data in addition to debugging information, so choose a data type accordingly
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
```

2) Add an [Insert data](../sql-server/insert-data.md) action to the Flow after the CSV reader action and connect them.
3) Select the `Insert data` action, and in the `property panel`, choose the BadData collection from the CSV action as the `Source` property.
4) In the `Destination table` property, specify the name of the table you created in step 1) above ("BadData").
![Bad Data To SQL Server Example](/images/bad_data_to_sql_server_example.png)