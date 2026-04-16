# Send email

Sends an email using Microsoft 365 Outlook.

Use this action to send emails from a `personal` Microsoft 365 Outlook mailbox. If you don't already have one, you need to first create a [Microsoft 365 Outlook connection](./outlook-connection.md) to grant Hypergene Flow permissions to use the personal account on behalf of the user.

![img](/images/flow/microsoft-365-outlook-send-mail.png)

> [!CAUTION]
> Consider carefully whether to use a personal or rather a [shared mailbox](./send-email-from-shared-mailbox.md). You decide this when you create the Microsoft 365 Outlook connection.  
> If you work in a Workspace shared with other people, they can use the same connection to read, send, delete and update mail messages.  
> We recommend using shared mailboxes, or log on using a service user account (such as a company support account) so you don't accidentally grant other people access to your personal email account.

## Properties

<!--prettier-ignore-->
| Name        | Required | Description                                                                                                                       |
| ----------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | Yes | A [Microsoft 365 Outlook connection](./outlook-connection.md) which grants Hypergene Flow access to sending email from a personal email account. The `sender` address will be the email account used to log on when creating the M365 Outlook connection. |
| To          | No | The email address of the primary recipient. Use semicolon to specify multiple recipients `(user1@corp.com; user2@corp.com)`. |
| Cc          | No | CC recipient(s). Use semicolon to specify multiple recipients `(user1@corp.com; user2@corp.com)`. |
| Bcc         | No | BCC recpient(s). semicolon to specify multiple recipients `(user1@corp.com; user2@corp.com)`. |
| Subject     | No | The email subject.  |
| Message     | No | The email message.  |
| Attachments | No | Any attachments to include in the email. |

> [!NOTE]
> At least one recipient (To, Cc or Bcc) must be specified.

<br/>

[!INCLUDE [](./__videos.md)]