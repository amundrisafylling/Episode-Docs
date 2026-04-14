# Add Table Entity

Add an entity to an Azure Table.

![img](../../../../images/flow/add-table-entity.png)


## Properties

| Name                   | Required | Description          |
|------------------------|------------|-------------------|
| Title              | Optional   | A user-defined title for the action.            |
| Connection         | Required   | Specify the [connection](connecting-to-azure-table-storage.md) to the Azure Table Storage account.            |
| Table name         | Required   | The name of the table to insert into.                    |
| Entity             | Required   | The entity data to be inserted into the table.            |
| PartitionKey type  | Optional   | Specify how the `PartitionKey` is determined (e.g., use an entity property).            |
| PartitionKey property | Optional | Define the property name used for the `PartitionKey` (if applicable).          |
| PartitionKey value | Optional | Define the value of the `PartitionKey` (if applicable).        |
| RowKey property    | Optional   | Define the property name used for the `RowKey` (if applicable).   |
| Overwrite existing | Optional   | A boolean option to specify whether to overwrite an existing entity with the same keys (`true`/`false`). |


### PartitionKey type 

![img](../../../../images/flow/update-table-entity2.png)

1. **Use an entity property** – This option allows the PartitionKey to be based on a property from the entity. “PartitionKey property” will be applicable if the “PartitionKey type” is set to “Use a custom entity property”.

![img](../../../../images/flow/partitionKeyType2.png)

2. **Set a custom value** – This option lets you define a custom value for the PartitionKey. “PartitionKey value” will be applicable if the “PartitionKey type” is set to “Use a custom value”. 

![img](../../../../images/flow/partitionKeyType1.png)