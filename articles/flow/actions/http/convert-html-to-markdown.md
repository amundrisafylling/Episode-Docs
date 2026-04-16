# Convert HTML to Markdown

Returns [Markdown](https://en.wikipedia.org/wiki/Markdown) text from a HTML document (page).


![img](../../../../images/flow/convert-HTML-to-markdown.png)

**Example** ![img](../../../../images/strz.jpg)  
This Flow downloads the [HTML](http-request.md) of a specified page, converts the HTML to Markdown, [splits the cleaned content](../ai/split-text.md) into smaller chunks, [generates embeddings](../azure-ai/generate-embedding.md) for each chunk, converts the embeddings into a SQL Server–compatible format, and stores the text, vector, and document reference in a SQL Server table. This table can then be used for [vector search](../postgresql/vector-search.md) or to feed chat models with the extracted information.

<br/>

## Properties

| Name                 | Required | Description                                                                                                   |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Title                | No |   The title of the action.                    |
| File Data            | Yes | Specifies the source of the HTML text, which can either be a string, a Stream or a Byte Array.                |
| Result variable name | Yes | The name of the variable in which the result will be stored.  |
| Description          | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

This action returns a string/text in markdown format.

<br/>

[!INCLUDE [](./__videos.md)]