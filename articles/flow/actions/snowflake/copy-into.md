# Copy Into

Copies data from a staged file into a specified [Snowflake](https://docs.snowflake.com/en/user-guide-getting-started) database table.  

A [stage](https://docs.snowflake.com/en/sql-reference/sql/create-stage) is a location within or outside Snowflake (such as Microsoft Azure Blob storage or Amazon S3) where files are stored before they are loaded into Snowflake. This action retrieves data from the selected stage, applies any specified transformations, and inserts it into the target database table, supporting various file formats (CSV, JSON, Parquet) and customizable field mappings.

![img](../../../../images/flow/snowflake-copy-data.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow creates a CSV stream from input data using [Create CSV file as stream](../csv/create-csv-file-as-stream.md), uploads it to a stage with [Upload Blob](../azure-blob-storage/upload-blob.md), and then loads the data into a Snowflake table.
<br/>

## Properties

| Name                      | Data type | Description                                                                                         |
|---------------------------|-----------|-----------------------------------------------------------------------------------------------------|
| Title                     | Optional  | The title or name of the command.                                                                   |
| Connection                | Required  | The Snowflake [connection](./connecting-to-snowflake.md).                                          |
| Stage name                | Required  | Select an existing [Stage](https://docs.snowflake.com/en/sql-reference/sql/create-stage) name (will be prefixed by @).                                             |
| File name                 | Required  | Select the name of the file to import from.                                                        |
| File format settings      | Required  | Select the file type and optional settings for parsing.                                                |
| Destination table         | Required  | Select or enter the name of the table to copy into.                                                |
| Transformation/mappings   | Optional  | Map between file fields and destination table columns.      |
| Result variable name      | Optional  | Name of the result variable containing the number of inserted rows.                                 |
| Description               | Optional  | Additional notes or comments about the action or configuration.                                     |

<br/>

## Returns 

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32) The number of rows affected/inserted.

<br/>

## File format settings 

Options for CSV files

![img](../../../../images/flow/snowflake-copy-data2.png)

Options for JSON files

![img](../../../../images/flow/snowflake-copy-data3.png)

Options for Parquet files

![img](../../../../images/flow/snowflake-copy-data4.png)

<br/>

> [!NOTE]
>
>- The Stage must exist and can be set up, for example, as Microsoft Azure Blob storage or an Amazon S3 Bucket.
>- In order to use Parquet format, configure the transformation settings. See example below.


![img](../../../../images/flow/snowflake-copy-data1.png)

