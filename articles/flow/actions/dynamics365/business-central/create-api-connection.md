# Create Business Central API v2 connection

This action creates a connection for Dynamics 365 Business Central API v2, and is intended for dynamically connecting to different Business Central subscriptions during the execution of a Flow.   

If you store the credentials for the Dynamics 365 Business Central API outside Flow (for example in your own Azure SQL or PostgreSQL database), use this action to _dynamically_ create a connection for the Business Central API. The connection returned from the action must then be used as the input to the `Dynamic connection` property of a Dynamics 365 API request action, for example the [REST API Request with paging](./rest-api-request-with-paging.md) action.

This enables dynamically connecting to different Dynamics 365 Business Central subscriptions based on parameters or conditions in a Flow.

> [!NOTE]
> Before you can create a Dynamics 365 Business Central APIv2 Connection, you need to create a **Microsoft Entra ID App** (also known as a `Service Principal`), and grant it access to the Business Central API. Hypergene Flow will call the Business Central API on behalf of the Service Principal, using its credentials.  
>  
> [Read about how to create a Service Princial here](./dynamics365-business-central-api-v2-connection.md).


![img](/images/flow/dynamics365-bc-create-dynamic-connection.png)

## Properties


| Name            | Description                                                                             |
|-----------------|-----------------------------------------------------------------------------------------|
| Tenant ID       | The `Microsoft Entra` Tenant Id associated with the Dynamics 365 Business Central subscription. You can find it in the Azure portal where you created the Service Principal.     |
| Client ID       | The id of the Entra ID App which has been granted access to the Business Central API.   |
| Client secret   | The client secret of the Entra ID App which has been granted access to Business Central API. |
| Environment     | The Business Central environment to target (`Production`, `Sandbox`, `Test`, etc)                  |