# Close Work Process Version

This action involves closing a version of a work process for input. The state of this version will be marked as closed.

![wpv](https://profitbasedocs.blob.core.windows.net/flowimages/Close-wpv.png)

## Properties

| Name                 | Required | Description                         |
|----------------------|----------|-------------------------------------|
| Title                |          |    A descriptive title for the action.                                  |
| Connection           | Required | [InVision Connection](../invision-connection.md).                 |
| Work Process Version | Required | Select or enter id of the Work Process Version that you want to close. |
| Include information messages in log | Optional |If to show inforation messages from InVision in the Flow's log. |
| Changed by           | Optional | Enter the user Id to use in InVision's "Changed by". |
| Result variable name | Optional | Name of the variable containing a true/false result. |
| Description          | Optional |  Additional notes or comments about the action or configuration. |