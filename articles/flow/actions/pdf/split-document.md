# Split a PDF document 

Splits a PDF document and returns chunks of page(s) as byte array.



![Split PDF Into Chunks](../../../../images/flow/splitPDF_into_chunks.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow reads a PDF file from [OneDrive](../onedrive/read-file-from-onedrive-as-byte-array.md), splits it into smaller chunks, assigns a unique name to each chunk ([function](../built-in/function.md)), converts each chunk to a Word format, and uploads the resulting Word documents back to [OneDrive](../onedrive/upload-file-to-onedrive.md).


The variable initialized at the beginning of the flow (called index) is used to track and generate unique names for each chunk of the PDF after it's split.

When the PDF is split into multiple chunks (pages or groups of pages), each chunk must be saved and uploaded with a unique filename to avoid overwriting previous files and to maintain proper organization.

![Split PDF Into Chunks2](../../../../images/flow/splitPDF_into_chunks2.png)

![Example](../../../../images/strz.jpg) We generate the variable first to start a counter (from 0) that we can increment for naming each file chunk.
<br/>


![Split PDF Into Chunks3](../../../../images/flow/splitPDF_into_chunks3.png)

<br/>

![Split PDF Into Chunks4](../../../../images/flow/splitPDF_into_chunks4.png)

<br/>

> [!NOTE]
> Without this step, all chunks would have the same name, and only one file would remain on OneDrive.

<br/>

## Properties

| Name                 | Required | Description                                                                                                   |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Title                | No |   The title of the action.                    |
| File Data            | Yes | Specifies the source of the PDF file.                         |
| Pages per chunk           | No | Defines how many pages should be included in each chunk.                         |
| Chunk variable name | No | The name of the variable in which the chunk(s) will be stored. |
| Description          | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

This action returns chunks of page(s) as a [byte](https://learn.microsoft.com/en-us/dotnet/api/system.byte) [array](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/arrays).

<br/>




