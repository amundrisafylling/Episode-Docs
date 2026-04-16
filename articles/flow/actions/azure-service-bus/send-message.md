# Send message

Sends a message to an [Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) [Queue](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#queues) or [Topic](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions).

![img](https://profitbasedocs.blob.core.windows.net/flowimages/sendmsg.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow runs daily, reads rows of overdue customer payments from a table, sends each as a JSON message to an Azure Service Bus queue, and logs each sent message.




## Properties

| Name           | Required | Description                                      |
|----------------|----------|--------------------------------------------------|
| Title          | No | A descriptive label for the action.			   |
| Send to        | Yes | Specified where the message is sent.			   |
| Connection     | Yes | Azure Service Bus connection used to authenticate and connect to the service. |
| Content        | Yes | Specifies the variable containing the data to be sent. |
| Content type   | Yes | Select the contents MIME type.                   |
| Subject        | No | Specifies the message subject.				   |
| Message Id     | No | Specifies the message Id.                        |
| Correlation Id | No | Specifies the message correlation Id.            |
| Reply to       | No | Specifies the Reply to.                          |
| Description    | No | Additional notes or comments about the action or configuration. |