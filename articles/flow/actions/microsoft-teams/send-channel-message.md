# Send message in channel

Sends a message in a Microsoft Teams channel.

Use this action to send a message to a Microsoft Teams channel. The action supports both Text and HTML message formats, and you can also include attachments.

![Teams Send Channel Message](/images/flow/teams-send-channel-message.png)

<br/>

## Properties

| Name           | Required           | Description                        |
|----------------|----------------|------------------------------------|
| Connection     | Yes | The [connection](./connection.md) to the Teams account. Setting up a connection requires a **Microsoft Work or School account**.|
| Team (ID)      | Yes | The ID of the team that the channel belongs to. |
| Channel (ID)   | Yes | The ID of the channel to send the message to. |
| Message        | Yes | The message to send. This can be a plain text message, or a HTML message. If it is a HTML message, remember to set the `Message content type` property to `HTML`. |
| Message content type | No | Specifies whether the message content is Text or HTML. |
| Attachments    | No | The attachments to include in the message. Note that in Teams, an "attachment" is a reference to an _existing_ document in OneDrive / SharePoint, so you cannot include a _file_ as an _attachment_ directly. Instead, if you want to include a file (from a stream or byte array), you must used `Hosted content` instead. |

<br/>

## Returns
This action returns a [chat message](./api-reference/chat-message.md).

<br/>

[!INCLUDE [](./__send-message-attachments.md)]

<br/>
<br/>

[!INCLUDE [](./__send-message-attachment-example.md)]

<br/>

##### References
[Microsoft Graph REST API Reference](https://learn.microsoft.com/en-us/graph/api/chatmessage-post?view=graph-rest-1.0&tabs=csharp#example-4-send-a-message-with-file-attachment-in-it)