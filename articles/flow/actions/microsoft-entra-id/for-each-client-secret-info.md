# For each client secret info

Lists all client secret information for an app registration in a Microsoft Entra ID tenant.

![Example Flow](../../../../images/flow/entra-id-for-each-client-secret-example.png)

**Example** ![Example](../../../../images/strz.jpg)  
This flow checks if there are client secrets about to expire in any of the app registrations in a Microsoft Entra ID tenant. If it is about to expire (within 30 days), the flow sends an email notification.

<br/>

## Properties

| Name                     | Required | Description                                                                 |
|--------------------------|----------|-----------------------------------------------------------------------------|
| Title                    | No | The title of the action.                                                    |
| Connection               | Yes | The [Microsoft Entra ID connection](./connecting-to-entra-id.md) to the tenant. The app registration/service principal must have (at minimum) **Application.Read.All** to list client secrets for an application (broader permissions like Application.ReadWrite.All also work but are not required). |
| App ID                   | Yes | The ID of the app registration for which to list client secrets.           |
| Client secret variable name     | Yes | The name of the variable that stores the response from the Entra ID API (e.g., EndDate). |
| Disabled  | No | Boolean value indicating whether the action is disabled (true/false).  |
| Description              | No | Additional details or notes about the action.                               |

<br/>

## Returns

Returns an `EntraIdClientSecretInfo` object with the following properties set.

| Name        | Description                                                      |
|-------------|------------------------------------------------------------------|
| KeyId       | The key (identifier) of the client secret.                       |
| DisplayName | (If available) The display name assigned to the client secret.   |
| StartDate   | The start (activation) date/time (UTC) of the client secret.     |
| EndDate     | The expiration date/time (UTC) of the client secret.             |