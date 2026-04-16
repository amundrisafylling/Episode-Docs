# For each app registration

Lists all app registrations in a Microsoft Entra ID tenant.

![Example Flow](../../../../images/flow/entra-id-for-each-app-registration-example.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow checks if there are client secrets about to expire in any of the app registrations in a Microsoft Entra ID tenant. If it is about to expire (within 30 days), the flow sends an email notification.

<br/>

## Properties

| Name                     | Required | Description                                                                 |
|--------------------------|----------|-----------------------------------------------------------------------------|
| Title                    | No | The title of the action.                                                    |
| Connection               | Yes | The [Microsoft Entra ID connection](./connecting-to-entra-id.md) to the tenant. The app registration/service principal used for the connection must have (at minimum) the delegated or application permission **Application.Read.All** to list app registrations. (Broader permissions such as Application.ReadWrite.All or Directory.Read.All also work but are not required.) |
| Prefix filter            | No | Prefix filter for app registrations **Note!** The prefix is case sensitive. |
| App registration variable name     | Yes | The name of the variable that stores the response from the Entra ID API (e.g., AppId). |
| Disabled  | No | Boolean value indicating whether the action is disabled (true/false).  |
| Description              | No | Additional details or notes about the action.                               |

<br/>

## Returns

Returns an `EntraIdAppRegistration` object with the following properties set.

| Name               | Description                                                                          |
|--------------------|--------------------------------------------------------------------------------------|
| Id                 | The application object ID (Application ObjectId).                                    |
| DisplayName        | The display name of the app registration.                                            |
| AppId              | The application ID (ClientId) used for authentication.                      |
| ServicePrincipalId | The corresponding service principal object ID (if created in the tenant).            |