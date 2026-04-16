# Define Calculation Flow database output

Defines the target table and columns where the result of a Calculation Flow should be stored.

## Properties

| Name                 | Type                  | Description                                    |
|----------------------|-----------------------|------------------------------------------------|
| Object variable name | Yes | The name of the variable that holds the reference to the in-memory output store while the Calculation Flow runs. This is the name of the storage variable you will be referencing in code when you want to store a calculated record or value.  |
| Connection           | Yes | A valid [InVision Connection](../invision-connection.md).                   |
| Target table         | Yes | The table to store calculated values in.       |
| Target columns       | No | The columns to store the calculated values in, and to create the target data type. If you don't specify any columns, the target type contains all columns in the target table. **For performance reasons, it is recommended to specify the columns explicitly**. |
| Data mapping         | No | By default, cell values from the input is copied to cells in the output if the column names match. For example, the DepartmentID from the input is copied to the DepartmentID in the output / target. If you want to control this behavior, either because you don't want auto mapping or because the column names does not match (for example source equals AccID and target equals AccountID), you can specify the mapping explicitly. Specifying the mapping explicitly also improves startup performance of the Flow. |


### Data mapping

Defines the mapping between the columns in the data source and the columns in the target.

#### Data mapping properties

| Name                  | Description                                       |
|-----------------------|---------------------------------------------------|
| Data source column    | The name of the column in the [data source / input](read-calculation-flow-db-input.md) |
| Target column         | The name of the column in the target table        |
| Auto map data         | Specifies whether or not data is automatically copied from the input record to the output record when the output record is created in memory / code. Based on your use case, you will mostly want to enable this option for dimension columns, but disable it for measure / calculated columns. |


#### Example

In this simple example, we use a [Function](../../built-in/function.md) action to calculate a tax amount based on the `Amount` field from the input record, and the `TaxPct` parameter.
We have named our Object variable `Output`, and add a record with the calculated tax amount by calling `Output.Add(...)`. 

```csharp
public void CalcTax(MyWorkspace.Forecast_Input input)
{
    // Use the TaxPct parameter to find the tax percent for the Account from the input trans
    // This works because we have called Lookups.SetContext(...) earlier in the flow
    var taxAmount = (Lookups.Finance_Settings.TaxPct.GetValueOrDefault(1m) / 100.0m) * input.Amount;

    // We have added an lookup table called AccountMappings to the Flow. It holds the mapping between account types and the actual account ids
    var targetAccount = Lookups.AccountMappings.FirstOrDefault(map => map.AccountType == "TaxPayable")?.TargetAccountID;

    // Create an output transaction that will be stored in the database.
    // Note: If we did not explicitly specify the AccountID and TransDate fields below, they would be copied to the output record
    // from the input record - unless "Auto map data" was set to false in the Data mapping properties for those columns.
    Output.Add(AccountID: targetAccount, Amount: taxAmount, TransDate: input.TransDate);
}
```

<br/>

## Copy to DataTable
To create a DataTable from the output collection, call the ToDataTable() method on the collection instance.
You can do this inside a [Function](../../built-in/function.md), or with the [Execute object method](../../built-in/execute-object-method.md) action.

The main use case is to pass calculation results from one Flow to another directly, without writing to the database as an intermediate step.  

```csharp
// Example using a Function to create a DataTable from the data in the output collection. 
public System.Data.DataTable ConvertOutputToDataTable()
{
    return this.Output.ToDataTable();    
}
```
 
