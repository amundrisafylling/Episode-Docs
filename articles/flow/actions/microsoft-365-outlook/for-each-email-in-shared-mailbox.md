# For each email in shared mailbox

Iterates over a list of emails in a shared mailbox in Microsoft 365 Outlook.
Use this action to fetch emails from a shared mailbox in Outlook and process them one by one. 

<br/>

![img](/images/flow/outlook-for-each-email.png)
<p><em>Figure: Fetching received and sent emails and saving them to a database and then compiling mail threads based on conversation ids.</em></p>

<br/>

## Properties

<!--prettier-ignore-->
| Property            | Required | Description                                               |
|---------------------|-----------------------------------------------------------------------|
| Connection          | Required  | Specifies the [Microsoft 365 Outlook connection](outlook-connection.md) that the trigger should use to check for new emails. |
| Shared Email account | Required | Specifies the email account to fetch emails from, for example `support@corp.com` |
| Disabled            | Optional  | Specifies if the action should be disabled.  |
| Filter              | Optional  | Specifies optional filters to restrict which emails to fetch. See detailed description below. | 
| Folder              | Optional  | Specifies the folder to fetch emails from. |
| Include attachments | Optional  | Specifies whether or not to fetch the contents of all attachments when the action runs. [Read more about this option below](#attachments). |
| Output name         | Required  | The name of the output variable that represents the retrieved mail message. You can change it from the default `mailMessage` to something that more clearly describes the received mail, for example `customerFeedbackMessage`. |

<br/>

## Returns
Each email message contains the following properties:

[!INCLUDE [](__mailMessage.md)]

<br/>

#### Filter

[!INCLUDE [](mail-filters-paragraph.md)]

<br/>

## Attachments

If `Include attachments` is set to false (unchecked), only metadata about any attachments in the message is included when the trigger runs.
If this is the case, you need to use an additional action such as [Get attachment](get-attachment.md) or [For each attachment](foreach-attachment.md), to get the actual file contents of the attachments.  
If emails contains large attachments, and you don't need all of them when processing the messages, it is recommended to set the `Include attachments` to false, and instead selectively get attachments you need using the [Get attachment](get-attachment.md) action.
