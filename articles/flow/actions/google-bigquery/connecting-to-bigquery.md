# Google BigQuery Connection

When adding a [Google BigQuery](https://cloud.google.com/bigquery/docs/introduction) action, select an [existing connection](../../workspaces/workspace-objects.md) or create a new one.

Hypergene Flow supports two authentication methods:
- **User Authentication** (recommended for most cases)
- **Custom Connection String (JSON)**

<br/>

## Connection properties

| Name | Description |
|-------|-------------|
| Name | A custom label for the connection. This name will appear when selecting it in a Flow action. |
| Connection/Authentication Type | Choose between:<br/>• **User Authentication** – Login with your Google account to authorize access.<br/>• **Custom JSON String** – Provide a full connection object in JSON format (service account credentials). |
| Project ID | The **Google Cloud Project ID** associated with your BigQuery dataset. |
| Client ID | OAuth 2.0 **Client ID** from your Google Cloud project's credentials. |
| Client Secret | OAuth 2.0 **Client Secret** tied to the client ID. |
| Refresh Token | A long-lived token used to authenticate and obtain access tokens automatically. |

> **TIP**  
> To generate the refresh token, you can use OAuth Playground or a custom authorization flow in your app. Ensure the token has access to BigQuery APIs.

<br/>

## Setting up User Authentication

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Navigate to **APIs & Services → Credentials**.
3. Click **Create Credentials → OAuth client ID**.
4. Select **Web application** and set the redirect URI to a placeholder (it won’t be used in this case).
5. Copy the **Client ID** and **Client Secret**.
6. Use OAuth tools (like [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)) to generate a **Refresh Token** with BigQuery scopes:
    - `https://www.googleapis.com/auth/bigquery`

> **NOTE**  
> Ensure BigQuery API is enabled in your project:  
> [Enable BigQuery API](https://console.cloud.google.com/flows/enableapi?apiid=bigquery)

<br/>

## Custom Connection JSON String

If you are using a **service account** for access:

1. In the Google Cloud Console, go to **IAM & Admin → Service Accounts**.
2. Select your service account and click **Create Key**.
3. Choose **JSON** format and download the key file.
4. Paste the entire JSON content as your custom connection string.

> This method uses a service account to authenticate and does not rely on user-based OAuth tokens.

<br/>

## Example: User Authentication

![User Authentication UI](../../../../images/flow/action-bigquery-connection.png)

<br/>

## Example: Custom JSON String

![Custom JSON UI](../../../../images/flow/action-bigquery-connection2.png)

<br/>

## Additional Resources

- [BigQuery API Introduction (Google Docs)](https://cloud.google.com/bigquery/docs/connections-api-intro)
- [Azure Data Factory: BigQuery Connector Reference](https://learn.microsoft.com/en-us/azure/data-factory/connector-google-bigquery?tabs=data-factory#using-user-authentication)
