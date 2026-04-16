# For each Entity

Iterates over a list of all entities in an Azure table. 

![img](../../../../images/flow/foreach-table-entity.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow iterates through each employee in an Azure Table, checks if they’ve been inactive for over 30 days based on `lastLoginDate`, and [updates](update-table-entity.md) their status to "inactive" if needed. It processes each employee one by one, then ends with a 'Done' step once all are evaluated.

</br>

## Properties

| Name                   | Required | Description                                                                                          |
|------------------------|-----------|-----------------------------------------------------|
| Title                  | No | A user-defined title for the action.     |
| Connection             | Yes | Specify the [connection](connecting-to-azure-table-storage.md) to the Azure Table Storage account. |
| Table name            | Yes | The name of the table containing data.   |
| Entity properties | No | Define the properties of the table entities to use in the iteration.   |
| Filter   | No | Configure filters to refine the list of table entities to process.   |
| Entity name            | No | The name of the table entity to iterate over.      |

<br/>

## Returns

Returns a list of the table entities.

### Filter

**Simple** filtering, accepts input or variable input:

![img](../../../../images/flow/foreach-table-entity5.png)

**Advanced** filtering accepts input or variable input:

![img](../../../../images/flow/foreach-table-entity6.png)

![img](../../../../images/flow/foreach-table-entity7.png)