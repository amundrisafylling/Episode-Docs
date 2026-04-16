# Get entity

Gets a single entity based on a query against a SQL Server database.

![Get Entity](https://profitbasedocs.blob.core.windows.net/flowimages/get-entity.png)

<br/>

## Properties

| Name         | Type            | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title              | No | A descriptive title for the action.               |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| SQL expression and parameters   | Yes | The command to execute along with any parameters.   |
| Entity name | No | Name of the entity data type returned. |
| Entity properties | Yes | Name of the properties and its data types.  |
| Result variable name | Yes | Name of resulting variable containing the entity.  |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No |  Additional notes or comments about the action or configuration. |

<br/>

## Returns

Returns an object with the properties specified by the `Entity properties` configuration.

An `entity` is a .NET object with one or more properties, for example

```csharp
public record Customer(string VATNumber, string Name, string Address);
```
<br/>

[!INCLUDE [](__videos.md)]
