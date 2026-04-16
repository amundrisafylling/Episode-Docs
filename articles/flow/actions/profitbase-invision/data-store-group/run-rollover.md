# Run rollover of Data Store Group

This action calls the InVision API to run a rollover of a Data Store Group and all descendant [Data Stores](../../../../invision/docs/datastores.md) and [Tables](../../../../invision/docs/tables.md).  
A rollover can be applied to Data Stores and Tables having the Time Frame and Rollover features enabled. It is typically used to start a new cycle of a rolling forecast, but can be used in any cyclic process such as budgeting as well.  In essence, a rollover automatically _shifts_ data forward by a number of periods, for example a month, quarter or year. A rollover in InVision may also include other types of business logic, such as inflation adjustments.

![img](/images/flow/invision-store-group-run-rollover.png)


**Example** ![img](../../../../../images/strz.jpg)  
This flow starts a new forecast cycle by rolling forward an existing Data Store Group.

It is triggered on a fixed schedule, copies the current forecast version to create a new working version, and then runs a rollover on the selected Data Store Group. The rollover shifts all time-based data forward by the specified number of periods, applying the rollover logic defined in InVision for the group and its descendants.

The result is a new forecast period that is pre-populated with data from the previous cycle, ready for planning or budgeting activities.

<br/>


## Properties
| Name             | Required | Description               |
|------------------|--------------|---------------------------|
| Connection       | Yes | A valid [InVision Connection](../invision-connection.md) used to execute the SQL script.  |
| Data Store Group | Yes | The ID of the Data Store Group in InVision that will be rolled forward. |
| Rollover periods | No | The number of periods to roll forward. If not specified, defaults to 1. |
| Rollover time frame independent descendants | No | Specifies whether to roll forward descendant Data Stores and Tables that does not inherit the Time Frame configuration of the Data Store Group. Defaults to `true`. |

<br/>

## Returns 
Returns `true` if the rollover succeeds, otherwise `false`. 