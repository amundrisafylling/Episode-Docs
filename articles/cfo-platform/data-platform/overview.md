
# Profitbase Data Platform

The Profitbase Data Platform is part of the Profitbase CFO Platform, and is the hub for all data integrations, reporting and data analysis. It is built on [Microsoft Fabric](https://learn.microsoft.com/en-us/fabric/), making it easy to integrate with 3rd party data platforms, APIs, Power BI and other analytics tools.

Profitbase uses [Hypergene Flow](../../flow/flow.md) for data integration workloads. It has pre-built integrations for various ERP systems, file formats, APIs and data platforms such as Microsoft Fabric, Snowflake and Databricks. It also supports connectors to a wide range of other services such as databases, cloud storage solutions, email, file shares, and message brokers.

![img](/images/data-platform/Profitbase-data-integration-platform-overview.svg)

## Data Integration

Each customer gets their own [Workspace](https://learn.microsoft.com/en-us/fabric/get-started/workspaces) within Fabric. A [Lakehouse](https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-overview) and [SQL Analytics Endpoint](https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sql-analytics-endpoint) is also automatically provisioned. This means that you will only have access to your own data and resources within the data platform. Data from your data sources, such as ERP systems, will be loaded into the Fabric Lakehouse and made available to Profitbase Solutions, as well as to your own data platform and analytics tools. 

#### ERP integrations

For ERP system integrations, Hypergene Flow connects to the ERP systems to extract, transform, and load data into the Lakehouse using pre-built integration Flows. Because ERP systems vary widely, each pre-built integration is purpose-built to handle the unique intricacies of a specific ERP system.    
Once the data is in the Lakehouse, it becomes available to [Profitbase Planner](../../planner/planner.md) and other solutions on the CFO Platform. 

#### File, API, and database integrations

Hypergene Flow supports connections to a wide range of APIs, cloud storage solutions like [AWS S3](https://aws.amazon.com/s3/) and [Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction), and databases such as SQL Server and PostgreSQL. With support for file formats like [Parquet](https://parquet.apache.org/), CSV, and Excel, along with powerful data transformation capabilities, it enables integration of most business data into the data platform without needing additional tools.

#### Querying data on the Data Platform

Profitbase Solutions like [Profitbase Planner](../../planner/planner.md) integrate seamlessly with the data platform, making all your planning data automatically available for reporting and analysis through tools like Power BI. If you need direct access to query data on the Profitbase Data Platform, use the [SQL Analytics Endpoint for Lakehouse](https://learn.microsoft.com/en-us/fabric/data-engineering/lakehouse-sql-analytics-endpoint).




