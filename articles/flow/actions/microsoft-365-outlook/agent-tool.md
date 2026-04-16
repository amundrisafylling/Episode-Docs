# Outlook Agent Tool

Defines an Outlook Tool that enables the [Tools AI Agent](../agents/tools-ai-agent.md) to access Outlook on behalf of a user.

The example below shows an agent that reads all Word documents in a OneDrive folder, summarizes them, and emails the summaries using the `Outlook Agent Tool` along with the original documents as attachments. The "brain" that drives the agent, determining which tools to use, and generating the summaries, is the [Azure AI chat model](../azure-ai/agent-chat-model.md).  
  
The following prompts are used:  

**System prompt**  
```txt
You are an agent that will use the tools provided to you to perform the tasks requested by the user.  
If you cannot perform the task, stop without any retries.
```

**User prompt**  
```txt
From OneDrive, get all Word (.docx) documents in the 'Work' folder.
For each document, get the file and create a summary.
Send an email from luke.skywalker@rebellion.com to darth.vader@empire.com that contains all the summaries.  
Use the subject: 'Summary'.
Include all the Word documents as attachments to the email.
```

![Outlook Agent Tool](/images/flow/outlook-agent-tool.png)

<br/>

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title            | No | The title of the tool.                                 |
| Connection    | Yes | A [Microsoft 365 Outlook connection](./outlook-connection.md) which grants Hypergene Flow access to the email account. |
| Capabilities     | No | Specifies what actions the tool is allowed to perform. [See details below](#capabilities). |


## Capabilities

AI agents operate autonomously by reasoning about which actions to perform in order to complete a task. Given a set of tools, you may want to restrict agents from performing potentially harmful tasks or limit the number of available tools to improve their accuracy.  

The `Capabilities` property specifies what the agent is allowed to do.

| Name                    | Description                              |
|-------------------------|------------------------------------------|
| Send email              | Specifies whether the tool is allowed to send emails. |
