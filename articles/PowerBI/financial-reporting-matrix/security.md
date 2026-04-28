This Security Statement is aimed at providing you with information about the measures put in place to ensure your data is handled securely by the Financial Reporting Matrix. Financial data is highly sensitive information, and we are committed to protecting your data from any unwanted or unauthorized access.


### 1. Certified by Microsoft
The Financial Reporting Matrix is certified by Microsoft. This means that the visual is tested by Microsoft to verify 
that it doesn't access external services or resources, and that it follow secure coding patterns and guidelines.

![Skjermbilde 2025-06-26 092848](https://github.com/user-attachments/assets/aee7767a-4b8f-4ccc-8406-fe6651c4bd67)

### 2. Hosting model and data  
The image below describes how the Visual is hosted and isolated in Power BI, and how data is ingested and managed by the Visual.
Financial Reporting Matrix is a Power BI custom visual. Each custom visual run in an isolate sandbox within a Power BI report page, called an iFrame. All data available to the visual is pushed from the Power BI model and query engine TO the visual. The visual does not fetch any data on its own.  

![Hosting model](https://profitbasedocs.blob.core.windows.net/pbireportingmatrix/FinancialReportingMatrixHostingModel.png)

### 3. Hosting model and isolation  
The Visual does not in any way access data or any other type of information outside of the Visual itself, including its hosting environment.  

Each Power BI custom visual is hosted in a dedicated iFrame, meaning it is totally isolated and cannot interact with any outside Power BI feature or function without going through the official Power BI custom visuals API provided by Microsoft.  

A custom visual can not directly interact with other visuals, neither built-in nor other custom visuals. This means that the Visual cannot and will not try to access any type of information or data from other visuals or from the Power BI environment.  

### 4. Networking and data traffic  
The Visual does not make or receive any network calls, and does not share any type of data externally, neither user information nor business data. 

#### 1. Incoming Data
All business data used by, and available to the Visual for building and displaying reports come from the Power BI Data Model and is provided to the Visual by the Power BI query engine using a push model, meaning data is always pushed by the Power BI runtime into the Visual. The Visual does not, and cannot, initiate network calls or requests to access the Data Model. Also, the visual does not make any network calls to request or send data to any other resource. The only exception to this rule is that the Visual can request more data from the same Data Model query when the result of a query exceeds the maximum amount of data Power BI will push to the Visual in one chunk. In this case, the Visual can request to get the next chunk of data until everything has been received.  

#### 2. Local Storage
The Visual does not use the browser localStorage or Power BI Storage API to store or retrieve data in any way.  

#### 3. Exporting data from the visual
The only way to export data from the Visual is by direct user interaction through the Power BI user interface or using screen capture technology. The Visual itself does not have a data export API or feature of any kind.
 

### 5. Technology and 3rd party libraries  
This Visual is build using React.js, which is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. In addition to React.js, we also use a few other industry standard open-source libraries for specific features in the app.

#### 3rd party libraries used by the Visual  
The following 3rd party is used by the Visual. We monitor new releases and security vulnerability reports of these libraries, and keep them up to date to ensure our Visual does expose security vulnerabilities.  

* "antd": "^5.12.5",
* "classnames": "^2.3.2",
* "core-js": "3.34.0",
* "eslint-config-prettier": "^8.5.0",
* "eslint-plugin-react-hooks": "^4.6.0",
* "exceljs": "^4.3.0",
* "immutable": "4.3.4",
* "lodash.clonedeep": "^4.5.0",
* "moment": "^2.29.4",
* "powerbi-visuals-api": "~5.10.0",
* "powerbi-visuals-utils-dataviewutils": "^6.0.1",
* "powerbi-visuals-utils-formattingmodel": "^5.0.1",
* "powerbi-visuals-utils-formattingutils": "^6.0.1",
* "react": "^18.2.0",
* "react-color": "^2.19.3",
* "react-contexify": "^5.0.0",
* "react-dom": "^18.2.0",
* "react-error-boundary": "4.0.12",
* "react-resize-detector": "^9.1.1",
* "react-select": "5.7.7",
* "react-table": "^7.8.0",
* "slate": "0.101.4",
* "slate-react": "^0.101.3",
* "styled-components": "6.1.1",
* "tweetnacl": "^1.0.3",
* "tweetnacl-util": "^0.15.1",
* "underscore": "^1.13.6"

### Questions?  
If you have any questions, please contact us at pbi.visuals@profitbase.no, or [ask a question in our forum](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/issues).