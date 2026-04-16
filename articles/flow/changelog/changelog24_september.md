# September 2024 Update  

<br/>

- **September 2024 update** for Hypergene Flow includes:
  - New **Package Manager**.
  - Integration support for:
    - **Dynamics 365 Business Central**
    - **Microsoft 365 Outlook**
    - **Snowflake**
    - **PostgreSQL**
  - Improvements to existing features.


## Package Manager
We are excited to share that Hypergene Flow now includes a **Package Manager**. This enables users to create and share units of business logic spanning one or more flows, such as complex data integrations or automations.

![Package Manager Screenshot](https://profitbasedocs.blob.core.windows.net/flowimages/package-manager-sept.png)

## Snowflake
**Snowflake** is a cloud-based data platform that offers scalable storage, processing, and analytics. It allows organizations to manage large volumes of data with flexible compute and storage, integrating with major cloud providers like AWS, Google Cloud, and Azure.

The September 2024 release of Flow adds support for integrating with Snowflake by running queries, loading data into, and reading data from Snowflake.


## Dynamics 365 Business Central
In this release, we’re happy to introduce **support for Dynamics 365 Business Central**. This integration allows users to connect their apps and build data integrations with one of the leading ERP solutions, enabling automation and seamless data flows between Dynamics 365 Business Central and other business systems.

![Dynamics 365 Business Central Screenshot](https://profitbasedocs.blob.core.windows.net/flowimages/dynamics-365-sept.png)

## Microsoft 365 Outlook
We’re pleased to announce that our latest release includes integration with **Microsoft 365 Outlook**. This feature enables users to automate workflows involving email via Outlook, such as:
- Monitoring support requests
- Processing invoices received through emails
- Sending notifications based on events in other systems

![Microsoft 365 Outlook Screenshot](https://profitbasedocs.blob.core.windows.net/flowimages/microsoft-365-sept.png)

## PostgreSQL
By adding support for **PostgreSQL**, we’re making it easy to incorporate one of the most versatile and popular databases into your data integrations and business process automations.

The initial implementation includes support for the following actions:
- **Execute command**: Executes a SQL command and returns the number of rows affected. This action lets you run any SQL command, such as insert, update, delete, or stored procedure, against a PostgreSQL database.
- **Load to DataTable**: Loads rows from PostgreSQL into memory as a dataset. You will typically use this option when you want to perform a series of operations on a dataset in memory before piping the result to another action.
- **Get DataReader**: Provides a forward-only stream of rows from a PostgreSQL database. This is useful when processing large amounts of data one row at a time, or when you need to export data to file formats such as Parquet, Excel, or CSV.
- **Insert data**: Bulk inserts rows from a DataReader or DataTable into a PostgreSQL table.

![PostgreSQL Screenshot](https://profitbasedocs.blob.core.windows.net/flowimages/postgres-sept.png)

## JSON File Support
We've added support for creating **JSON files**, making it easier to share data in JSON format. You can upload JSON files to **Azure Blob Storage**, **Amazon S3**, or include them as attachments in emails.

## Azure Service Bus Integration
**Azure Service Bus triggers** are now long-polling, meaning they will process all messages in the backlog until it’s empty. Be cautious when resubmitting jobs to avoid creating an infinite loop.

Additionally, you no longer need to provide a subscription when using an Azure Service Bus trigger. If one is not provided, Flow will automatically create one, provided that the connection string or SAS URI includes the necessary permissions.


## Excel Enhancements
We've added new capabilities for creating Excel files:
- **Support for importing data from multiple sheets**: Use a `;` (semicolon) as a separator between sheet names.
- **Create Excel as a stream**: You can now create Excel files as a stream, which is generally faster and more memory-efficient since it avoids creating multiple copies of the data in memory.


## HTTP Authentication Options
Hypergene Flow can now automatically handle **authentication** for HTTP request actions. This simplifies making generic requests to HTTP endpoints requiring authentication, as users no longer need to manually implement the authentication mechanism or add auth headers.

[Read more about HTTP authentication here](../actions/http/http-authentication.md).

## Platform Enhancements
We’ve made several improvements and fixes to the platform:
- Multiple improvements and fixes to the **copy-paste** feature.
- **C#** keywords `null` and `default` are no longer quoted when assigned to a string variable.
- Reduced memory usage for the **background execution service** when idle in on-premise environments.
- Support for graceful termination of the **background execution service** when **Kubernetes** scales down the host cluster.


<br/>

### See Also


- [May 2025](changelog25_may.md)
- [February 2025](changelog25_february.md)
- [December 2024](changelog24_december.md)
- [October 2024](changelog24_october.md)
- [August 2024](changelog24_august.md)
