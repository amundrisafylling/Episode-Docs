

# System Description

<br/>

## InVision Designer (Developer)

The InVision Designer is the development tool for building [Profitbase](https://www.profitbase.no/) InVision Solutions. You’ll use the designer for tasks ranging from scripting and configuring business modules, to designing user interfaces and managing identities and access.
<br/> 

## Workbooks (End User)

[Workbooks](../../workbooks.md) are built using the InVision Designer, and presents the user interface to the end user for editing data, executing tasks and viewing reports. Workbooks are compiled from Solution components and can be designed to support a broad range of business processes and needs.
<br/>

## Website / Backend

The website is hosted by the IIS web server which serves the user interface and web requests.
<br/>

## Data Flow Task Manager (Dispatcher)

The [Data Flow](../../dataflows/index.md) Task Manager is responsible for managing execution of Data Flows by distributing the work load across the Task Workers, and controlling the execution paths for each Data Flow. There is only one Data Flow Task Manager per install site.
<br/>

## Data Flow Task Worker(s)

The Data Flow Task Worker is responsible for executing a Data Flow Item. Each Data Flow Item is executed in an isolated process which prevents it from affecting other processes if a fatal error should occur. Since Data Flow Items may take up a lot of system resources when executed, it is recommended (but not required) that Data Flow Task Workers run on different servers than the website to prevent slow response times to the end users.
<br/>

## Data Flow Scheduler
The Data Flow Scheduler is responsible for running scheduled Data Flows.

<br/>

## Solution System Database(s)

Hypergene InVision stores its metadata and business data in SQL Server databases. By default, both the metadata and business data are stored in the Solution Database. If you want, you can choose to put the business data in one or more separate databases. 
<br/>

![System Schematics](https://profitbasedocs.blob.core.windows.net/images/systemschematics.jpg "System Schematics")

