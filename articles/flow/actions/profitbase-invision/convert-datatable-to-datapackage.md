# Convert DataTable to DataPackage

Converts a [DataTable](https://learn.microsoft.com/en-us/dotnet/api/system.data.datatable) to a DataPackage. A DataPackage contains the data and metadata for InVision [SQL Reports](../../../invision/docs/sqlreports.md), [Worksheets](../../../invision/docs/worksheets.md), [Tables](../../../invision/docs/tables.md) and [Table Views](../../../invision/docs/tableview.md) Workbook components rendered in the UI. It is the payload returned from the InVision backend APIs to its tabular frontend components. 

Use this action when you need to create a Flow that returns data to a [SQL Report](../../../invision/docs/sqlreports.md), [Worksheet](../../../invision/docs/worksheets.md), [Table](../../../invision/docs/tables.md) or [Table View](../../../invision/docs/tableview.md) in an InVision [Workbook](../../../invision/docs/workbooks.md). It enables passing data directly from Flow to the InVision frontend without going through the InVision backend or database. This enables you to use Flow to create your own backend with custom business logic for displaying or editing tabular data in InVision. 

![img](/images/flow/convert-datatable-to-datapackage.png)  

## Properties

| Name          | Required | Description                       |
|---------------|----------|-----------------------------------|
| Source table  | Yes | The DataTable to convert to a DataPackage. |
| Package name  | No | The name of the dataset in the DataPackage returned to InVision. You only need to specify this property when returning data to an InVision SQL Report, and the report is using a named dataset to bind to a data grid or chart serie.|

## Returns
This action returns a DataPackage object, which is the data structure containing the data and metadata for displaying [SQL Reports](../../../invision/docs/sqlreports.md), [Worksheets](../../../invision/docs/worksheets.md), [Tables](../../../invision/docs/tables.md) and [Table Views](../../../invision/docs/tableview.md) in InVision Workbooks.