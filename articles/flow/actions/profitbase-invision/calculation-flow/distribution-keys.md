# Distribution keys

Distribution Keys enables defining rules for how a value, for example a Year Total, should be distributed or allocated across one or more periods. 

A Distribution Key is configured as a table, containing one or more keys (usually dimensions such as Department, Account, Employee or Product), and a set of period columns that represents a date and a numeric value.

## Example

| Department       | Product         | 2023-Jan    | 2023-Feb    | 2023-Mar     | 2023-Api      |
|------------------|-----------------|-------------|-------------|--------------|---------------|
| All              | All             | 1.2         | 2.3         | 0.4          | 0.9           |
| West             | Bikes           | 1.3         | 2.6         | 0.5          | 1.2           |
| North            | Skis            | 1.5         | 2.7         | 0.8          | 1.3           |

When defining distribution keys where key columns are associated with dimensions (such as Department and Product above), you can define rules at an aggregate level (such as company or product group). The values will automatically be inherited by members at lower levels in the dimensions, even though they are not explictly mapped in the table. Values set at a lower level will override values inherited from a parent level.  

> [!NOTE]
> In case there are no Distribution Key rules that match a search criteria, a default distribution key is used. The default distribution key is `1.0/n`, where n = number of periods.


## Properties  

| Name         | Required | Description                                                |
|--------------|------------------|------------------------------------------------------------|
| Key columns  | No | All Distribution Key tables must have at least one logical key. If no Primary Key is defined on the table in InVision, or you want to use a different set of columns to make up the key, you can specify the key manually here. Flow uses the key to find which Distribution Key rules to return from the [FilterByContext()](distribution-keys/distribution-key-filter-by-context.md) and [FilterByContextDistinctByTypeField()](distribution-keys/distribution-key-filter-by-context-distinct-by-type-field.md) methods. |
| Additional data         | No | Specifies any non-key and non-periodic columns from the Distribution Key table that you want to use for business logic. |
| Key mappings | No | Use this option to define explicit mapping between the `Key columns` and the (corresponding) columns in the data source when names does not match. Flow determines which Distribution Key rules to use by comparing the values in the `Key columns` to the corresponding columns in the input row from the data source. If not specified otherwise, it matches against columns with the same name. If you need a different behavior, you need to specify the mapping between the keys explicitly. |
| Distribution Key type | No | Specifies the name of the column that defines the Distribution Key type. This feature enables a value to be distributed among multiple categories in addition to multiple periods.  | 
| Options       | No | **Use even distribution key if no matches are found:** If this option is `disabled` (unchecked), and no distribution key is found for the context (for example department id) no transactions are generated for the current input row. <br/><br/> **Disable caching**: Enable this option if you are _generating_ the data in the Distribution Key table using a custom SQL script. When generating data into a table using a custom SQL script, InVision will not be able to detect the change and notify Flow to invalidate its cache. You can also use the [Remove InVision object from cache](../../built-in/remove-invision-object-from-cache.md) action to programatically evict the table from cache.  |


## Using Distribution Keys to distribute totals to periods

To use Distribution Keys to distribute totals to periods, create a Flow and add the following actions  
1) Define Distribution Keys to use
2) Add a [Calculation Flow db output](define-calculation-flow-db-output.md) action
3) Add a [Calculation Flow db input](read-calculation-flow-db-input.md) action
4) Add a [Function](../../built-in/function.md) action and call `DistributionKeys.UseContext(...)` (see example below).
5) Add a [Function](../../built-in/function.md) action and implement the calculations (see example below).

![Using Distribution Keys](/images/flow/using-distribution-keys.png)

**Set processing context**  
From step 4) above, we need to set the context on the Distribution Key search index so that when we call [FilterByContext()](distribution-keys/distribution-key-filter-by-context.md) or [FilterByContextDistinctByTypeField()](distribution-keys/distribution-key-filter-by-context-distinct-by-type-field.md), we get back the Distribution Key _rules_ that should be used distribute a (total) value to periods for the current context (for example department, employee or account).

```csharp

private void SetProcessingContext(MyWorkspace.ForecastInput input)
{
    this.DistributionKeys.UseContext(input);
}

```


**Distribute values**  

This example shows how to use different Distribution Key APIs to distribute a total value to periods like rest of the year or year to date.
(The example shows all APIs used at the same time, which you should never actually do, because it will produce duplicate periodic values).

```csharp
private void Calculate(MyWorkspace.ForecastInput input)
{    
    foreach(var distributionKeyRule in this.DistributionKeys.FactoryProductionPrMonth.FilterByContext())
    {
        // Distribute to all periods defined in the distribution key 
        foreach(var periodicValue in distributionKeyRule)
        {
            // Use GetShare(...) to get the share of the periodic value relative to the total distribution key
            var monthProductionValue = input.YearTotal * distributionKeyRule.GetShare(periodicValue.Value);
            this.Output.Add(Amount: monthProductionValue, TransDate: periodicValue.Date);
        }

        // Distribute to all periods for the rest of the calendar year, starting from the specified date
        foreach(var periodicValue in distributionKeyRule.RestOfYear(input.TransDate))
        {
            var monthProductionValue = input.YearTotal * distributionKeyRule.GetShareRestOfYear(periodicValue.Value, periodicValue.Date);
            this.Output.Add(Amount: monthProductionValue, TransDate: periodicValue.Date);
        }

        // Distribute to all periods in the calendar year up until the specified date
        foreach(var periodicValue in distributionKeyRule.YearToDate(input.TransDate))
        {
            var monthProductionValue = input.YearTotal * distributionKeyRule.GetShareYearToDate(periodicValue.Value, periodicValue.Date);
            this.Output.Add(Amount: monthProductionValue, TransDate: periodicValue.Date);
        }

        // Distribute to all periods defined in the distribution key, starting with and including) the specified date
        foreach(var periodicValue in distributionKeyRule.FromDate(input.TransDate))
        {
            var monthProductionValue = input.YearTotal * distributionKeyRule.GetShareFromDate(periodicValue.Value, periodicValue.Date);
            this.Output.Add(Amount: monthProductionValue, TransDate: periodicValue.Date);
        }
    }    
}
```
