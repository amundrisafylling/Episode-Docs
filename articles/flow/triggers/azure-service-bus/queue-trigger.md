# Azure Service Bus Queue trigger

Configures the flow to automatically run by checking periodically for new messages in an [Azure Service Bus Queue](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#queues).

![topic](/images/flow/queue-trigger.png)


**Example**![Example](/images/strz.jpg)   
This Flow listens for new customer messages on an Azure Service Bus **queue**.  
For each message, it validates that required customer fields are present and, if valid, inserts the record into the database.
<br/>

## Properties

| Name           | Required | Description                                      |
|----------------|----------|--------------------------------------------------|
| Title          |  Optional | A descriptive label for the trigger configuration.|
| Connection     | Required | [Azure Service Bus connection](../../actions/azure-service-bus/connecting-to-azure-service-bus.md). |
| Polling frequency| Required | Interval or schedule for how often the trigger checks for new messages in the topic. |
| Output data type | Optional | Specifies the format of the trigger's output data (e.g., JSON, XML). |
| Output variable name | Required | Name of the variable where the trigger's output data will be stored. |
| Disabled       | Optional | Boolean value indicating whether the trigger is disabled (true/false). |
| Description    | Optional | Additional notes or comments about the trigger's purpose or configuration.  |

<br/>

## Returns

This trigger returns a single variable with the specified name and Output data type. 

![Schedule Trigger Output Type](../../../../images/flow/schedule-trigger-output-type.png)
<br/>
