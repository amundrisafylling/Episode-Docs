# Get entities

Gets a list of entities from a query against a SQL Server database.

An `entity` is a .NET object with one or more properties, for example

```csharp
public record Customer(string VATNumber, string Name, string Address);
```

This actions returns a list of entities with properties as specified by the `Entity properties` configuration, for example

```csharp
List<Customer> customers;
```

![img](https://profitbasedocs.blob.core.windows.net/flowimages/get-entities.png)

<br/>

## Properties

| Name         | Required | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title           |  Optional | The title or name of the command.      |
| Connection      | Required | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | Optional | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| SQL expression and parameters   | Required      | The command to execute along with any parameters.   |
| Row variable name | Required  | Name of Row variable.  |
| Row data type | Optional  | Name of the created entity type.  |
| Entity name | Optional  | Name of Row entity.  |
| Entity properties | Required  |  Name and data type of the propertis in each entity  |
| Result variable name | Required  | Name of resulting list of entities variable  |
| Result data type | Optional  |  Name of the created entity list type.  |
| Command timeout (sec) | Optional | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | Optional | Additional notes or comments about the action or configuration. |

<br/>

## Returns

A [List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1) of custom .NET objects with properties specified by the `Entity properties` configuration.

<br/>

[!INCLUDE [](__videos.md)]