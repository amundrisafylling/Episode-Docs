# For each row in CSV file

Iterates over rows in a CSV file.

<br/>

![Read Rows](https://profitbasedocs.blob.core.windows.net/flowimages/readRows.png)

<br/>

## Properties


| Name                | Required | Description                                      |
| ------------------- | --------- | ------------------------------------------------ |
| Title               |           |                                                  |
| File contents       | Yes | The contents of the file, provided as either a stream or a byte array. |
| Data start row           | No | Specifies the index of the row where the data starts. If the file has a header row, the data start row is typically 2. If the files does not have a header row, the start row is usually 1. |
| [Column mapping](configuration-properties/column-mapping.md) | Yes | The mapping between the field indices and field data types in the file, and the columns in the final data set. |
| [Data import options](configuration-properties/data-import-options.md)      | No | Specifies options for error handling and how the contents of the file is parsed, such as date and number formattings. |
| Enable dynamic data import options | No | Indicates whether dynamic data import options should be used. |
| Dynamic data import options | No | A [JSON](json.md) object containing dynamic configuration for data import.     |
| [Field parser](configuration-properties/field-parser.md)             | Optional       | Provides a way to customize how field values are parsed during import.    
| Row variable name   | No | The name of the variable you can use to reference the Row in other actions.                      |
| Row data type       | Read-only |                                                  |
| Description         | No | Additional notes or comments about the action or configuration. |

<br/>

[!INCLUDE [](__videos.md)]