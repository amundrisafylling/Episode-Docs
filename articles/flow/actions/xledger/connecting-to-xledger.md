# Connecting to Xledger


Before any Xledger action in a Flow can retrieve data, it needs a connection that authenticates against the Xledger API. This page covers how to create and configure that connection.



## Prerequisites

- An Xledger API key for the Production environment. Contact your Xledger administrator if you don't have one.
- If you plan to test against the sandbox, a separate API key for the Xledger test environment.
- Familiarity with [Workspace Objects](../../workspaces/workspace-objects.md) — Xledger connections are stored as Workspace Objects and can be reused across actions and Flows within the same Workspace.



## How to create a connection

1. Add any Xledger action to your Flow (e.g., **Get Xledger data**).
2. In the action's property panel, click the **Connection** dropdown and select **Create new connection**.
   The **Get Xledger data connection** dialog opens.
3. Enter a **Name** for the connection. This label appears in the Connection dropdown across all Xledger actions in the Solution, so choose something identifiable (e.g., "Xledger Production — Finance").
4. Enter your **API key for Production environment**.
5. *(Optional)* To work against the Xledger sandbox, check **Use Xledger test environment** and enter the **API key for Test environment**.
6. Click **Test connection** to validate the credentials before saving.

> [!WARNING]
> If the test fails, the connection can still be saved — but any Flow that uses it will fail at runtime. Always verify the connection before using it in a scheduled or production Flow.


7. Click **OK** to save.

To reuse an existing connection instead of creating one, click **Use existing connection** at the top of the dialog and select from the dropdown.



## Connection properties

| Property | Required | Default | Description |
|----------|----------|---------|-------------|
| **Name** | Yes | — | Display label for this connection. Shown in the Connection dropdown on all Xledger actions within the Solution.  |
| **Use Xledger test environment** | No | Unchecked | When enabled, Xledger actions using this connection send requests to the sandbox environment instead of production. |
| **API key for Production environment** | Yes | — | The API key used to authenticate against the live Xledger system. Required even when the test environment is enabled. |
| **API key for Test environment** | No | — | The API key for the Xledger sandbox. Only used when **Use Xledger test environment** is checked. |


## Switching between test and production

Checking or unchecking **Use Xledger test environment** controls which API key the connection uses at runtime. You do not need to create separate connection objects for test and production — a single connection holds both keys and switches based on this flag.

> [!TIP]
> Use this during development: build and validate your Flow with the test environment enabled, then uncheck the flag when you're ready to run against production data. No rewiring needed.

> [!IMPORTANT]
> Changing this setting affects every Xledger action that references this connection. If multiple Flows share the same connection, switching the flag switches all of them.



## Updating or rotating API keys

To update an API key, open any Xledger action that uses the connection, click the **Connection** dropdown, and edit the existing connection. Replace the key and click **Test connection** to verify, then save.



> [!WARNING]
> If you rotate an API key in Xledger without updating the connection in Profitbase, all Flows using that connection will fail at their next execution.




## Related

- [Xledger Developer Portal](https://xledger.com/)
- [Create connection](./create-connection.md) — how to set up and configure the Xledger API connection used by all Xledger actions in a Flow
- [Get Xledger data](./get-xledger-data.md) — the action that uses this connection to read data from Xledger
- [Hypergene Flow Workspace Objects](../../workspaces/workspace-objects.md)