# Delete Work Process Version


This action deletes a version of a work process along with its associated solution.

![wpv](https://profitbasedocs.blob.core.windows.net/flowimages/Delete-wpv.png)

## Properties

| Name                 | Required | Description                         |
|----------------------|----------|-------------------------------------|
| Title                |          |  A descriptive title for the action.      |
| Connection           | Required | [InVision Connection](../invision-connection.md).                 |
| Work Process Version | Required | Select or enter Work Process Version to delete |
| Include information messages in log | Optional | If to show inforation messages from InVision in the Flow's log. |
| Force delete | Optional |                      |
| Changed by           | Optional | Enter the user Id to use in InVision's "Changed by" |
| Result variable name | Optional | Name of the variable containing a true/false result.  |
| Description          | Optional |  Additional notes or comments about the action or configuration. |