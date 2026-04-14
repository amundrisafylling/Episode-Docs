# RabbitMQ message trigger

Configures the flow to automatically run by checking periodically for new messages from an RabbitMQ queue (including topic subscription queues).

<br/>

<br/>
<!-- 
**Example**![img](/images/strz.jpg)    -->


## Properties

| Name           | Required | Description                                      |
|----------------|----------|--------------------------------------------------|
| Title          | Optional | A descriptive label for the trigger configuration. |
| Connection     | Required | Select the RabbitMQ connection. |
| Queue name     | Required | Select the RabbitMQ Queue name. | 
| Polling frequency| Required | Interval or schedule for how often the trigger checks for new messages in the topic. |
| Output data type | Optional | Specifies the format of the trigger's output data (e.g., JSON, XML). |
| Output variable name | Required | Name of the variable where the trigger's output data will be stored. |
| Disabled       | Optional | Boolean value indicating whether the trigger is disabled (true/false). |
| Description    | Optional | Additional notes or comments about the trigger's purpose or configuration.  |

<br/>

## Returns

This trigger returns a single variable with the specified name and Output data type. 
