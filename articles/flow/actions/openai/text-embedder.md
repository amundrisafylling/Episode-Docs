# Text embedder

Defines an [OpenAI](https://platform.openai.com/docs) Text embedder.

![Open AI Text Embeder1](/images/flow/openAI-text-embeder1.png)  

**Example** ![Example](../../../../images/strz.jpg)  
This flow processes a user's chat question by first receiving it through a [Chat completion](../../triggers/ai/chat-completion-trigger.md) trigger, then converting it into a vector using a **text embedder**, performing a [Vector search](../postgresql/vector-search.md) in a PostgreSQL database for relevant context, and finally passing the user input and retrieved context to OpenAI [Chat completion](chat-completion.md), which generates a response that is returned to the client via the [Return](../built-in/return.md) node.
<br/>

## Properties

| Name            | Type                   | Description                             |
|-----------------|------------------------|-----------------------------------------|
| Title           | No | The title of the action.                |
| Connection      | Yes | Defines the [connection](openai-connection.md) to **OpenAI**. |
| Embedding model | Yes | Name (id) of the chosen [Embedding Model](https://platform.openai.com/docs/models).|
| Description     | No | Additional information or notes about the text embedder.     |


