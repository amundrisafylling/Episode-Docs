# Markdown Agent Tool

Defines a Markdown Tool that enables the [Tools AI Agent](../agents/tools-ai-agent.md) to work with Markdown.  

A typical use case for this tool is to enable an AI agent to convert Word or PDF files to text (Markdown) in order to reason about the contents of the files.

The example below shows an agent that reads all Word documents in a OneDrive folder (using the [OneDrive Agent Tool](../onedrive/agent-tool.md)), summarizes them, and [emails](../microsoft-365-outlook/agent-tool.md) the summaries along with the original documents as attachments. 
By providing the `Markdown Agent Tool` to the AI Agent, it can convert the Word documents into a readable text format and generate summaries from them.  
The "brain" that drives the agent, determining which tools to use, and generating the summaries, is the [Azure AI chat model](../azure-ai/agent-chat-model.md).  

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

![Markdown Agent Tool](/images/flow/markdown-agent-tool.png)