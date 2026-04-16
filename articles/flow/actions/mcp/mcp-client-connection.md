# MCP client connection


The **MCP Client Tool connection** defines how Hypergene Flow connects to an MCP Server. This connection allows data exchange through supported transport protocols, with optional authentication if required by the server.

When adding an MCP action, select an [existing connection](../../workspaces/workspace-objects.md) or create a new one.

<br/>

## Connection properties

| Name           | Description                            |
| ----------------|----------------------------------------|
| Name   (optional) | The name of the connection.            |
| Transport type  | The transport type used by the client and server to communicate. <br/>The following types are currently supported:<br/> - SSE (Server-Sent Events)<br/> - Streamable HTTP. <br/><br/>By default, Flow will use the **AutoDetect** mode to try to automatically choose the correct transport type. If this fails, you need to specify the transport type manually. Refer to the documentation for MCP Server you are trying to connect to to learn which transport type to use. |
| Endpoint        | The address of the remote MCP server. Refer to the documentation for MCP Server you are trying to connect to to learn which endpoint to use.|
| Authentication type  (optional) | The authentication type required by the remote MCP server. Refer to the documentation for MCP Server you are trying to connect to to learn which authentication type to use.| 

