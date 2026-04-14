# Create Visma Business NXT connection

This action creates a connection for Visma Business NXT, and is intended for dynamically connecting to different subscriptions based on parameters or conditions during the execution of a Flow.   

If you store the credentials for the Visma Business NXT outside Flow (for example in your own Azure SQL or PostgreSQL database), use this action to _dynamically_ create a connection. The connection returned from the action must then be used as the input to the `Dynamic connection` property of a Visma Business NXT GraphQL action.


## Properties


| Name            | Required | Description                                                |
|-----------------|-----------|------------------------------------------------------------|
| Client ID       | Required  | A unique identifier for the client application.        |
| Client secret   | Required  | A confidential key used to authenticate the client.    |
| Customer ID     | Optional  | Id of the customer. |
