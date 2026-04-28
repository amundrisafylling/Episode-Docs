
_Available from version 9.0.0.0_

The **Sort by** feature allows you to reorder columns and rows based on specific data values rather than default alphabetical or chronological sorting. This improves readability and lets you align the layout to your specific reporting preferences.
You can sort your data using three different methods:
1. Sort columns by row value
2. Sort columns by column header
3. Sort rows by column value
## **Enabling sorting**
To enable sorting for the visual, navigate to the **Visual** settings in the **Format pane**, and enable **Sort by**.

## 1. Sort columns by row value
This option reorders all columns based on the numeric values of one specific row.

**Step 1:** Choose your sorting scope:
* **Groups:** Sorts columns separately inside their parent groups (for example, sorting the months inside each year).
* **All:** Sorts all columns across the entire table together, ignoring any parent groups.

**Step 2:** Choose the **Column level** you want to apply sorting to. Sorting will be applied to this column level and all lower levels.

**Step 3:** Select the row you want to base your sorting on.

**Step 4:** Select the measure you want to base your sorting on. If you select **All**, the measures within each column are sorted independently, meaning their display order may vary across columns. If you select a specific measure, the overall column sorting is based solely on that measure, and it will consistently appear first under each column header.

**Step 5:** Choose your **Order** (**Ascending** or **Descending**) and click **Apply**.

*(Note: Row positions remain fixed, only the columns are reordered).*

## 2. Sort columns by column header
This option rearranges columns based on a selected column header value.

**Step 1:** Choose the **Column level** you want to apply sorting to

**Step 2:** Choose your **Order** (**Ascending** or **Descending**) and click **Apply**.

## 3. Sort rows by column value
This option reorders rows based on the values within a specific column.

**Step 1:** Select the column you want to sort rows by.

**Step 2:** Select the **Measure** you want to base the sort on

**Step 3:** Choose your **Order** (**Ascending** or **Descending**) and click **Apply**.

*(Note: If the system encounters empty rows during sorting, it treats the values as zero).*

## Format sort button
* **Hide icon:** Toggle this option on to hide the sort icon until the user hovers over the visual.
* **Transparent background:** Turn this option on to remove the button's background color.
* **Border:** Turn this option on to add border to the button.
* **Button size:** Increase or decrease the size of the button.
* **Position:** Choose where the button should be anchored on the visual (e.g., Top-right, Bottom-left).

## Important Considerations
**Excluded Elements:** Grand totals and subtotals are completely excluded from sorting and will remain in their default positions.
