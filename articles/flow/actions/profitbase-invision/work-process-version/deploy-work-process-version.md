# Deploy Work Process Version

This action deploys a version of a work process. It creates a solution based on selected content from the work process blueprint selection. The state of this version will be marked as deployed.

![wpv](https://profitbasedocs.blob.core.windows.net/flowimages/Deploy-wpv.png)

## Properties

| Name                 | Required | Description                         |
|----------------------|----------|-------------------------------------|
| Title                |          |  A descriptive title for the action.     |
| Connection           | Required | [InVision Connection](../invision-connection.md).                 |
| Work Process Version | Required | Select Work Process Version from the list |
| Include information messages in log | Optional | If to show inforation messages from InVision in the Flow's log. |
| Changed by           | Optional | Enter the user Id to use in InVision's "Changed by" |
| Result variable name | Optional | Name of the variable containing a true/false result. |
| Description          | Optional |  Additional notes or comments about the action or configuration. | 