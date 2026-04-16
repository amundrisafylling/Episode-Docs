# A2A AI agent

Defines an AI agent designed to perform tasks on behalf of a Client (orchestrator) agent. It uses the [A2A protocol](https://a2a-protocol.org/latest/) and is intended exclusively for Agent-to-Agent interoperability where requests are issued by a Client agent and the (A2A) AI agent is responsible for completing the task.

> [!NOTE]
> The AI agent node has no `Execution in` or `Execution out` ports, which means that when it’s used in a Flow, no other executable nodes can be included in that Flow.  

![A2A AI Agent](/images/flow/a2a-ai-agent.png)

<br/>

## Properties

| Name           | Required | Description                     |
|----------------|---------------|---------------------------------|
| Name           | Yes | A human-readable name for the agent. The name helps users and other agents in understanding its purpose. |
| Instructions   | Yes | Defines the behavior of the agent and rules it should follow. |
| Tools usage    | No | Specifies whether the agent should use tool calling directly, or write and execute code to use the tools. [Read more about this topic below.](#tools-include) |
| Description    | Yes | A human-readable description of the agent, assisting users and other agents in understanding its purpose. |
| Skills         | Yes | The set of skills, or distinct capabilities, that the agent can perform. |

<br/>

### Skills
| Name          | Type           | Description                                      |
|---------------|----------------|--------------------------------------------------|
| Name          | Yes | A human-readable name for the skill.             |
| Description   | Yes | A detailed description of the skill, intended to help clients or users understand its purpose and functionality. |
| Tags          | Recommended    | A semicolon separated list of keywords describing the skill's capabilities, for example `billing; customer support`  |
| Input modes   | Recommended    | The set of supported input [Media types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) for this skill, for example `text`, `application/json`, or `image/png`. This describes the format of the data that the agent accepts. |
| Output modes  | Recommended    | The set of supported output [Media types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) for this skill, for example `text`, `application/json`, or `image/png`. This describes the format of the data that the agent returns to the client agent.  |
| Examples      | Recommended    | Example prompts or scenarios that this skill can handle. Provides a hint to the client on how to use the skill. Example: "What is the total amount for sales in region West?" |  

<br/>

<a name="tools-include"></a>
[!INCLUDE [Tool](./__tools-usage.md)]

<br/>

## Enabling Client agents to use the AI agent as a remote agent
A2A enables agent-to-agent interoperability, where a Client Agent acts on behalf of a user or process, issuing requests and commands to remote agents.  

To use a Flow A2A AI Agent as a remote agent, the Client Agent must first discover it by retrieving its [Agent Card](https://a2a-protocol.org/latest/specification/#5-agent-discovery-the-agent-card). The Agent Card contains information about the agent—such as its API endpoint and authentication requirements. The discovery request itself does not require authentication.  

Once the Client Agent has discovered the remote agent, it can use the information in the Agent Card to make authenticated requests. Flow A2A AI Agents support API key authentication, so an API key must be included in the HTTP request sent by the Client Agent.  

The Agent Card specifies the name of the authentication header so it can be resolved dynamically. For Flow, the header is always `x-api-key`.  

```csharp
private static async Task<AIAgent> CreateAgentAsync(AgentInfo agentInfo)
{
    var url = new Uri(agentInfo.Url);
    var httpClient = new HttpClient
    {
        Timeout = TimeSpan.FromSeconds(60)
    };

    var agentCardResolver = new A2ACardResolver(url, httpClient, agentCardPath: agentInfo.AgentCardPath);
    var agentCard = await agentCardResolver.GetAgentCardAsync();
    var securityScheme = ((ApiKeySecurityScheme)agentCard.SecuritySchemes["apiKey"]);

    // This should be looked up from some sort of storage, like a database or environment variable.
    string apiKey = "my-api-key"; 

    // Flow A2A agents always expects auth header to be named 'x-api-key',
    // however, you can avoid hard coding by getting it from the SecurityScheme in the Agent Card.
    httpClient.DefaultRequestHeaders.Add(securityScheme.Name, apiKey);

    return await agentCardResolver.GetAIAgentAsync(httpClient);
}
```

<br/>

#### Finding the API key for an A2A AI agent.

To find the API key for an A2A AI agent, click the `Agent Card discovery addresses` in the agent's property editor, or open the `Resources -> Flow properties` window in the application toolbar (upper right corner).

> [!NOTE]
> If the API key field is empty, go to the Portal and generate an [API key](../../tenants/api-keys.md) for `A2A`.

![A2A AI Agent API Key](/images/flow/a2a-ai-agent-api-key.png)