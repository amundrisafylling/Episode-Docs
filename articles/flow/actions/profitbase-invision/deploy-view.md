# Deploy View

Recreates a View based on definition from Hypergene InVision.

![img](../../../../images/flow/deploy-view.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow redeploys views defined in an InVision solution.  
It is triggered via [HTTP](../../triggers/http-trigger.md), [retrieves](../sql-server/get-datareader.md) all views for the specified solution, [iterates](../built-in/foreach.md) through them, and recreates each view in the target environment based on its current InVision definition.

## Properties

| Name | Type | Description |
|-----|------|-------------|
| Title | Optional | The name of the action as shown in the flow. |
| Connection | Required | A valid [InVision Connection](invision-connection.md) used to deploy the view. |
| View | Required | The ID of the view definition in InVision to be deployed. |
| Result variable name | Optional | Name of the variable that stores the deployment result, allowing it to be used by subsequent actions. |
| Description | Optional | Additional notes about the action or its configuration. |

## Returns

Returns the result of the view deployment.  
**If Result variable name** is specified, the result is stored in the given variable.
