# Create Connection 

This node enables the dynamic generation of an Xledger connection, allowing seamless integration with the Xledger API.

![Flow: Create Xledger connection → Get data](../../../../images/flow/Xledger-dynamic-connection.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow uses [Declare Variables](../built-in/declare-variables.md) to initialize the connection parameters, then Create Xledger connection to dynamically create an authenticated Xledger connection. The connection is passed to [Get Xledger Data](./get-xledger-data.md) node, which retrieves account data via GraphQL. On success, the accounts are inserted into the database, while any failures are surfaced — both handled by [Functions](../built-in/function.md).



## Properties

| Name | Required | Description |
|------|----------|-------------|
| Title | No | A display label for this action in the flow editor. |
| Production API key | Yes | Xledger API key for the Production environment. |
| Test API key | No | Xledger API key for the Test environment. Only used when `Use Test environment` is `true`. |
| Use Test environment | No | Routes requests to the Test environment when set to `true`. Defaults to `false`. |
| Connection variable name | No | The variable name downstream nodes use to reference this connection. Defaults to `connection`. |
| Description | No | Free-text notes about this connection or its intended use. |

> Store API keys as secrets rather than hardcoding them. Reference them with `{{secrets.your_key_name}}` in the property field.

