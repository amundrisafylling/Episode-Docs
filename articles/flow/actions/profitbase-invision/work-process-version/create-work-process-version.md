# Create Work Process Version

This action creates a new version of an existing work process in a draft state. In the "version properties", you can add parameters to define specific details for this version.

![wpv](https://profitbasedocs.blob.core.windows.net/flowimages/Create-wpv%20(2).png)

## Properties 

| Name                 | Required | Description                         |
|----------------------|----------|-------------------------------------|
| Title                |          |   A descriptive title for the action.         |
| Connection           | Required | [InVision Connection](../invision-connection.md).                 |
| Work Process         | Required | Select Work Process from the list, from a variable or enter the id manually.   |
| Version name         | Required | Name of the new version to create.   |
| Version describtion  | Optional |                                     |
| Source Version       | Optional | Select source version from the list, from a variable or enter the id manually. |
| Copy permissions     | Optional | Copy permission from source Version, true or false.  |
| Version Properties   | Optional | Version properties is defined by the Work Process. Fill in the values is the pop-up dialog. |
| Created by           | Optional |                                     |
| Result variable name | Required | Name of the result variable containing the id of the new Version. |
| Description          | Optional |  Additional notes or comments about the action or configuration. |



![wpv](https://profitbasedocs.blob.core.windows.net/flowimages/Create-wpv%20(1).png)

