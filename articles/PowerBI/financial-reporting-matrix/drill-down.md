_Available from version 9.0.0.0_

The Drill Down feature allows the Financial Reporting Matrix to utilize Power BI's native drill-down capabilities. Enabling this can significantly improve performance, as the visual will only load the data that is currently visible, rather than loading all child levels by default (even when they are collapsed).

### How to enable Drill Down

To enable native drill-down interactions, perform the following steps:

1. Select the visual and navigate to the **Visual** section in the **Format pane**
2. Open the **Drill Down** section
3. Toggle the **Enable Drill Down** option **On**.

For more information on how native drill down interactions work, please refer to the [official Microsoft documentation](https://learn.microsoft.com/en-us/power-bi/create-reports/service-reports-visual-interactions?tabs=powerbi-desktop#change-the-interactions-of-drillable-visualizations).

### Important Considerations

While drill down can significantly improve performance, it only works with the *current* level of data. Please keep the following limitations in mind before enabling it:

* **Expansion Icons:** If you have multiple fields added to the **Rows** bucket of the visual, the expansion symbol (+/-) will continue to show even if there is no lower level for that specific row.

* **Custom Totals and Calculations:** Because Drill Down does not load the underlying hidden data, parent totals might look different from the full dataset value if you have added custom rows or custom calculations to the visual.
