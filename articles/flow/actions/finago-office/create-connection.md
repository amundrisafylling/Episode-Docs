# Create Finago Office Connection

This action creates a connection for Finago Office (24SevenOffice) and is intended for dynamically connecting to different subscriptions based on parameters or conditions during the execution of a Flow.

<br/>

A 'Dynamic Connection' will override the 'Connection' during flow execution.

If you store the credentials outside Flow (for example, in your own Azure SQL or PostgreSQL database), use this action to ||*dynamically* create a connection. The connection returned from the action can be used as the input to the `Dynamic connection` property of Finago Office request actions.


<br/>

![24sevent Office Create Connection](/images/flow/24SeventOffice-create-connection.png)

<br/>


## Properties

| Name               | Data Type  | Description                                                     |
|--------------------|-----------|------------------------------------------------------------------|
| Client ID         | Yes | A unique identifier for the client application (Application Id). |
| Client Secret     | Yes | A confidential key used to authenticate the client.              |
| Organization ID   | Yes | ID of the organization to request from.                          |

<br/>


## Creating Client ID with Secret

You can follow the instructions as [documented by Finago Office here](https://rest-api.developer.24sevenoffice.com/doc/v1/topic/topic-get-access-token).

