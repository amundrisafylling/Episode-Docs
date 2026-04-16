# Try-Catch

Handles [exceptions](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/) within a section of the Flow.

Actions may crash due to errors that the system cannot recover from (for example network errors, out of memory or disk, invalid configurations, etc). When this happens, an exception is thrown and the Flow will terminate.

Use the Try-Catch action when you want to define how exceptions should be handled within a Flow.  
For example, you might want to send an email if a critical error occurs, and then either allow the Flow to continue, or [rethrow the exception](rethrow-exception.md) to terminate the Flow after the email has been sent.

A Try-Catch action creates a scope. You put the business logic that you want to perform in the Try block, and the error handling in the Catch block.

![img](../../../../images/flow/try-catch.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow demonstrates how Try / Catch is used to handle runtime errors in a controlled way. The logic inside the Try block is executed first, and if any action fails, execution is redirected to the Catch block instead of stopping the entire flow. This allows the flow to handle errors gracefully—for example by logging the error, setting fallback values, or executing alternative logic—while keeping the main process robust and predictable.
</br>

## Properties

| Property                   | Required | Description |
|----------------------------|-----------|-------------|
| Title                  | No | A descriptive name for the **Try / Catch** block. |
| Exception variable name Optional  | Name of the variable that will store information about the exception when an error occurs in the **Try** block. |
| Disabled               | No | If enabled, the **Try / Catch** block will be skipped during flow execution. |
| Description            | No | Optional free-text description explaining the purpose of this **Try / Catch** block. |
