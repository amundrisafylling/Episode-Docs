# Hogia connection

To use Hogia actions in **Hypergene Flow**, you need to select an **existing connection** or create a new one.

<br/>

The connection authorizes Flow to interact with the Hogia REST API on your behalf. It requires authentication credentials issued for your registered client application.

<br/>

## Connection properties

A [Hogia connection](https://starapi.hogia.se/) consists of the following fields:

| Name             | Description |
|------------------|-------------|
| Connection Name  | A user-defined name for this connection. |
| Client ID        | A unique identifier for your application registered with Hogia. |
| Client Secret    | A confidential string used for authenticating your client app. |
| Organization GUID | The organization identifier used by Hogia for the target company environment. |

<br/>

![Hogia Connection](../../../../images/flow/hogia-connection.png)

<br/>

> [!NOTE]
> A [Dynamic Connection](./create-connection.md) can be used to override the default connection during flow execution.  
> This is useful when connecting to different organizations programmatically or pulling credentials from external sources at runtime.

## Related documentation

- [Create dynamic Hogia connection](./create-connection.md)