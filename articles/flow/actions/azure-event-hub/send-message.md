# Send message

Sends a message to an [Azure Event Hub](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features).

![img](/images/flow/aeh-send-message.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow example shows a process that retrieves invoices, iterates through each invoice, and sends it as a message to an Azure Event Hub.  
Actions used in the flow are: [Function](../built-in/function.md), [Foreach](../built-in/foreach.md), and [Send message to Event Hub]().

## Properties

| Name             | Required |Description                                             |
|------------------|-----------|--------------------------------------------------------|
| Title			   |  Optional | A descriptive label for the action.					|
| Connection       | Required  | Azure Event Hub connection used to authenticate and connect to the service. |
| Content		   | Required  | Specifies the variable containing the data to be sent. |
| Partition		   | Optional  | Specifies the ID of the partition from which the event are read. |