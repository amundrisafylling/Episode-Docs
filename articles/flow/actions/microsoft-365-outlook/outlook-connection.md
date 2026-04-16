# Microsoft 365 Outlook Connection

To perform actions such as sending emails, reading inbox content, or triggering flows based on incoming messages using **Hypergene Flow**, you need to establish a connection to your Microsoft 365 Outlook account.

<br/>

## Creating a New Outlook Connection

You can create an Outlook connection by selecting the **Connection** property in the property panel of an Outlook action in Flow.

When creating the connection, you will be prompted to sign in with your Microsoft 365 credentials and decide the **scope of mailbox access**.

By signing in, you authorize **Hypergene Flow** to access Microsoft Outlook **on your behalf** using delegated permissions.

<br/>

## Connection Scope Options

You must choose whether Flow should have access to:
- **All mailboxes** you have access to (including your personal mailbox), or
- **Only shared mailboxes** that your account has access to

### Allow access to all mailboxes (personal and shared)

If you **leave the "Allow access to shared mailboxes only" option unchecked**, Flow will be able to:
- Access **your personal inbox**
- Access **all shared mailboxes** your user account has access to
- Send, receive, and manage emails across all available mailboxes

### Allow access to shared mailboxes only

If you **check the "Allow access to shared mailboxes only" option**, Flow will:
- Authenticate with your user account
- Limit actions (read/send emails, etc.) to **shared mailboxes** only
- **Exclude personal inbox access**

> **Best practice for shared environments**  
> If you're working in a **Workspace shared with other users**, it is recommended to:
> - Grant access to **shared mailboxes only**, or
> - Use a **dedicated service account** for Outlook actions

<br/>

![Microsoft 365 Outlook Connection - Shared Mailboxes Only](/images/flow/microsoft-365-outlook-connection-shared-only.png)

<br/>

## Related Documentation

- [Microsoft 365 Outlook API permissions](https://learn.microsoft.com/en-us/graph/permissions-reference)
- [Trigger flow on incoming email](https://docs.profitbase.com/articles/flow/actions/microsoft-365-outlook/trigger-on-new-mail.html)
- [Send email using Outlook](https://docs.profitbase.com/articles/flow/actions/microsoft-365-outlook/send-email.html)