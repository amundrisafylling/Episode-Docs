# Rethrow exception

Re-throws the exception that is currently being handled by a catch block.



![img](../../../../images/flow/rethrow-exeption.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow executes a budget [calculation](function.md) inside a [Try/Catch](try-catch.md) block to control how errors are handled. On the **Try** path, it runs *Calculate budget*. If the calculation completes successfully, execution continues through the **Continue** output to the rest of the flow. If an exception occurs, execution moves to **Catch**, where the error is written using [Log](log.md). The flow then calls **Rethrow Exception**, which propagates the original error back to the caller instead of handling it locally. Successful executions continue downstream, while failures are explicitly returned to the calling flow.


## Properties

| Name        | Required | Description                                                                 |
|-------------|----------|-----------------------------------------------------------------------------|
| Title       | No | A custom name for the action, used to make the flow easier to read.        |
| Disabled    | No | When enabled, the action is skipped during flow execution.                |
| Description | No | Additional notes or comments about the action or configuration.         |
