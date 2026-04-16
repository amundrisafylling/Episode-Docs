# Flow December 2025 update
The December 2025 update brings significant enhancements to Flow's AI capabilities and enterprise integrations. Key additions include native support for Anthropic Claude models and Google Vertex AI, A2A protocol support for multi-agent collaboration, and new connectors for Finago Office, Microsoft Teams, and Tavily web search. The release also includes improvements to InVision automation workflows, enhanced data processing capabilities for Parquet and CSV files, and a platform upgrade to .NET 10 for improved performance and reduced memory usage.

<br/>

## Finago Office (24SevenOffice)
We’ve added support for the Finago Office REST API (formerly known as 24SevenOffice), enabling creation of data integrations to Finago Office using Flow.
To start building an integration to Finago Office using Flow, you need a Finago Office subscription with a ClientId, Client secret and Organization ID to set up the connection from Flow. Flow will then automatically handle ceremony such as authentication and resiliency (like API throttling and retries) so you can focus on extracting and transforming the correct data.   
[Read more here](../actions/finago-office/rest-api-request.md)

![Release Notes Dec25 Finago](/images/flow/release_notes_dec25_finago.png)

<br/>

## Anthropic

In addition to using the popular Claude models from Anthropic via Microsoft AI Foundry, we now support using Anthropic models directly with an Anthropic subscription. This provides immediate access to the latest models and allows you to use Flow for AI powered workloads (such as building AI agents) with your exiting Anthropic subscription.  
[Read more here](../actions/anthropic/streaming-chat-completion.md)

![Release Notes Dec25 Anthropic](/images/flow/release_notes_dec25_anthropic.png)

<br/>

## Google Vertex AI
To provide access to the popular Gemini AI models, Flow now includes built-in support for Google Vertex AI. With the addition of Anthropic and Google Vertex AI, you can now use models from all major providers - including OpenAI, Mistral, Microsoft, Google, Anthropic, Meta, and DeepSeek - when building AI-powered workflows and automations in Flow.

![Release Notes Dec25 Google Vertexai](/images/flow/release_notes_dec25_google-vertexai.png)

<br/>

## Tavily
Tavily adds web search capabilities to automations and AI agent built with Flow. This allows agents to use information from both the internet and their own knowledge — including training data and content retrieved through traditional RAG systems. Using Tavily, we’re also planning to add support for web scraping, for example to retrieve up-to-date pricing information from websites.

<br/>

## Microsoft Teams
We’ve added basic support for Microsoft Teams, enabling messages to be sent to channels or specific users. This makes it easy to notify people from automations built with Flow. We use this ourselves to alert users in Teams when new messages are posted in Budgeting and Forecasting commenting threads they’re involved in.

![Release Notes Dec25 Msteams](/images/flow/release_notes_dec25_msteams.png)

<br/>

## Microsoft Entra ID
A connector to Microsoft Entra ID was added in the October 2025 version of Flow with support for inviting guest users, reading information about users, and reading information about App registrations.
In the December update, you can now also create users in Entra ID via Flow. A common use case is automating the onboarding of new employees. 

![Release Notes Dec25 Entraid](/images/flow/release_notes_dec25_entraid.png)

<br/>

## A2A agents (Agent-to-agent)
Flow now supports the [A2A protocol](https://a2a-protocol.org/latest/), which allows you to build AI agents in Flow that can participate in an agent mesh – a group of agents working together to complete a task.
The A2A AI agent in Flow an AI agent designed to perform tasks on behalf of a Client (orchestrator) agent. It supports the [A2A protocol](https://a2a-protocol.org/latest/) and is intended exclusively for Agent-to-Agent interoperability where requests are issued by a Client agent and the (A2A) AI agent is responsible for completing the task.

![Release Notes Dec25 A2A](/images/flow/release_notes_dec25_a2a.png)

<br/>

## Agent memory provider for SQL Server
You can now add memory to AI agents using SQL Server (or Azure SQL). The AI Agent Memory action in Flow automatically stores and retrieves conversation history, enabling ongoing conversations between users and an AI.

![Release Notes Dec25 Agent Memory Sqlserver](/images/flow/release_notes_dec25_agent_memory_sqlserver.png)

<br/>

## InVision
We’re continually adding support for more InVision APIs in Flow, enabling further automation of solutions built on InVision through Flow. The December 2025 release adds support for APIs typically used when starting new planning cycles in CFO platform products.  

#### Get primary dimension information
The [Get Primary dimension information](../actions/profitbase-invision/get-primary-dimension-infos.md) action uses the InVision HTTP API to retrieve information about primary dimensions in an InVision deployment. This typically enables building Flow automations for importing or exporting data to primary dimensions such as Department and Account in the CFO platform.

<br/>

#### Start new Workflow iteration
The [Start new Workflow iteration](../actions/profitbase-invision/workflow/start-new-workflow-iteration.md) action starts a new [Workflow](../../invision/docs/workflow.md) iteration in InVision. It’s typically used when beginning a new budget or forecast cycle - for example monthly, quarterly, or yearly. Workflows manage the approval flow of planning processes.

<br/>

#### Run rollover of Data Store Group
To start a new cycle of a continuous process, for example a rolling forecast, you can use the new [Run rollover of Data Store Group](../actions/profitbase-invision/data-store-group/run-rollover.md) action in Flow to run the rollover business logic defined in InVision for starting a new planning cycle. It enables using Flow to manage and customize the configuration and deployment of planning cycles in the CFO platform.  
[Read more here](../actions/profitbase-invision/data-store-group/run-rollover.md)  


![Release Notes Dec25 Runrollover](/images/flow/release_notes_dec25_runrollover.png)

<br/>

#### Set Time Frame reference data for Data Store Group
This action is typically used during the setup of a budgeting and forecasting solution and specifies from when a planning cycle (like a rolling forecast) applies. It enables using Flow to manage and customize the configuration and deployment of planning cycles in the CFO platform.   
[Read more here](../actions/profitbase-invision/data-store-group/set-time-frame-reference-date.md)

<br/>

## Saving and loading Flows via files
You can now save and load Flows from files. This makes it easy to share Flows with other people or copy Flows between Workspaces or customers. This feature is not a replacement for Packages, but rather a useful tool for ad-hoc sharing of Flows. Note that secrets such as connections or passwords are not included when saving or loading Flows to file, so after a Flow has been loaded into a new Workspace, you must re-configure actions using connections to external systems. The new options are available from the File menu in the Designer.  

![Release Notes Dec25 Flow From File](/images/flow/release_notes_dec25_flow-from-file.png)

<br/>

## Outlook
A small but useful update to the [Send email using Outlook](../actions/microsoft-365-outlook/send-email.md) action is the ability to now define **CC** and **BCC** recipients. BCC enables automations for mass mailings, such as newsletters, announcements, and event invites, while maintaining privacy and avoiding messy “reply-all” chains.

<br/>

## Parquet
We’ve made significant improvements to memory usage when processing large Parquet files. This means you can now read and write significantly larger Parquet files using Flow than in previous versions. The maximum size of the files still relies on your Flow subscription plan.  

<br/>

## CSV
You can now specify the encoding when generating CSV files. The default value is UTF-8 without BOM. However, if you intend to open the CSV files in Excel, you should consider using UTF-8 with BOM instead, so Excel does not attempt to open the file in a legacy format and read the file contents incorrectly.   

<br/>

## Platform
We’ve upgraded the Platform to .NET 10. In general, this means improved performance and reduced memory usage when running Flows.  
The main benefit for Flow developers is that you can now use C# 14 and .NET 10 APIs in Function actions. 