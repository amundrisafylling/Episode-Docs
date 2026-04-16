# August 2024 Update  

<br/>

Welcome to the August 2024 update of Hypergene Flow. Here are the most important updates added since the last release. Our main focus remains on expanding support for integrations with the most commonly used business systems, enabling you to use Profitbase to automate any business process in finance and operations.

<br/>


## Amazon S3  
With support for Amazon S3, you can now easily **read** (download), **upload**, **append**, **delete**, and **list** objects in Amazon S3 buckets.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/augustChangelog24_1.png)

<br/>


## Parquet Files  
We added support for **reading and writing Parquet files**, which means you can easily import or export data through the Parquet file format, whether a system natively supports the Parquet format or not. For systems natively supporting Parquet, such as Snowflake and Microsoft Fabric, you can simply read or write directly to the system. For systems that do not natively support Parquet files out-of-the-box, such as SQL Server, PostgreSQL, or HTTP APIs, you can use one of the adapters provided with Flow to read and write data to/from the target system.

> *Apache Parquet is an open-source, column-oriented data file format designed for efficient data storage and retrieval. It provides high-performance compression and encoding schemes to handle complex data in bulk and is supported in many programming languages and analytics tools. [Source](https://parquet.apache.org/)*

![img](https://profitbasedocs.blob.core.windows.net/flowimages/augustChangelog24_2.png)

<br/>


## Microsoft Fabric REST API  
We’ve added support for the [Microsoft Fabric REST API](https://learn.microsoft.com/en-us/rest/api/fabric/articles/) to automate Fabric procedures and processes. To successfully call the Microsoft Fabric REST API, you need to **create a Microsoft Fabric Connection** using a Microsoft Entra **Service Principal**. The Service Principal must first be created through the Azure portal (or CLI) and granted Application permissions to the Power BI API.

When you have successfully created a Microsoft Fabric Connection, Flow will automatically take care of authentication when calling the [Microsoft Fabric REST API](https://learn.microsoft.com/en-us/rest/api/fabric/articles/).

Flow will also automatically handle [paginated](https://learn.microsoft.com/en-us/rest/api/fabric/articles/pagination) responses for you by fetching all records, so you don’t have to worry about handling the pagination logic yourself.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/augustChangelog24_3.png)

<br/>


## Hypergene InVision  
- **Lookup Tables** now automatically resolve parameters/assumptions by date if the source table contains a column named `FromDate`. This feature is typically used for financial calculations in Profitbase Budget and Forecasting, where parameter values (financial settings) differ by date/period in the planning period in addition to dimensionality.
- We added support for **Work Process Version automation**, which allows defining Flows to **create**, **deploy**, **open**, **close**, and **delete** Work Process Versions in InVision.
- You can now easily **read (export) data from a Dimension** in InVision using the [Get Dimension DataReader](../actions/profitbase-invision/get-dimension-datareader.md) action. This makes it easy to export data from an InVision dimension to any target, such as Parquet files or any analytics platform like Microsoft Fabric and Power BI.
- To **import data to a Dimension** in InVision, you can now use the [Import Data to Dimension](../actions/profitbase-invision/import-data-to-dimension.md) action. The data import and export actions make it easy to pull dimensions such as product or account structures into InVision, make edits using the visual drag-and-drop editor, and then push the result to a data platform for reporting and analytics.
- **Stored Procedures** in InVision can now be redeployed from a Flow using the [Deploy Stored Procedure](../actions/profitbase-invision/deploy-stored-procedure.md) action. This is useful when the Stored Procedure definition is dynamically generated based on customer configuration using a macro.
- **Views** in InVision can now be redeployed from a Flow using the [Deploy View](../actions/profitbase-invision/deploy-view.md) action. This is useful when the View definition is dynamically generated based on customer configuration using a macro.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/augustChangelog24_4.png)

<br/>


## Encryption  
We now support encryption and decryption of data using the AES algorithm through the [AES Encrypt](../actions/security/aes-encrypt.md) and [AES Decrypt](../actions/security/aes-decrypt.md) actions.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/augustChangelog24_5.png)

<br/>


## Visma Business NXT Connector  
- Added **GraphQL General Ledger template queries** with support for **paging**.  
- Fixed a bug in the Connection editor which prevented editing an existing Visma Business NXT connection.

<br/>


## Excel  
The [Open Excel file as DataReader](../actions/excel/open-excel-file-as-datareader.md), [Read Excel file as DataTable](../actions/excel/read-excel-file-as-datatable.md), and [For each row in Excel file](../actions/excel/for-each-row.md) actions now support auto-mapping of columns by providing a (sample) file. This removes the tedious work of mapping Excel column letters to business column names (such as Account, Department, etc.) and specifying the correct data type for each column when you want to import data from Excel to a target such as a database.

<br/>


## CSV Files  
We added support for creating CSV files from **DataTables** in addition to DataReaders.

<br/>


## HTTP  
- You can now manually type the **content disposition** in the **Return File HTTP Response** action in addition to selecting it from a variable.
- Fixed a bug where the **HTTP method** value was not properly updated in the UI when changed.
- You can now use **business objects, byte arrays, and streams** in addition to strings (JSON) as the HTTP body payload.
- You can now type JSON objects **containing quotes** in the HTTP request body editor.

<br/>


## SendGrid  
Fixed an issue that prevented sending emails to multiple recipients.

<br/>


## Azure Blob  
- We added support for reading **Blob metadata** using the [Get Blob Info](../actions/azure-blob-storage/get-blob-info.md) and [For each Blob Info](../actions/azure-blob-storage/foreach-blob-info.md) actions.  
- We now support both SAS URI and connection strings to connect to an Azure Blob Container.  
- The [Append to Blob](../actions/azure-blob-storage/append-to-blob.md) action now supports Stream input in addition to byte array.

<br/>


## SQL Server  
- SQL Server actions now handle object names enclosed in square brackets.  
- We added support for more SQL Server **connection options**:
  - **Microsoft Entra Password** (Username + password)
  - **Microsoft Entra Service Principal**
  - **Custom connection string**
- You can now rearrange the order of columns in SQL Server actions, such as the [Create Table](../actions/sql-server/create-table.md) action.

![img](https://profitbasedocs.blob.core.windows.net/flowimages/augustChangelog24_6.png)

<br/>


## Platform  
- You can now have **multiple start actions** in the Main Flowchart of a Flow without getting a validation error when trying to save and execute. This makes it easier to experiment while developing a Flow, because you can detach and attach different action sequences to test different results. Note that when a Flow with multiple start nodes is executed, the path having the **longest string of actions** will be executed.
- The **Variable Selector** now loads faster and allows unlimited member drilling depth. This is especially useful when creating data integrations to source systems with generic APIs that support highly flexible and recursive data structures (typically heavily customized ERP systems).
- You can now **copy and paste** Actions and Triggers both within the same Flow and between Flows.
- We overhauled the **Toolbox** by adding better **icons** and explicitly displaying the **system name** (Profitbase, Azure, Visma, etc.) next to the action name.
- You can now declare multiple variables using the new [Declare Variables](../actions/built-in/declare-variables.md) action. This removes unnecessary noise from a Flowchart when you need to use many variables.



<br/>

### See Also

- [May 2025](changelog25_may.md)
- [February 2025](changelog25_february.md)
- [December 2024](changelog24_december.md)
- [October 2024](changelog24_october.md)
- [September 2024](changelog24_september.md)
