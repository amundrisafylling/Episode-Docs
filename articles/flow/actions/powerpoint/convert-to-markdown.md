# Convert a PowerPoint file to Markdown

Converts a PowerPoint file to [Markdown](https://en.wikipedia.org/wiki/Markdown).

![Convert Power Point To Markdown](../../../../images/flow/convert-PowerPoint-to-markdown.png)

**Example** ![Example](../../../../images/strz.jpg)  
This Flow reads a presentation (PowerPoint file) from [OneDrive](../onedrive/read-file-from-onedrive-as-byte-array.md), converts it to Markdown, [splits the text](../ai/split-text.md) into chunks, [generates embeddings](../azure-ai/generate-embedding.md) for each chunk, converts the generated vector into a SQL Server-compatible format and stores the text, vector, and document reference in a SQL Server table. This table can then be used for [vector search](../postgresql/vector-search.md) or to feed chat models with the extracted information.

<br/>

## Properties

| Name                 | Required | Description                                                                                                   |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Title                | No |   The title of the action.                    |
| File Data            | Yes | Specifies the source of the PowerPoint file, which can either be a Stream or a Byte Array.     |
| Result variable name | Yes | The name of the variable in which the result will be stored. |
| Description          | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

This action returns a string/text in markdown format.
