# Azure Blob Storage Agent Tool

Defines an AI Tool that enables the [Tools AI Agent](../agents/tools-ai-agent.md) to access Azure Blob Storage to perform actions.

The example below illustrates using the [Tools AI Agent](../agents/tools-ai-agent.md) to retrieve a list of all blobs in an Azure Storage container and return the result as a JSON string. We then convert the returned JSON string to a business object containing the list of files so we can use later in the Flow.  
The Tools AI Agent uses the chat model to reason about how to perform the task given the tools provided to it. The `Azure Blob Storage Agent Tool`  supports reading information about blobs in an Azure Storage container (see [capabilities](#capabilities) below), so the tool will be used by the agent to complete the task.  

The following prompts are used:  

**System prompt**  
```txt
You are an agent that will use the tools provided to you to perform the tasks requested by the user.  
If you cannot perform the task, stop without any retries.
```

**User prompt**  
```txt
List the names of all blobs found in the container.
Format the response as a JSON object on the following format:  

{
   "blobNames": []
}

Do NOT wrap the response in Markdown annotation.
```


![img](/images/flow/azure-blob-agent-tool.png)

<br/>

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title            | No |The title of the tool.  |
| Connection       | Yes | The [Azure Blob container connection](./azure-blob-container-connection.md). The currently supported options are `SAS URI` and `Connection string + container name`.    |
| Dynamic connection | No | A connection dynamically created using the [Create Azure Blob container connection](./create-azure-blob-container-connection.md) action.    |
| Capabilities     | No | Specifies what actions the tool is allowed to perform. [See details below](#capabilities). |


## Capabilities

AI agents operate autonomously by reasoning about which actions to perform in order to complete a task. Given a set of tools, you may want to restrict agents from performing potentially harmful tasks or limit the number of available tools to improve their accuracy.  

The `Capabilities` property specifies what the agent is allowed to do.

| Name                  | Description                              |
|-----------------------|------------------------------------------|
| List blobs            | Specifies whether the tool is allowed to list blobs in an Azure Blob container. |
| Read (download) blobs | Specifies whether the tool is allowed to read blobs from a container. |
| Write (upload) blobs  | Specifies whether the tool is allowed write (upload) blobs to a container. |
| Delete blobs          | Specifies whether the tool is allowed delete blobs from a container. |