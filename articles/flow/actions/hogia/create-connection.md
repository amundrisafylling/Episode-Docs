# Create Hogia connection


This action creates a connection for Hogia and is intended for dynamically connecting to different organizations based on parameters or conditions during the execution of a Flow.   

A *Dynamic Connection* overrides the *Connection* during Flow execution.

If you store the credentials for the Hogia outside Flow (for example in your own Azure SQL or PostgreSQL database), use this action to _dynamically_ create a connection. The connection returned from the action must then be used as the input to the `Dynamic connection` property of a Hogia request action.

<br/>

![Hogia Create Connection](/images/flow/hogia-create-connection.png)

<br/>

##  Properties

| Name              | Type        | Description                                            |
|-------------------|-------------|--------------------------------------------------------|
| Client ID         | Yes | A unique identifier for the client application.        |
| Client Secret     | Yes | A confidential key used to authenticate the client.    |
| Organization GUID | Yes | The organization identifier used by Hogia for the target company environment. |
