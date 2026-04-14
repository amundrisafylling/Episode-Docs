# Send message

Sends a message to an [Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview) [Queue](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#queues) or [Topic](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions).

![img](https://profitbasedocs.blob.core.windows.net/flowimages/sendmsg.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow runs daily, reads rows of overdue customer payments from a table, sends each as a JSON message to an Azure Service Bus queue, and logs each sent message.




## Properties

| Name           | Required | Description                                      |
|----------------|----------|--------------------------------------------------|
| Title          | Optional | A descriptive label for the action.			   |
| Send to        | Required | Specified where the message is sent.			   |
| Connection     | Required | Azure Service Bus connection used to authenticate and connect to the service. |
| Content        | Required | Specifies the variable containing the data to be sent. |
| Content type   | Required | Select the contents MIME type.                   |
| Subject        | Optional | Specifies the message subject.				   |
| Message Id     | Optional | Specifies the message Id.                        |
| Correlation Id | Optional | Specifies the message correlation Id.            |
| Reply to       | Optional | Specifies the Reply to.                          |
| Description    | Optional | Additional notes or comments about the action or configuration. |