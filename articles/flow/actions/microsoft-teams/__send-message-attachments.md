## Attachments
In Teams, an _attachment_ is a _reference_ to a document, not the embedded document itself. This differs from email, where files are included in email messages directly.  
To send a Teams message with attachment(s), the document(s) [must already exist in OneDrive / SharePoint](https://learn.microsoft.com/en-us/graph/api/chatmessage-post?view=graph-rest-1.0&tabs=csharp#example-4-send-a-message-with-file-attachment-in-it). To include a OneDrive / SharePoint document as an attachment, do the following:
1) In the `Attachments` property of the action, add attachements by defining their Id, Name, Content type and Content Url. 
2) In the message, a reference to the attachment **must** be included on the form `<attachment id="GUID"></attachment>`. The Id in the attachments tag in the message **must** match the Id of the attachment in the Attachements dialog. (See example below) 

| Name         | Required | Description             |
|--------------|---------------------|-------------------------|
| Id           | Required            | The Id of the attachment. This must be a valid GUID. |
| Name         | Required            | The name of the attachment, for example the file name. |
| Content type | Required            | The content type specifying the attachment type. This defaults to `reference`. |
| Content URL  | Required            | The location of the document in OneDrive / SharePoint. Use one of the OneDrive actions to retrieve the document from OneDrive and use the `WebUrl` or `WebDavUrl` property of the OneDriveItem as the Content URL. |

![img](/images/flow/teams-message-attachments.png)
<p><em>Figure: Attachments must be referenced by id in the message using the &lt;attachment&gt; element .</em></p>