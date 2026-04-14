# Create Visma.Net Connection

This action creates a connection for Visma.Net, and is intended for dynamically connecting to different subscriptions based on parameters or conditions during the execution of a Flow.   

If you store the credentials for the Visma.Net outside Flow (for example in your own Azure SQL or PostgreSQL database), use this action to _dynamically_ create a connection. The connection returned from the action must then be used as the input to the `Dynamic connection` property of a Visma.Net REST API action.


## Properties


| Name            | Required | Description                                                                 |
|-----------------|-----------|-----------------------------------------------------------------------------|
| Tenant ID       | Required  | The Tenant Id associated with the subscription.        |
| Client ID       | Required  | A unique identifier for the client application.        |
| Client secret   | Required  | A confidential key used to authenticate the client.    |
| Company ID      | Optional  | The customer Id assosiated with the connection.        |