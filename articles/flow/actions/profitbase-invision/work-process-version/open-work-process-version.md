# Open Work Process Version


This action opens a version of a work process for input. The state of this version will be marked as open.

![wpv](https://profitbasedocs.blob.core.windows.net/flowimages/Open-wpv.png)

## Properties

| Name                 | Required | Description                         |
|----------------------|----------|-------------------------------------|
| Title                |          | A descriptive title for the action.     |
| Connection           | Required | [InVision Connection](../invision-connection.md).                 |
| Work Process Version | Required | Select or enter id of the Work Process Version that you want to open |
| Include information messages in log | Optional |If to show inforation messages from InVision in the Flow's log. |
| Changed by           | Optional | Enter the user Id to use in InVision's "Changed by" |
| Result variable name | Optional | Name of the variable containing a true/false result. |
| Description          | Optional |  Additional notes or comments about the action or configuration. |