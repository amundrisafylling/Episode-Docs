# Azure Event Hub trigger

When a new message arrives in the Azure Event hub, the trigger detects it and starts the flow to process or handle the message as needed. This is useful for automating workflows that depend on incoming messages from [Azure Event hub](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-features).

<br/>

![img](/images/flow/aeh-trigger.png)


**Example**![img](../../../../images/strz.jpg)   
This Flow listens for invoice messages arriving in an Event Hub.  
If the message contains invoice data, it’s added to a database; otherwise the Flow throws a controlled exception.
<br/>

## Properties

| Name           | Required | Description                                      |
|----------------|----------|--------------------------------------------------|
| Title          |  Optional | A descriptive label for the trigger.|
| Event Hub connection     | Required | Azure Event Hub connection used to authenticate and connect to the service. |
| Blob Container connection     | Required |  An [Azure Event Hub connection](../../actions/azure-event-hub/connecting-to-azure-event-hub.md). |
| Polling frequency| Optional | Interval or schedule for how often the trigger checks for new messages in the topic. |
| Checkpoint batch size | Optional | Specifies the number of received event before updating the checkpoint. |
| Consumer group | Optional | Specifies the name of the consumer group used to read the events. |
| Partition		 | Optional | Specifies the ID of the partition from which the event are read. |
| Output data type | Optional | Specifies the format of the trigger's output data (e.g., JSON, XML). |
| Ouput variable name | Optional | Name of the variable where the trigger's output data will be stored. |
| Disabled			| Optional | Boolean value indicating whether the trigger is disabled (true/false). |
| Description    | Optional | Additional notes or comments about the trigger's purpose or configuration. |

<br/>

## Returns

This trigger returns a single variable with the specified name and Output data type. 

![img](../../../../images/flow/schedule-trigger-output-type.png)
<br/>

