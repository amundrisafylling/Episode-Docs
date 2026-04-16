# Get entity

Gets a single entity based on a query against a PostgreSQL database.

<br/>

![img](../../../../images/flow/get-entity-postgres.png)

<br/>

## Properties  

| Name                        | Required       | Description                         |
|-----------------------------|-----------------|-------------|
| Title                       | No | The title or name of the command. |
| Connection                  | Yes | The PostgreSQL database [connection](postgresql-connection.md). |
| SQL expression and parameters | Yes | The SQL command to execute along with any parameters.  |
| Entity name                 | No | The name of the entity being retrieved.  |
| Entity properties           | No | The properties or fields of the entity to configure.   |
| Result variable name        | No | The name of the variable that stores the result of the query.    |
| Command timeout (seconds)   | No | The time limit for command execution before it times out. Default is 120 seconds.           |
| Description                 | No | Additional notes or comments about the action or configuration.  |

<br/>

## Returns

Returns an object with the properties specified by the `Entity properties` configuration.

An `entity` is a .NET object with one or more properties, for example

```csharp
public record Customer(string VATNumber, string Name, string Address);
```
