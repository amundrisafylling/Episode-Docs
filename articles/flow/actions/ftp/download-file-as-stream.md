# Download file as stream

Downloads a file from an FTP / SFTP directory into a [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream).

![FTP Download File As Stream](../../../../images/flow/ftp-download-file-as-stream.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow **downloads** an invoice as a DOCX file from an FTP server. For archiving purposes, the file is [converted](../adobe/non-pdf-to-pdf-as-stream.md) to a read-only PDF format, [uploaded](upload-file.md) and stored in a separate folder.

<br/>

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title  | No |   The title of the action.       |
| Connection | Yes | Select a connection to the FTP or SFTP server where the file is located. |
| File name | Yes | Select or enter the name of the file to download. |
| Directory path | No | Select or enter the directory to download from. |
| File stream name | No | Name of the file stream. |
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

Returns chosen file as a [Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream).
