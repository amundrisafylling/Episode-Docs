# OneDrive Agent Tool

Defines a OneDrive Tool that enables the [Tools AI Agent](../agents/tools-ai-agent.md) to access OneDrive on behalf of a user.

The example below shows an agent that reads all Word documents in a OneDrive folder using the `OneDrive Agent Tool`, summarizes them, and emails the summaries along with the original documents as attachments. The "brain" that drives the agent, determining which tools to use, and generating the summaries, is the [Azure AI chat model](../azure-ai/agent-chat-model.md).

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

![Onedrive Agent Tool](/images/flow/onedrive-agent-tool.png)

<br/>

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title            | No | The title of the tool.                                 |
| Connection       | Yes | The connection to the OneDrive account. Setting up a connection requires a Microsoft `Work or School account`    |
| Capabilities     | No | Specifies what actions the tool is allowed to perform. [See details below](#capabilities). |


## Capabilities

AI agents operate autonomously by reasoning about which actions to perform in order to complete a task. Given a set of tools, you may want to restrict agents from performing potentially harmful tasks or limit the number of available tools to improve their accuracy.  

The `Capabilities` property specifies what the agent is allowed to do.

| Name                    | Description                              |
|-------------------------|------------------------------------------|
| List files and folders  | Specifies whether the tool is allowed to list files and folders in OneDrive. |
| Read (download) files   | Specifies whether the tool is allowed to read files in OneDrive. |
| Write (upload) files    | Specifies whether the tool is allowed write (upload) files to OneDrive. |
| Delete files            | Specifies whether the tool is allowed delete files from a OneDrive. |
