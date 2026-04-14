# Streaming chat completion

This action defines an [Anthropic](https://docs.claude.com/en/api/overview) streaming chat completion model that processes a prompt and delivers the response in small pieces as it is generated. Using a streaming chat completion improves responsiveness and gives the user real-time insight into the model’s output as it forms.

It's typically used when building backends for interactive chat clients, assistant-like experiences, or any UI that needs incremental model output.  
Unlike the standard [chat completion](chat-completion.md), this action returns the response **incrementally as it is generated**.

![img](../../../../images/flow/anthropic-streaming-chat-completion.png)

**Example** ![img](../../../../images/strz.jpg)  
The Flow above shows how to provide real-time completions to a chat client. External data sources may be added — for example vector search for RAG or a chat history store — to give the model additional context and support follow-up questions.

<br/>

## Properties

| Name                    | Required | Description |
|-------------------------|-----------|-------------|
| Title                   | Optional  | The title of the action. |
| Connection              | Required  | Defines the [connection](anthropic-connection.md) to Anthropic. The connection provides the API key needed to access Anthropic models. |
| Model Id                | Required  | The Anthropic model ID you want to use (e.g., `claude-3-5-sonnet-latest`). |
| System Prompt           | Optional  | High-level instructions that define the model’s behavior, tone, and response rules. |
| User Prompt             | Required  | The user message that the model responds to. |
| History                 | Optional  | Previous messages in the conversation. Helps the model maintain context and continuity. |
| Context                 | Optional  | Additional information injected into the prompt, often used with RAG to improve accuracy. Supports plain text or vector search results. |
| Prompt Template         | Optional  | Defines the final prompt structure. The placeholders `@@context` and `@@userPrompt` are automatically replaced with their values. |
| Temperature             | Optional  | Controls the randomness of the output. Lower values produce more deterministic responses, while higher values generate more varied results. |
| Max Completion Tokens   | Required  | Maximum number of tokens the model can generate in its response. |
| Stream Variable Name    | Optional  | The variable that receives each streamed message chunk during generation. Default: `message`. |
| Result Variable Name    | Optional  | Stores the final combined response after streaming completes. Default: `response`. |
| Enable Grounding        | Optional  | Enables  web search to improve factual accuracy using external or structured context. |
| Enable Web Fetch        | Optional  | Allows the model to retrieve information from the web when generating responses. |
| Disabled                | Optional  | If enabled, the action is skipped during flow execution. |
| Description             | Optional  | Additional notes or explanation for the action. |

<br/>

## Returns

An **AIChatCompletionResponse** (Profitbase.Flow.Extensions.AI.AIChatCompletionResponse).

<br/>

## Prompt template

The **Prompt Template** defines how the message sent to Anthropic should be structured.  
It is useful when you want strict formatting or when combining user input with retrieved context.

The following placeholders are available:

- `@@context` — replaced with the **Context** value  
- `@@userPrompt` — replaced with the **User Prompt** value  

Before submitting the request, the system merges all template elements into a single final prompt.


