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
| Title           | No | The title or name of the command.      |
| Connection      | Yes | The [SQL Server Connection](./connection.md).         |
| Dynamic connection | No | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| SQL expression and parameters   | Yes | The command to execute along with any parameters.   |
| Row variable name | Yes | Name of Row variable.  |
| Row data type | No | Name of the created entity type.  |
| Entity name | No | Name of Row entity.  |
| Entity properties | Yes |  Name and data type of the propertis in each entity  |
| Result variable name | Yes | Name of resulting list of entities variable  |
| Result data type | No |  Name of the created entity list type.  |
| Command timeout (sec) | No | The time limit for command execution before it times out. Default is 120 seconds.|
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

A [List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1) of custom .NET objects with properties specified by the `Entity properties` configuration.

<br/>

[!INCLUDE [](__videos.md)]