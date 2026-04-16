# RabbitMQ message trigger

Configures the flow to automatically run when a new message is received from a **RabbitMQ** queue (including topic subscription queues).

<br/>

![Rabbitmq Trigger](/images/flow/rabbitmq-trigger.png)

 
**Example**![Example](/images/strz.jpg)    

This flow receives a message containing a JSON text with log data from RabbitMQ using this **trigger**. It then [converts the JSON to a datatable](../../actions/json/get-json-datatable.md), and [inserts it into an SQL Server table](../../actions/sql-server/insert-data.md).


## Properties

| Name           | Required | Description                                      |
|----------------|----------|--------------------------------------------------|
| Title          | Optional | A descriptive label for the trigger configuration. |
| Connection     | Required | Select or add an **RabbitMQ connection**. |
| Queue name     | Required | Select the RabbitMQ Queue name. | 
| Output variable name | Required | Name of the variable containing the message body. |
| Disabled       | Optional | Boolean value indicating whether the trigger is disabled (true/false). |
| Description    | Optional | Additional notes or comments about the trigger's purpose or configuration.  |

<br/>

## Returns

This trigger returns a single **string** with the message body from RabbitMQ. 
