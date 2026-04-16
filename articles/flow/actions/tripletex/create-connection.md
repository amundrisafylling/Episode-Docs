# Create Tripletex connection

This action creates a connection for Tripletex, and is intended for dynamically connecting to different subscriptions based on parameters or conditions during the execution of a Flow.   

A 'Dynamic Connection' will override the 'Connection' on flow execution.

If you store the credentials for the Tripletex outside Flow (for example in your own Azure SQL or PostgreSQL database), use this action to _dynamically_ create a connection. The connection returned from the action must then be used as the input to the `Dynamic connection` property of a Tripletex request action.


##  Properties

| Name                            | Type        | Description                                            |
|---------------------------------|-------------|--------------------------------------------------------|
| Connection Name                 | Yes | Name of the connection object.                         |
| Consumer token                  | Yes | A token used to authenticate the consumer.             |
| Employee token                  | Yes | A token used to authenticate the employee.             |
| Default company Id              | No | The ID of the default company for the connection.      |
| Use Demo URLs                   | No | Enables testing in a sandbox environment when checked. |
