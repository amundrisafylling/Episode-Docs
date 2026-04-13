# Save DeltaSet

Saves all changes in a DeltaSet to a Snowflake table.

A typical use case for this action is to save the changes made by users in the [Writeback Table](../../../PowerBI/writeback-table/overview.md) for Power BI. This action will save all changes made by the user in Power BI by either inserting, updating, or deleting rows in the Snowflake target table.

![img](/images/flow/snowflake-save-deltaset.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow [receives](../../triggers/power-bi/writeback-table-trigger.md) a DeltaSet of changes from a Power BI writeback table and saves those changes to a Snowflake table by applying inserts, updates, and deletes.

## Properties
| Name         | Type      | Description                                 |
|--------------|-----------|---------------------------------------------|
| Title        | Optional  | A descriptive title of the action.          |
| Connection   | Required  | The Snowflake [connection](./connecting-to-snowflake.md). |
| DeltaSet     | Required  | The DeltaSet to save to the target table.   |
| Target table | Required  | The name of the table where data will be stored. If this differs from the table the data is read from in the Power BI model, ensure the target table has columns with matching names and data types as defined in the column definitions of the Writeback Table visual. |
| [Save data options](#save-data-options) | Optional | For advanced scenarios (see below), use this option to override the default behavior for applying DeltaSet changes.  |  
| Command timeout | Optional | The time limit in seconds for command execution before it times out. Default is 120 seconds.|

### Save data options

![img](/images/flow/deltaset-metadata-options.png)

| Property                 | Description                          |
|--------------------------|--------------------------------------|
| Column name              | The name of the column that you want to specify a behavior for.  |
| Use as update or delete key | By enabling this option, Flow will match by this column when updating or deleting rows instead of using the columns defined as keys in the [DeltaCells](../../api-reference/built-in-types/deltaset.md#deltacell).  |
| Allow updating data in this column | You can set this option to `false` to explicitly prevent this column from being updated, even though the DeltaSet contains changes for the column.   |
| Enable identity insert  | Not applicable for Snowflake. |