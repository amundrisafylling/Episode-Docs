# Insert entity

Inserts a row to a SQL Server table using data from an entity.  

Logically, this action performs the following:

```sql
INSERT INTO tableName (Property1, Property2) VALUES(entity.Property1, enity.Property2)
```

> [!NOTE]
> Each property name in the entity must exist in the target table. If the database collation is case sensitive, the properties and columns must match by case in addition to name.


![Insert Entity](https://profitbasedocs.blob.core.windows.net/flowimages/insert-entity.png)

## Properties

| Name         | Type            | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title              | No | A descriptive title for the action.               |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| Entity | Raquired  | Select the entity (object) to insert.   |
| Table name | Yes | Select where to insert the data.  |
| Result variable name | No | Name of the variable returning number of rows affected.   |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

[!INCLUDE [](__videos.md)]
