* [Row grand totals](row-grand-totals.md)
* [Column subtotals](column-subtotals.md)


_From version 8.0.0.0:_

## Two types of aggregation for Totals

This feature allows developers to control the aggregation method applied to the totals column of a measure. You can choose between summarizing all values or applying the same formula used for measure calculation to the totals column.

1. Navigate to the Format pane, and turn on the Column Subtotals option.
1. Once the column subtotals are enabled, you will see an option called "Aggregation type" on a separate slicer card.
1. Click on the "Aggregation type" card to expand it.

You will see options to select an aggregation type for each measure total.

![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/3b5f3c13-2e3b-4e66-bdfc-79e3fba59129)


For each measure, you can select between two aggregation options:
"Summarize": This option calculates the total by summarizing all individual measure values in the columns of the corresponding level.

"Default": This option applies the same formula used for calculating the measure to the totals column (the initial implementation of total calculation).

Note: Any filters or slicers applied to the report will be considered when calculating the total.
Aggregation on Every Column Level

The chosen aggregation type will be applied to every column level showing the measure total.
Default Total Calculation with Column Formula

If a column formula is applied to one of the Measures, the Default total calculation means that the same formula will be applied to the total value.
