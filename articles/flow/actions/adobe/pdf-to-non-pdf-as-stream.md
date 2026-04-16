# Convert a PDF file to a non-PDF file as stream

Converts a PDF file to a target format and returns it as a stream object.

![img](../../../../images/flow/convertPDFtoOther2.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow takes documentation in a PDF file from [OneDrive](../onedrive/read-file-from-onedrive-as-stream.md), sends it to the [Adobe PDF Services](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/) as stream, where it is converted into a DOCX format, and then [uploads](../onedrive/upload-file-to-onedrive.md) it to the selected folder in OneDrive.



## Properties

| Name                   | Required | Description                                                                                                                                                     |
|------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connection         | Yes | The connection to the [Adobe PDF Services](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/).                                          |
| Target format      | Yes | The format to which the PDF will be converted. Available formats are DOC, DOCX, PPTX, RTF and XLSX.                                                                              |
| File contents      | Yes | The input file data as stream.      |
| Result variable name | No | The name of the variable in which the resulting file (converted document) will be stored. This variable can be used in subsequent steps of the flow.            |
| Description        | No | A user-defined description for the action, helpful for documentation or identifying the step's purpose within a larger flow.     |

<br/>

## Returns

Returns a file in the chosen format as a [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream).

<br/>

[!INCLUDE [](./__videos.md)]