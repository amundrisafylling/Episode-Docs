
# Streaming chat completion

This action defines a [Google VertexAI](https://cloud.google.com/vertex-ai) streaming chat completion model that processes a prompt and delivers the response in small pieces as it is generated. Using a streaming chat completion improves responsiveness and gives the user real-time insight into the model’s output as it forms.

It's typically used when building backends for interactive chat clients, assistant-like experiences, or any UI that needs incremental model output.  
Unlike the standard [chat completion](chat-completion.md), this action returns the response **incrementally as it is generated**.

<br/>

 
## Properties 

| Name                  | Required | Description |
|-----------------------|-----------|-------------|
| Title                 | No | The title of the action. |
| Connection            | Yes | Defines the [connection](vertexai-connection.md) to **VertexAI**. |
| Model id              | Yes | ID of the chosen [model](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions). |
| System prompt         | No | A system-level instruction that guides the model’s behavior and response style. |
| User prompt           | Yes | The input message from the user, which the model processes to generate a response. |
| History               | No | A record of past interactions that provides context to the conversation, helping the model maintain continuity. |
| Context               | No | Additional context information to influence the response (if supported). |
| Prompt template   | No | Defines the structure of the prompt sent to the model. The system replaces the placeholders @@context and @@userPrompt with the relevant information. See example below. |
| Temperature           | No | Controls randomness/creativity of responses. Lower = more focused; higher = more creative. Default: 0.7. |
| Max completion tokens | No | Sets a limit on the number of tokens in the model’s response. |
| Enable grounding | No | Enables  web search to improve factual reliability by using external or structured context sources. |
| Disabled                | No | If enabled, the action is skipped during flow execution. |
| Result variable name  | No | Stores the generated AI response. Default: `response`. |
| Description           | No | Additional details or notes regarding the chat completion setup. |

<br/>

#### Prompt template

The prompt template allows you to specify the format of the prompt that is sent to the language model. This is useful for customizing how context and instructions are provided to the model.
Within the template, you can use the following placeholders:

- `@@context`: This is replaced by the "Context" property value.
- `@@userPrompt`: This is replaced by the "User prompt" property value.

The system will substitute these placeholders with the corresponding values before sending the prompt to the model.


