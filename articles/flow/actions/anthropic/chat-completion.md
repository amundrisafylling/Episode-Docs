# Chat completion

This defines an [Anthropic](https://docs.claude.com/en/api/overview) chat completion model that processes a prompt, understands the user’s intent, and generates the next response. Using chat completion provides structured reasoning, allows the model to follow context, and helps maintain a coherent dialogue.  

This action is typically used in flows where you need the model’s complete output in a single, finalized response instead of receiving partial tokens over time.
Unlike the [streaming](streaming-chat-completion.md) version, this action delivers the **complete output in one response**.

![img](../../../../images/flow/anthropic-chat-completion.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow processes a user's chat question by first receiving it through a [Chat completion trigger](../../triggers/ai/chat-completion-trigger.md), then converting it into a vector using a [Text embedder](../openai/text-embedder.md), performing a [Vector search](../postgresql/vector-search.md) in a PostgreSQL database for relevant context, and finally passing the user input and retrieved context to OpenAI **Chat completion**, which generates a response that is returned to the client via the [Return](../built-in/return.md) node.

<br/>


## Properties

| Name                    | Required | Description |
|-------------------------|-----------|-------------|
| Title                   | Optional  | The title of the action. |
| Connection              | Required  | Defines the [connection](anthropic-connection.md) to Anthropic. The connection provides the API key required to access Anthropic models. |
| Model Id                | Required  | The Anthropic model ID to use (for example `claude-3-5-sonnet-latest`). |
| System Prompt           | Optional  | High-level instructions that guide the model’s behavior, tone, and response style. |
| User Prompt             | Required  | The user's message that will be sent to the model. |
| History                 | Optional  | A list of previous messages used to maintain conversation context between requests. |
| Context                 | Optional  | Additional contextual information provided to the model, such as domain knowledge or retrieved data. |
| Prompt Template         | Optional  | Defines the structure of the prompt sent to the model. Placeholders such as `@@context` and `@@userPrompt` are automatically replaced with their values. |
| Temperature             | Optional  | Controls the randomness of the model output. Lower values make responses more deterministic, while higher values produce more varied results. |
| Max Completion Tokens   | Required  | The maximum number of tokens the model is allowed to generate in its response. |
| Result Variable Name    | Optional  | The variable name that stores the model response. Default value: `response`. |
| Enable Grounding        | Optional  | Enables  web search to improve factual reliability by using external or structured context sources. |
| Enable Web Fetch        | Optional  | Allows the model to retrieve information from the web when generating responses. |
| Disabled                | Optional  | If enabled, the action will be skipped during flow execution. |
| Description             | Optional  | Additional notes or metadata describing the purpose of the action. |

<br/>

## Returns

An **AIChatCompletionResponse** (Profitbase.Flow.Extensions.AI.AIChatCompletionResponse).

<br/>

## Prompt template

The Prompt Template allows you to define the final structure of the prompt sent to Anthropic.  
This is useful when combining user input with retrieved context or applying structured instructions.

You can use the following placeholders inside the template:

- `@@context` — replaced with the **Context** value  
- `@@userPrompt` — replaced with the **User Prompt** value  

Before calling the model, the system merges template values into a single finalized prompt.
