# Convert a non-PDF file to a PDF file as stream

Converts a non-PDF file (Word, image, PowerPoint, etc) to PDF and returns it as a stream object.

![img](../../../../images/flow/convertOthertoPDF2.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow takes a documentation file (in DOCX format) from [OneDrive](../onedrive/read-file-from-onedrive-as-stream.md), sends it to the [Adobe PDF Services](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/) as stream, where it is converted into a PDF format, and then [uploads](../onedrive/upload-file-to-onedrive.md) it to the selected folder in OneDrive.



## Properties

| Name                   | Required | Description                                                                                                                                                     |
|------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connection         | Yes | The connection to the [Adobe PDF Services](https://developer.adobe.com/document-services/docs/overview/pdf-services-api/).                                          |
| Source format      | Yes | The format from which the PDF will be converted. |
| File contents      | Yes | The input file data as stream.      |
| Result variable name | No | The name of the variable in which the resulting file (converted document) will be stored. This variable can be used in subsequent steps of the flow.            |
| Description        | No | A user-defined description for the action, helpful for documentation or identifying the step's purpose within a larger flow.     |

<br/>

## Returns

Returns a file in the chosen format as a [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream).

<br/>

[!INCLUDE [](./__videos.md)]