# Log

This is a utility action for writing messages to the log.  



![img](../../../../images/flow/log.png)

**Example**  
![img](../../../../images/strz.jpg)  
This flow automates the process of converting a DOCX document to a PDF, uploading the result, and logging the outcome.

</br>

## Properties

| Name          | Required | Description                                                                 |
|---------------|----------|-----------------------------------------------------------------------------|
| Title         | Optional | The title or name of the action.                                           |
| Data to log   | Required | The data to log, which can be a hard coded value or an object (such as a variable).       |
| Log type      | Optional | The log type. `Information`, `Warning`, and `Error` are displayed in the **Execution log**. `Debug` is displayed in the **Debug log**. <br/><br/> Messages in the **Debug log** are meant for development and will only be displayed in the Designer while the session is open. If you close the Designer, or open a different Flow, the Debug messages are gone.                  |
| Description   | Optional | Additional notes or comments about the action or configuration.            |


> [!NOTE]
> `Information`, `Warning`, and `Error` messages are displayed in the **Execution log**, while the `Debug` messages are displayed in the **Debug log**.  

![img](/images/flow/log-action.png)
