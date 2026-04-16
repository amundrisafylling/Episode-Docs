# Generate embedding

Generates an embedding vector using an [OpenAI](https://platform.openai.com/docs) embedding model.

Use this action when you want to generate an embedding vector to do manual vector operations (write your own queries) against databases like PostgreSQL or Azure SQL, for example vector search or inserting / updating vector records. 

![Openai Generate Embedding](/images/flow/openai-generate-embedding.png)  

**Example** ![Example](../../../../images/strz.jpg)  
The example above illustrates part of a Flow that stores a document into SQL Server (used as a vector database). It uses the [Split text](../ai/split-text.md) action to split a large document into chunks. Then, for each chunk, we generate an embedding, and stores the text chunk along with the embedding into SQL Server as a vector record.

<br/>

## Properties

| Name            | Type                   | Description                             |
|-----------------|------------------------|-----------------------------------------|
| Title           | No | The title of the action.                |
| Connection      | Yes | Defines the [connection](openai-connection.md) to **OpenAI**. |
| Embedding model | Yes | Name (id) of the chosen [Embedding Model](https://platform.openai.com/docs/models).|
| Dimensions      | No | Some embedding models support configurable dimensionalities, for example 768 or 1536. Make sure you don't specify a dimensionality greater than the max value of the model.| 
| Input           | Yes | The (text) input that you want to generate an embedding for. |

<br/>

## Returns
This action returns a [ReadOnlyMemory&lt;float&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.readonlymemory-1). 

<br/>

>[!NOTE]
>When using `ReadOnlyMemory<float>` in database queries, you might have to manually convert it to other formats depending on which database engine you are targeting. For example, Azure SQL currently requires `ReadOnlyMemory<float>` to be converted to a string before it can be used in a query (because vector support in Azure SQL is currently in preview). However, we expect that once the VECTOR data type is GA, you will not have to do the manual conversion shown below.  

<br/>

**Example**  
You can convert ReadOnlyMemory&lt;float&gt; to a string using a [Function](../built-in/function.md) action, and then use in in an Azure SQL query like shown below.

```csharp
public string ConvertToString(System.ReadOnlyMemory<float> embedding)
{
    return JsonSerializer.Serialize(embedding.ToArray());
}
```

```sql
-- @embedding is passed as parameter. 
-- Because vector support in Azure SQL is currently in preview, 
-- we need to explicitly cast the string to the vector data type. 
declare @emb VECTOR(1536) = cast(@embedding as vector(1536))
SELECT Text, VECTOR_DISTANCE('cosine', Vector, @emb) AS Score 
FROM VectorTable 
WHERE VECTOR_DISTANCE('cosine', Vector, @emb) < 0.7
```

