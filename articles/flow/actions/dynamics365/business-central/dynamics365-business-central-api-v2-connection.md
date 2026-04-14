# Dynamics 365 Business Central APIv2 Connection

In order to make any API calls, you need to create a `Dynamics 365 Business Central APIv2 Connection` using Microsoft Entra ID authentication.

Profitbase Flow will use the connection to access the common API endpoint:  
`https://api.businesscentral.dynamics.com/v2.0/<environment name>/api/v2.0/`

## Enable Microsoft Entra ID authentication

Before you can create a Dynamics 365 Business Central APIv2 Connection, you need to create a Microsoft Entra ID App (also known as a Service Principal), and grant it access to the Business Central API. Profitbase Flow will call the Business Central API on behalf of the Service Principal, using its credentials.

#### 1. Create a Microsoft Entra ID App (Service Principal)

Start by creating a Microsoft Entra ID App to [set up Entra ID based authentication](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-develop-connect-apps#set-up-microsoft-entra-id-based-authentication). The Entra ID App, also knows as a "Service Principal", is the entity that will be granted permissions to call one or more Business Central APIs. You can think of the Entra ID App as a (service) user.

#### 2. Grant permissions to the the Entra ID App (Service Principal)

When the Entra ID App (also known as a "Service Principal") has been created, the next thing you need to do is grant it access to the service(s) and resources in Business Central that you want to access through the Business Central API.

1. In your Entra ID App, go to **Manage** -> **API Permissions**.
2. Press **Add Permissions** and select **Dynamics 365 Business Central**.
   ![img](/images/flow/dynamics365-bc-api-connection-service-principal-add-permissions.png)  
   <br/>

3. At the top, choose **Application permissions** and select **API.ReadWrite.All** and **Automation.ReadWrite.All**.
   ![img](/images/flow/dynamics365-bc-api-connection-service-principal-select-permissions.png)  
   <br/>

4. Next, you need to grant Admin consent for your organization.  
   ![img](/images/flow/dynamics365-bc-api-connection-service-principal-grant-admin-consent.png)  
   <br/>

5. Go the the Dynamics 365 Business Central Admin portal and grant the service principal access.

   <br/>

## Create a Dynamics 365 Business Central APIv2 Connection

When you have configured a Microsoft Entra ID App with permissions to call the Business Central API, you can create the connection that Flow will use to make the API requests.

To create a Dynamics 365 Business Central APIv2 Connection, add a Dynamics 365 action, for example the [REST API Request with paging](./rest-api-request-with-paging.md) action, to a Flowchart and select it. Then click the `Connection` property in the `Property panel`.

![img](/images/flow/dynamics365-bc-api-connection.png)

### Properties

| Name                                      | Required | Description                                                                                  |
| ----------------------------------------- | -------- | -------------------------------------------------------------------------------------------- |
| Tenant ID                                 | Required | The Entra Tenant Id associated with the Dynamics 365 Business Central subscription.          |
| Client ID                                 | Required | The id of the Entra ID App which has been granted access to the Business Central API.        |
| Client secret                             | Required | The client secret of the Entra ID App which has been granted access to Business Central API. |
| Dynamics 365 Business Central Environment | Required | The Business Central environment to target (Production, Sandbox, Test, etc)                  |

## Edit a Dynamics 365 Business Central APIv2 Connection

To edit an existing Business Central connection, go to `Resources` -> `Workspace Objects` in the Designer application top bar, and locate the connection.  
Read more about Workspace Objects [here](../../../workspaces/workspace-objects.md).
