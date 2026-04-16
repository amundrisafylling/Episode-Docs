# MCP client tool

Defines an MCP Client that enables an AI agent to use tools exposed by an MCP Server.

![MCP Client Tool](/images/flow/mcp-client-tool.png)

**Example** ![Example](../../../../images/strz.jpg)  
The example above shows a Flow that runs on a schedule, using an AI agent to check the production line status and notify supervisors if action is needed.  The agent queries the Azure SQL–based production line system via an Azure SQL MCP server, then sends notifications to users through a Microsoft Teams MCP server.
<br/>

## Properties

| Name       | Required           | Description                                |
|------------|----------------|--------------------------------------------|
| Connection | Yes | The [connection](./mcp-client-connection.md) to the MCP server.          |
| Tools      | No | The tools to expose to the [Tools AI Agent](../agents/tools-ai-agent.md). If _no_ tools are selected, _all_ available tools from the MCP server is exposed to the agent.<br/> **NOTE!**<br/>LLMs (which act as the AI agent's brain) can get confused if too many tools are available. Try to keep the number of tools they can choose from as small as possible.  |
