# Copy Into

Copies data from a staged file into a specified [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database table.  

Use this action when your data is already staged as a file (CSV, JSON, or Parquet) in an external location such as Azure Blob Storage or Amazon S3. For inserting data that is already loaded into memory or streaming from another source, use [Insert rows](insert-data.md).

A [stage](https://docs.snowflake.com/en/sql-reference/sql/create-stage) is a location within or outside Snowflake (such as Microsoft Azure Blob storage or Amazon S3) where files are stored before they are loaded into Snowflake. This action retrieves data from the selected stage, applies any specified transformations, and inserts it into the target database table, supporting various file formats (CSV, JSON, Parquet) and customizable field mappings.
> [!NOTE]
> - A [Snowflake connection](./connecting-to-snowflake.md) must be configured.
> - The destination stage must already exist (e.g. an Azure Blob Storage or S3 stage).
> - The destination table must already exist in Snowflake.


![img](../../../../images/flow/snowflake-copy-data.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow creates a CSV stream from input data using [Create CSV file as stream](../csv/create-csv-file-as-stream.md), uploads it to a stage with [Upload Blob](../azure-blob-storage/upload-blob.md), and then loads the data into a Snowflake table.
<br/>

## Properties

| Name                    | Required | Description                                                                                                                                  |
|-------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Title                   | Optional | A display label for this action in the flow editor.                                                                                          |
| Connection              | Required | The Snowflake [connection](./connecting-to-snowflake.md) to use.                                                                             |
| Stage name              | Required | An existing [stage](https://docs.snowflake.com/en/sql-reference/sql/create-stage) name. The `@` prefix is added automatically. The stage must be set up before running this action. |
| File name               | Required | The name of the file to import from within the stage.                                                                                        |
| File format settings    | Required | The file type (CSV, JSON, or Parquet) and its parsing options. Settings vary by format — see [File format settings](#file-format-settings) below. |
| Destination table       | Required | The Snowflake table to copy data into. You can select an existing table or enter a name.                                                     |
| Transformation/mappings | Optional | Maps file fields to destination table columns. Required when using Parquet format.                                                           |
| Result variable name    | Optional | Stores the number of inserted rows for use later in the flow.                                                                                |
| Description             | Optional | Notes about this action's configuration.                                                                                                     |

<br/>

## Returns 

 **Integer** [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32) — the number of rows successfully copied into the destination table.

<br/>

## File format settings 

The available settings depend on the file format you select.


### CSV

![CSV format settings panel](../../../../images/flow/snowflake-copy-data2.png)

### JSON

![JSON format settings panel](../../../../images/flow/snowflake-copy-data3.png)

### Parquet

![Parquet format settings panel](../../../../images/flow/snowflake-copy-data4.png)

> [!WARNING]
> Parquet requires transformation mappings. When using Parquet format, you must configure the **Transformation/mappings** property to specify how Parquet columns map to the destination table.

![Example: transformation mappings configured for a Parquet file](../../../../images/flow/snowflake-copy-data1.png)

