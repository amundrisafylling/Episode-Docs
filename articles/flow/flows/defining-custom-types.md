# Defining Custom Data Types

Actions and Triggers in Hypergene Flow work together by exchanging data using data contracts. In computer systems, data contracts, commonly known as data types, define the operations that can be performed on data, ensuring efficient and safe memory usage, contribute to clearer, more maintainable, and less error-prone code. An important benefit of using data types is that it enables creating tools that assist users during development, testing and debugging.  

Hypergene Flow is built on top of [.NET](https://dotnet.microsoft.com/en-us/), which means that all native .NET data types are available to use. However, most business systems requires custom data types to express business specific domains.

To define custom data types in Profibase Flow, click on the Flowchart drawing canvas (the "background") to bring up the Property panel and then click the `Custom data types` button.  
This will open a popup where you can define one or more data types that you can use in the Flow. Note that the data types are not available to other Flows.

![Custom Data Types](/images/flow/custom-data-types.png)

## Type builder

Use the Type builder when you want to create simple types where all properties are primitive data types, such as string, int, double, decimal, DateTime etc.

## Advanced

Use the Advanced mode when you want to create complex business object, for example to represent an Order containing a list of order lines.  
Example:
```csharp
public class Order(string orderId)
{
    public List<OrderLine> OrderLines {get; set;}
    public string OrderId {get; set;} = orderId;
}

public record OrderLine(string ProductId, int Quantity);
```