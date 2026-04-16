# Get Xledger Data

Gets data from Xledger using GraphQL.


![Get Xledger Data](../../../../images/flow/get-xledger-data.png)

## Properties

| Name                  | Required | Description                                                              |
|-----------------------|-----------|--------------------------------------------------------------------------|
| Title                | No | The title or name of the command.                                       |
| Connection           | Yes | [The Xledger connection](./connecting-to-xledger.md).                   |
| Use dynamic connection | No | Allows selection of the connection to be used. It can be either the connection from the **Connection** property or a previously defined [dynamic connection](create-connection.md). |
| Configuration        | Yes | Settings or parameters necessary for data retrieval.                     |
| Description          | No | Additional notes or comments about the action or configuration.         |

## Configuration

![Xleger Config](../../../../images/flow/xleger-config.png)