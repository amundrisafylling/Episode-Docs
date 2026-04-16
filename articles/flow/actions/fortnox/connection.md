# Fortnox connection

To use Fortnox actions in **Hypergene Flow**, you need to select an **existing connection** or create a new one.

<br/>

The connection authorizes Flow to interact with the Fortnox REST API on your behalf. It requires authentication credentials issued for your registered client application.

<br/>

## Connection properties

A [Fortnox connection](https://www.fortnox.se/developer/authorization/get-access-token-using-client-credentials) consists of the following fields:

| Name             | Description |
|------------------|-------------|
| Connection Name  | A user-defined name for this connection. |
| Client ID        | A unique identifier for your application registered with Fortnox. |
| Client Secret    | A confidential string used for authenticating your client app. |
| Tenant ID        | The identifier of the Tenant (database ID).  |
| Scope            | Select one or more [scopes](https://www.fortnox.se/developer/guides-and-good-to-know/scopes) for use in requests. |

<br/>

![Fortnox Connection](../../../../images/flow/fortnox-connection.png)

<br/>

> [!NOTE]
> A [Dynamic Connection](./create-connection.md) can be used to override the default connection during flow execution.  
> This is useful when connecting to different subscriptions programmatically or pulling credentials from external sources at runtime.

<br/>

## Getting Activation/Access Code 

In order to use Fortnox actions and connections, You will need to activate access by getting an Access Code the first time.

1) Start by clicking on **Request Access** 
2) A new tab (window) in the browser will be opened redirecting to Foortnox.
3) This is the Fortnox activation page where You must login to Fortnox, select tenant, and accept scope.
4) After confirmation you will be directed to an empty page (connect-microsoft.profitbase.com). Close the browser tab.
5) Click on **Get Access Code** to get the code. You can then copy it to the clipbord and store it.

<br/>


## Related documentation

- [Fortnox API authentication](https://www.fortnox.se/developer/authorization/get-access-token-using-client-credentials)
- [Fortnox Scopes](https://www.fortnox.se/developer/guides-and-good-to-know/scopes)
- [Create dynamic Fortnox connection](./create-connection.md)