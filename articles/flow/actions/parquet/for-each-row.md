# For each row in Parquet file

Iterates over rows in a Parquet file.

<br/>

![img](https://profitbasedocs.blob.core.windows.net/flowimages/parquet-read-rows.png)

<br/>

## Properties

| Name              | Required | Description                                                                |
| ----------------- | --------- | -------------------------------------------------------------------------- |
| Title             |           |                                                                            |
| File contents | Required       |  The contents of the file, provided as either a stream or a byte array. |
| Column mapping    | Required  | Defines the mapping between Parquet column names and business object property names.           |
| Row variable name | Optional  | The name of the Row variable.                                              |
| Row data type     | Read-only | The name of the data type used to represent a row, for example 'Customer'. |
| Description       | Optional  |  Additional notes or comments about the action or configuration.  |

<br/>

### Column mapping:

![img](https://profitbasedocs.blob.core.windows.net/flowimages/column-mapping.png)
