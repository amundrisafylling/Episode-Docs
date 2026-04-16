# Connecting to Microsoft Foundry

**Azure AI connection** enables Flow actions to interact with [Microsoft Foundry](https://ai.azure.com/) resources, such as Large Language Models (LLMs).

## Properties


| Name       | Description                                                     |
|------------|-----------------------------------------------------------------|
| Name       | Name of the connection.                                         |
| API Key    | The API key used for authentication.                            |
| Endpoint   | The endpoint URL for the Microsoft Foundry resource.             |

<br/>

## Creating a new connection

To add an Azure AI action, select an **existing Azure AI connection** or create a new one.  
We'll walk through creating a new connection to a model deployed in Microsoft Foundry.

1. In the Flowchart, click to select the action that you want to create a connection for.
2. Select **Connection** in the property panel.
2. Toggle **Create New Connection** on.
3. Fill in the required fields:
   - **Name**: Enter a unique name for this connection. Choose a name that makes it easy to understand what the connection is for.
   - **API Key**: Provide the API key associated with the deployed model.
   - **Endpoint**: Enter the full URL of the deployed model (it should look something like this: `https://MY-PROJECT.openai.azure.com/openai/v1`).

To find the API Key and Endpoint, go the the Microsoft Foundry portal and do the following:
1) In the application top bar, to to `Build` (upper right corner)
1) Select `Models` from the left menu
2) Select the deployed model
3) In the `Playground` tab, switch from `Chat` to `Code` view, and select `OpenAI SDK` from the SDKs dropdown.
4) Copy the Endpoint URL
5) In the `Details` tab, copy the `Key` (which is the API key)


![AI Foundry Model Connection](/images/flow/ai-foundry-model-connection.png)

<br/>

![AI Foundry Model Apikey](/images/flow/ai-foundry-model-apikey.png)

<br/>

# Flow 1.11 (December 2025) and earlier

The following documentation applies to Flow 1.11 (December 2025) and earlier

## Creating a New Connection

To add an Azure AI action, select an **existing Azure AI connection** or create a new one.  

> [!IMPORTANT]
> Whether you want to use an `OpenAI` or `Foundry` model, you need to create the connections differently. See details below.

<br/>

## Create a connection to an Azure Foundry model

If you want to use a `Foundry` model, you can **reuse** the connection against **multiple** model deployments. 

1. In the Flowchart, click to select the action that you want to create a connection for.
2. Select **Connection** in the property panel.
2. Toggle **Create New Connection** on.
3. Fill in the required fields:
   - **Name**: Enter a unique name for this connection. Choose a name that makes it easy to understand what the connection is for.
   - **API Key**: Provide the API key associated with the deployed model.
   - **Endpoint**: Enter the full URL of the deployed model (e.g., `https://xx-m8on1111-eastus2.services.ai.azure.com/models`).

To find the API Key and Endpoint, go the the Microsoft Foundry portal and do the following:
1) Click `Models + Endpoints` 
2) Select the deployed model
3) In the SDK dropdown, select `Azure AI Inference SDK`.
4) Copy the Endpoint URL
5) Copy the (API) Key

![Azure AI Foundry Connection Standard](/images/flow/azure-ai-foundry-connection-standard.png)

<br/>

## Create a connection to an Azure OpenAI model

If you want to use an `OpenAI` model, you must create one connection **PR** model deployment, because the deployment name is part of the Endpoint.  

1. In the Flowchart, click to select the action that you want to create a connection for.
2. Select **Connection** in the property panel.
2. Toggle **Create New Connection** on.
3. Fill in the required fields:
   - **Name**: Enter a unique name for this connection. Choose a name that makes it easy to understand what the connection is for.
   - **API Key**: Provide the API key associated with the deployed model.
   - **Endpoint**: Enter the full URL of the deployed model (e.g., `https://xx-m8on1111-eastus2.cognitiveservices.azure.com/openai/deployments/gpt-4o-mini`). Note that the Endpoint contains the deployment name (gpt-4o-mini).

To find the API Key and Endpoint, go the the Microsoft Foundry portal and do the following:
1) Click `Models + Endpoints` 
2) Select the deployed model
3) In the SDK dropdown, select `Azure AI Inference SDK`.
4) Copy the Endpoint URL. Note that the deployment name is in the URL.
5) Copy the (API) Key

![Azure AI Foundry Connection Openai Model](/images/flow/azure-ai-foundry-connection-openai-model.png)

<br/>

## Dynamic Connections

A [Dynamic Connection](create-connection.md) can override a static connection during Flow execution.  
This is useful for scenarios where credentials or targets are determined at runtime (e.g., multi-tenant environments).

<br/>