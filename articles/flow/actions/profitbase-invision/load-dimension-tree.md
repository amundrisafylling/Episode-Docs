# Load Dimension tree

Loads an entire dimension to memory as a parent-child [DimensionTree](./load-dimension-tree/dimension-tree.md). Use it for quick access to dimension data, searching and traversal.

## Properties

| Name                  | Required | Description |
|-----------------------|----------|-------------|
| Title                 | Optional | A descriptive label for the action displayed in the Flow editor. |
| Connection            | Required | Defines the [InVision connection](invision-connection.md) used to access the Profitbase InVision environment. The connection contains the credentials required to load the dimension structure. |
| Object variable name  | Required | The variable name used to store the loaded dimension tree. The dimension data can be referenced later in the flow using this variable. |
| Dimension             | Required | The dimension to load from the InVision model. The action retrieves the full hierarchical structure of the selected dimension. |
| Dimension properties  | Optional | Specifies additional dimension properties to include in the result. This allows the flow to access extra metadata for each dimension member. |
| Disabled              | Optional | If enabled, the action will be skipped during flow execution. This allows the step to remain in the flow without being executed. |
| Description           | Optional | Additional information describing the purpose of the action. This is only used for documentation within the Flow. |

## Example

The example below describes how to use a [DimensionTree](./load-dimension-tree/dimension-tree.md) in a [Function](../built-in/function.md) to find a [dimension member](load-dimension-tree/dimension-tree-item.md) by id, traversing ancestors and descendants and use dimension properties to perform business logic. 

1) Add a Load Dimension tree action to a Flow
2) In the property panel, select a `Connection`
3) In the property panel, select a `Dimension`
4) Optionally, in the property panel, choose one or more `Properties`. Note that not all dimensions have properties.
5) Add a [Function](../built-in/function.md) action to the Flow and pass in the dimension as a argument. You can then use it in your code.

```csharp
public void Foo(Profitbase.Flow.Extensions.Invision.Dimensions.DimensionTree<MyWorkspace.DimProps_GUID> departmentDimension)
{
    var regionEast = departmentDimension.FindMember("Region-East");
    // If Region-East does not exist, FindMember() returns null
    if(regionEast != null)
    {        
        foreach(var descendants in regionEast.TraverseDown())
        {
            // Visit all descendants of region east
        }

        foreach(var ancestor in regionEast.TraverseUp())
        {
            // Visit all ancestors of region east
        }
    }

    var department2 = departmentDimension.FindMemberOrDefault("E-002");
    // If E-002 does not exist, FindMemberOrDefault() returns an empty default member
    if(department2.Id != null)
    {
        // E-002 was found
    }
    else
    {
        // E-002 was NOT found
    }

    if(departmentDimension.TryFindMember("E-003", out var department3))
    {
        // E-003 was found. Check the Manager Email property of the dimension member and perform an action.
        if(!string.IsNullOrWhitespace(department3.Properties.ManagerEmail))       
        {
            // Print manager email to the debug window
            this.Context.Diagnostics.Log.Debug($"Manager email for department {department3.Id} is {department3.Properties.ManagerEmail}.");
        }        
    }
}
```