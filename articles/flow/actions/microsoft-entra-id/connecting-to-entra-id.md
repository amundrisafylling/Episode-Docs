# Microsoft Entra ID Connection

To manage users and applications in your Microsoft Entra ID tenant, you must first establish a connection. This enables you to perform actions such as inviting guest users, listing current users, and managing app registrations within your tenant.

> [!NOTE]
> Before you can create a Microsoft Entra ID Connection, you need to create a **Microsoft Entra ID App** (also known as a `Service Principal`) and grant it access to the Entra ID API. Profitbase Flow will call the Entra ID API on behalf of the Service Principal, using its credentials.  
>  
> [Read about how to create a Service Principal here](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).

## Properties

| Name            | Required | Description                                                                 |
|-----------------|----------|-----------------------------------------------------------------------------|
| Tenant ID       | Required | The Microsoft Entra Tenant ID associated with the Entra ID subscription. You can find it in the Azure portal where you created the Service Principal. |
| Client ID       | Required | The ID of the Entra ID App (Service Principal) that has been granted access to the Entra ID API. |
| Client Secret   | Required | The client secret of the Entra ID App used to authenticate with the Entra ID API. |

## Enable Microsoft Entra ID Authentication

To use this connection, you must first set up a Microsoft Entra ID App (Service Principal) and grant it the necessary permissions.

1. **Create a Microsoft Entra ID App (Service Principal)**  
   Follow the [Microsoft Entra ID documentation](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) to create a Service Principal.

2. **Grant Permissions to the Service Principal**  

In your Entra ID App, navigate to **Manage > API Permissions**. Click on **Add a permission** and select **Microsoft Graph**. Choose **Application permissions**.

To follow the principle of least privilege, only grant the permissions required for the actions you plan to use. Below is the minimum recommended (application) permission for each supported Flow action at the time of writing:

| Scenario / Action                       | Minimum permission (Application) | Notes |
|----------------------------------------|----------------------------------|-------|
| Invite guest user                      | **User.Invite.All**              | Required to create invitations. |
| List users (For each user)             | **User.Read.All**                | Needed to enumerate users and access Mail property. |
| List app registrations (For each app registration) | **Application.Read.All**         | Required to enumerate application objects. |
| List client secrets (For each client secret info) | **Application.Read.All**         | Same permission used to read application passwordCredentials. |

If you only need to invite guest users, grant **User.Invite.All** and nothing more.

![Example app permissions: User.Invite.All](/images/flow/entra-id-user-invite-all-app-permissions.png)

For scenarios that include listing application objects or their secrets, add **Application.Read.All**. Avoid granting write permissions (e.g., Application.ReadWrite.All) unless the flow actually modifies app registrations.

For listing users, **User.Read.All** is the recommended baseline. (While **User.ReadBasic.All** can return a reduced set of properties, it will not expose all details your flows may rely on.)

Only grant broader or more privileged permissions if your automation explicitly requires them. Examples (do NOT add unless needed):

   - **Directory.ReadWrite.All** – Broad ability to read/write directory objects.
   - **User.ReadWrite.All** – Read/write full user profiles.
   - **User.EnableDisableAccount.All** – Enable or disable user accounts.
   - **User.ManageIdentities.All** – Manage user identities.

![Example app permissions](/images/flow/entra-id-invite-user-app-permissions.png)

3. **Grant Admin consent**  
Grant Admin consent for your organization (required for the application permissions listed).

![Example grant admin consent](/images/flow/entra-id-invite-user-grant-admin.png)

In the Entra ID admin portal, ensure the Service Principal has access to the tenant.

## Example

The example below shows a dialog that allows you to create a new Microsoft Entra ID Connection:

![Example Flow](/images/flow/entra-id-connection-example.png)
