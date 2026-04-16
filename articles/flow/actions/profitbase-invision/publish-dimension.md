# Publish Dimension

Publishes a Dimension in an InVision Solution.

![img](../../../../images/flow/publish-dim.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow loads data into a Dimension and then publishes it. It begins with loading data from a table in Snowflake - [Get DataReader](../snowflake/get-datareader.md). That reader is passed to [Import data to Dimension](import-data-to-dimension.md), where the records are written into the specified Dimension. After a successful import, the flow calls **Publish Dimension** to apply the changes so the updated Dimension becomes available in the solution.


<br/>

## Properties 

| Name                 | Required | Description                                      |
|----------------------|----------|--------------------------------------------------|
| Title                |          |   A descriptive title for the action.      |
| Connection           | Yes | [InVision Connection](invision-connection.md).                             |
| Dimension            | Yes | Select or enter the ID of the Dimension you want to publish.         |
| Result variable name | No | Name of the result variable containing the result (e.g., `isSuccess`). |
| Description          | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

Boolean value (true or false).