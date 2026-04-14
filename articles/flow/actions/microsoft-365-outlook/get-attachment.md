# Get attachment

Gets an attachment from an email in Microsoft 365 Outlook.

![img](/images/flow/microsoft-365-outlook-get-attachment.png)

When email messages are retrieved by Profitbase Flow, you may specify whether or not to include the contents of all attachments by default.
Use this action to fetch the contents of a _specific attachment_.

## Properties

| Property      | Required | Description                                                                                                             |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| Connection    | Required | A [Microsoft 365 Outlook connection](./outlook-connection.md) which grants Profitbase Flow access to the email account. |
| Message Id    | Required | The id of the email message that contains the attachment. You can get the id of the message from the `output` of actions or triggers returning email messages, for example the [When a new email arrives](../../triggers/microsoft-365-outlook/when-new-email-arrives-trigger.md) trigger. |
| Attachment Id | Required | The id of the attachment in the email message. You can get the id of attachments from the `output` of actions returning attachments, for example the [For each attachment](foreach-attachment.md) action. |
| Email account | Optional | Specify the email account only if you are getting attachments from a `shared mailbox`, for example `support@corp.com`. To get attachments from email messages in shared mailboxes, the Outlook API requires the email account to be specified, or else it assume that you to fetch data from the email account specified as logon for the Connection.  |

### Example

This example shows how to use the output of a [When a new email arrives](../../triggers/microsoft-365-outlook/when-new-email-arrives-trigger.md) trigger to get the (email) message id and attachment id and use it for fetching the attachments.  
![img](/images/flow/microsoft-365-outlook-get-attachment-example.png)


<br/>

[!INCLUDE [](./__videos.md)]