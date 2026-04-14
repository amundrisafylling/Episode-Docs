# Await for each

Iterates over an asynchronous stream of items.

Await foreach processes items as they become available, and if items are produced asynchronously with independent completion times, the observed order can appear random. 

The items source is expected to be of type [IAsyncEnumerable<T>](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.iasyncenumerable-1)

[Read more about async enumerables here](https://learn.microsoft.com/en-us/archive/msdn-magazine/2019/november/csharp-iterating-with-async-enumerables-in-csharp-8)




## Properties

| Name           | Required | Description                                                   |
|---------------|-----------|---------------------------------------------------------------|
| Title         | Optional  | The title or name of the action.                              |
| Items         | Required  | The asynchronous collection of items to iterate over.        |
| Loop Variable | Optional  | The variable that holds the current item in each iteration.  |
| Description   | Optional  | Additional notes or comments about the action or configuration. |