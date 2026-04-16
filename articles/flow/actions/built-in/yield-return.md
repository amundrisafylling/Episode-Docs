# Yield return

`Yield return` provides the next value of an iteration in an [iterator](https://learn.microsoft.com/en-us/dotnet/csharp/iterators).  

In Flow, you can use this action when creating a Flow that (asynchronoulsy) _streams_ chunks of data back to the client _while_  executing, instead of returning all the data at the end. Use the `Yield return` action to return one value at a time back to the client while the Flow is executing. 

For example, suppose you need to create a Flow that reads rows one by one from a database and performs a time-consuming operation for each row. For a better user experience, you want to return the result of each operation to the client as soon as it's ready, instead of making the user wait until all operations are complete. The `Yield return` action returns the result of an operation back to the client as soon as it is ready, and then continues to the next row. 

![img](/images/flow/yield-return.png)

**Example** ![img](../../../../images/strz.jpg)  
The example above illustrates a Flow that reads rows (customer information) from a SQL Server database and performs a heavy computation to calculate an amount. The Flow reads one row at a time, performs the calculation, and then uses the `Yield return` action to return the amount to the client before proceeding to the next row. With `Yield return`, the client continually receives amount values as soon as they are computed, rather than waiting until the end.

## Properties

| Name                      | Required | Description                                                                       |
| ------------------------- | --------- | --------------------------------------------------------------------------------- |
| Title                     | No | The title or name of the action.                                                  |
| Value                     | Yes | The value to return from the Flow.                                                |
| Description               | No | Additional notes or comments about the action or configuration.                   |