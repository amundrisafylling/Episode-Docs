# Delete Table Entity

Delete an entity from an Azure Table.

![Delete Table Entity](../../../../images/flow/delete-table-entity.png)



**Example** ![Example](../../../../images/strz.jpg)  
This flow [iterates](foreach-table-entity.md) through each employee in an Azure Table, checks if they’ve been inactive for over 12 months based on `lastLoginDate`, and deletes them. It processes each employee one by one, then ends with a 'Done' step once all are evaluated.

</br>


## Properties

| Name                   | Required | Description                |
|------------------------|------------|---------------------------------|
| Title              | No | A user-defined title for the action.                 |
| Connection         | Yes | Specify the [connection](connecting-to-azure-table-storage.md) to the Azure Table Storage account.        |
| Table name         | Yes | The name of the table to insert into.                  |
| PartitionKey  | Yes | Select or enter the value of `PartitionKey`.  |
| RowKey    | Yes | Value of the `RowKey`.                                     |

