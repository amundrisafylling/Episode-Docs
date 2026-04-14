# Convert a PDF file to a non-PDF file as byte array

Converts a PDF file to a target format and returns it as a byte array.

![img](../../../../images/flow/convertPDFtoOther.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow takes documentation in a PDF file from [OneDrive](../onedrive/read-file-from-onedrive-as-byte-array.md), sends it to the [Adobe PDF Services](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/) as a byte array, where it is converted into a DOCX format, and then [uploads](../onedrive/upload-file-to-onedrive.md) it to the selected folder in OneDrive.



## Properties

| Name                   | Required | Description                                                                                                                                                     |
|------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connection         | Required | The connection to the [Adobe PDF Services](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/).                                          |
| Target format      | Required | The format to which the PDF will be converted. Available formats are DOC, DOCX, PPTX, RTF and XLSX.                                                                              |
| File contents      | Required | The input file data as a byte array.      |
| Result variable name | Optional | The name of the variable in which the resulting file (converted document) will be stored. This variable can be used in subsequent steps of the flow.            |
| Description        | Optional | A user-defined description for the action, helpful for documentation or identifying the step's purpose within a larger flow.     |

<br/>

## Returns

Returns a file in the chosen format as a [Byte](https://learn.microsoft.com/en-us/dotnet/api/system.byte) [array](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays).

<br/>

[!INCLUDE [](./__videos.md)]