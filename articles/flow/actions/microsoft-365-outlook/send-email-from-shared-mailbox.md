# Send email from shared mailbox

Sends an email from a shared mailbox using Microsoft 365 Outlook.

Use this action to send emails from a `shared` Microsoft 365 Outlook mailbox. If you don't already have one, you need to first create a [Microsoft 365 Outlook connection](./outlook-connection.md) by logging on with an account having access to the shared mailbox.

![Microsoft 365 Outlook Send Mail](/images/flow/microsoft-365-outlook-send-mail.png)

## Properties

| Name        | Required | Description                                                                                                                      |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Connection  | Yes | A [Microsoft 365 Outlook connection](./outlook-connection.md) with access to the shared email account specified in `From email`. |
| From email  | Yes | The shared email account to use as the sender account, for example `support@corp.com`.                                           |
| To          | No | The email address of the primary recipient. Use semicolon to specify multiple recipients `(user1@corp.com; user2@corp.com)`. |
| Cc          | No | CC recipient(s). Use semicolon to specify multiple recipients `(user1@corp.com; user2@corp.com)`. |
| Bcc         | No | BCC recpient(s). semicolon to specify multiple recipients `(user1@corp.com; user2@corp.com)`. |
| Subject     | No | The email subject.                                                                                                               |
| Message     | No | The email message.                                                                                                               |
| Attachments | No | Any attachments to include in the email.                                                                                         |

> [!NOTE]
> At least one recipient (To, Cc or Bcc) must be specified.

<br/>

[!INCLUDE [](./__videos.md)]