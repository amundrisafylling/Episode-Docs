# Yield break

`Yield break` signals the end of an iteration in an [iterator](https://learn.microsoft.com/en-us/dotnet/csharp/iterators).  

In Flow, you can use this action when creating a Flow that (asynchronoulsy) _streams_ chunks of data back to the client _while_  executing, instead of returning all the data at the end. The `Yield break` action can be used to stop the streaming and end the execution of the Flow.

For example, suppose you need to create a Flow that reads rows one by one from a database and performs a time-consuming operation for each row. For a better user experience, you want to return the result of each operation to the client as soon as it's ready, instead of making the user wait until all operations are complete. If you need to stop processing — such as when reaching a row limit or another threshold — you can use the `Yield break` action to stop streaming and terminate the Flow.

![img](/images/flow/yield-break.png)

**Example** ![img](../../../../images/strz.jpg)  
The example above illustrates a Flow that reads rows (customer information) from a SQL Server database and performs a heavy computation to calculate an amount. The Flow reads one row at a time, performs the calculation, and then uses the [Yield return](yield-return.md) action to return the amount to the client before proceeding to the next row. However, as a business rule, we only want to process maximum 10 rows. If we have reached the 10 rows limit (counting starts at 0), we use the `Yield break` action to stop streaming and terminate the Flow.

## Properties

| Name                      | Required | Description                                                                       |
| ------------------------- | --------- | --------------------------------------------------------------------------------- |
| Title                     | No | The title or name of the action.                                                  |
| Description               | No | Additional notes or comments about the action or configuration.                   |