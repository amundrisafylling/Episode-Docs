# Connecting to Xledger

To work with **Xledger** actions in Hypergene Flow, you must first configure a connection. This can be done by selecting an existing connection or creating a new one directly in the action configuration panel.

Xledger connections use API keys to authenticate against either the production or test environment.

<br/>

## Connection properties

| Property                        | Description |
|---------------------------------|-------------|
| Connection name                | A custom name for the connection object. |
| Use Xledger test environment   (optional)  | Enable this option to use the sandbox/test environment instead of production. |
| API key for Production environment| API key used to authenticate requests in the live Xledger system. |
| API key for Test environment    (optional) | API key used for authentication when testing in the sandbox environment. |
| Description                    (optional)  | A short, internal note to help describe the connection purpose. |

<br/>

## How to Create the Connection

1. Add any Xledger action to your Flow.
2. Click the **Connection** dropdown and select **Create new connection**.
3. Provide a name and fill in the relevant API keys.
4. (Optional) Enable the test environment checkbox.
5. Click **OK** to save the connection.

<br/>

## Best Practices

- Keep production and test credentials separate.
- Use the test environment to verify flows before enabling them in production.
- Store API keys securely and rotate them periodically.

<br/>

## Related Documentation

- [Xledger Developer Portal](https://xledger.com/)
- [Hypergene Flow Workspace Objects](../../workspaces/workspace-objects.md)