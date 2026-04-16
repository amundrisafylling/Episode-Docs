# Create Excel file as byte array

Creates an Excel file from a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable) or [DataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.idatareader) and serializes it as a `byte array`.

![Create Excel File As Byte Array Ex1](https://profitbasedocs.blob.core.windows.net/flowimages/create-excel-file-as-byte-arrayEx1.png)

<br/>

## Properties

| Name                 | Required | Description                                                                                                   |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Title                | No |   The title of the action.                    |
| Source               | Yes | Specifies the source of the data, which can either be a DataTable or DataReader.                              |
| Sheet name           | No | Specifies a worksheet name. |
| Column mapping       | No | Defines the mapping between Excel column letters and business object property names.                          |
| Worksheet formatting options | No | Specifies detailed formatting options.                                                                                                       |
| Byte array variable name | No | The name of the variable you can use to reference the byte array in other actions.                                                                                                           |
| Description | No |  Additional notes or comments about the action or configuration. |

<br/>

## Returns

Returns the Excel file serialized as a [byte](https://learn.microsoft.com/en-us/dotnet/api/system.byte) [array](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays)

<br/>

### Automatic column mapping

Columns can be mapped automatically by using the "Map from sample file" option.

![Get Data Reader Ex2](https://profitbasedocs.blob.core.windows.net/flowimages/getDataReaderEx2.png)


<br/>

[!INCLUDE [](./__videos.md)]
