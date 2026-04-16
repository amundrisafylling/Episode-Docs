# Wait

Waits for a specified time interval before execution continues.

![img](../../../../images/flow/wait.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow uses the Wait action to pause execution for a defined period of time before continuing to the next step. It is typically used to handle timing dependencies, allow external systems to complete processing, or introduce controlled delays between actions to avoid race conditions or throttling issues.

</br>

## Properties

| Property        | Required | Description |
|-----------------|-----------|-------------|
| Title       | No | A descriptive name for the action. |
| Wait duration | Yes | The amount of time the flow execution will pause before continuing. The value can be specified in milliseconds, seconds, or minutes. |
| Disabled    | No | If enabled, the action will be skipped during flow execution. |
| Description | No | Optional free-text description explaining why a delay is required in the flow. |
