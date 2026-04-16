# For each (loop)

Iterates over a list of items.


<br/>

![img](../../../../images/flow/foreachExample.png)

**Example** ![img](../../../../images/strz.jpg)  
This Flow [retrieves](function.md) a list of employees, iterates over each employee using the **For Each** action, and [inserts or updates](../sql-server/insert-or-update-row.md) their data in a database table.
</br>

## Properties

| Name            | Required | Description                                                   |
|-----------------|-----------|---------------------------------------------------------------|
| Title           | No | The title or name of the action.                              |
| Items           | Yes | The collection of items to iterate over.                      |
| Loop Variable   | No | The variable that holds the current item in each iteration.   |
| Description     | No | Additional notes or comments about the action or configuration. |
