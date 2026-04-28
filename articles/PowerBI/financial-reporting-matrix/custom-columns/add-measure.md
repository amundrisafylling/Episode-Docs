_From version 8.0.0.0_

In edit mode, you can right click a column header, and select "Add measure before" or "Add measure after" to add a new custom measure.
While having the formula field active, you can click in the items you want to include in the calculation, similar to how you add a Custom column.

This custom measure, will be repeated under each column header, same as if you place a new measure in the Values-bucket of the visual.

![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/09446b45-3e11-4473-aab8-0a579ea70232)

Custom measures have the same formatting pane as custom columns:

![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/db5e3a54-f45b-4386-9a8f-fe1c967cd9af)

When you collapse a column header, the custom measure will be aggregated to the column level:
![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/80407419-e0b4-42ae-b671-fed0f5bc64c9)

## Custom measure aggregation: Show Last Value
_Available From version 9.0.0.0_

When adding a custom measure, you can change how its total is calculated at the column subtotal or grand total level. The **Show Last Value** aggregation type allows the measure total to display the value from the last visible column in the hierarchy instead of summarizing all columns. This is particularly useful for period-end balances or cumulative custom measures.

To set the aggregation to show the last value, perform the following steps:

1. Go into Edit mode.
2. Right-click a **column header** and select **Add measure before** or **Add measure after** (or select an existing custom measure from your **Applied steps** list).
3. In the styling pane that appears on the right side (e.g., **Column Style (test)**), scroll down to locate the **Aggregation** dropdown.
4. Change the selection to **Show Last Value**.

The matrix will now update the total column for this specific measure to reflect the value of the last column in the row.
![image](https://github.com/user-attachments/assets/8241d43f-b861-4e91-af49-4392dc7e34a8)
