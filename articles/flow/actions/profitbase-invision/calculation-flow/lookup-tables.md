# Lookup tables

Lookup tables provide support for looking up values based on one or more keys. They are often used to define parameters for calculations, for example VAT, tax percent, currency exchange rates, and so on.
Technically, a Lookup table object is made up of `Keys` and `Values`, where the Keys are used to find the parameter value(s) to use in calculations. 

## Properties  

| Name         | Required | Description                                                |
|--------------|------------------|------------------------------------------------------------|
| Key columns  | No | All Lookup tables must have at least one logical key unless you only want to run manual lookups. If no primary key is defined on the table in InVision, or you want to use a different set of columns to make up the key, you can specify the key manually here. |
| Data         | No | Specifies the fields / columns from the Lookup table that you want to use for calculation parameters and other types of business logic. By default, all non-key columns are automatically available.                                                   |
| Key mappings | No | Use this option to define explicit mapping between the `Key columns` and the (corresponding) columns in the data source when names does not match. Flow determines which Auto Transactions to use by comparing the values in the `Key columns` to the corresponding columns in the input row from the data source. If not specified otherwise, it matches against columns with the same name. If you need a different behavior, you need to specify the mapping between the keys explicitly. |
| Options       | No | **Disable caching**: Enable this option if you are _generating_ the data in the Lookup table using a custom SQL script. When generating data into a table using a custom SQL script, InVision will not be able to detect the change and notify Flow to invalidate its cache. You can also use the [Remove InVision object from cache](../../built-in/remove-invision-object-from-cache.md) action to programatically evict the table from cache.  |

---

## Example

An Lookup Table definition for made-up product fees by state may look like this: 

**Product Fees**

| State             | Product            | Fee                    |
|-------------------|--------------------|------------------------|
| United States     | All                | 14.1 %                 |
| Alaska            | Bikes              | 8 %                    |
| California        | Skates             | 12.6 %                 |
| Texas             | Backpacks          | 11.8 %                 | 

When an Lookup Table is used in a Calculation Flow, we want to resolve the `value(s)` based on the `key(s)`. In the table above, the keys are `Region` and `Product`, while `Fee` is the value. 

Keys in most Lookup Table are associated with dimensions, for example the Department, Account or Product dimensions. This means that the _values in the `Key` columns are `dimension members`_, such as department ids, regions, account ids, product ids or product groups. Because dimensions usually have a hierarchical structure, we can define parameters at a high level, and the values will apply to all descendants. If we need to define values at a more granular level, we can pick those specific members lower in the hierarchies and apply a different values to them.


In the table above, `(Californa, Bikes)` returns `14.1 %` because there is no exact mapping in the table, so California is resolved as a child of 'United States', and Bikes is a child of 'All'.  
`(California, Skates)` returns `12.6 %` because there is an exact mapping in the Lookup Table.  
`(Alaska, Bikes)` returns `8 %` because there is an exact mapping in the Lookup Table.  
`(Arizona, Skis)` returns `14.1 %` because neither Arizona nor Skis is in the table, but they are children of 'United States' and 'All' respectivly.  

<br/>

```csharp

// The member access statement 'Lookups.ProductFees.Fee' will return the Fee for the State and Product in context.
// This works because we have called Lookups.UseContext(...) earlier in the Flow, so it knows the which State and Product is in context from the current source transaction.
var taxAmount = (Lookups.ProductFees.Fee / 100.0) * input.Amount / 100.2;

// Map to account based on calculation type
var targetAccount = Lookups.AccountMappings.FirstOrDefault(map => map.AccountType == "TaxPayable")?.TargetAccountID;

// Create an output transaction that will be stored in the database
Output.Add(AccountID: targetAccount, Amount: taxAmount, TransDate: input.TransDate);

```

<br/>

## Using FromDate  
Data in Lookup tables such as finance settings is often related to date and time, for example tax periods, and interest payments. 

By convention, when a Lookup table contains a column named `FromDate`, the result of a lookup will be filtered based on the dates in this column by limiting the result to only include matches for rows having a date _greater or equal_ to the date specified when calling `LookupTable.UseTimeframe(...)`.

**To use FromDate as a condition in Lookup tables, you need to do the following:**
1) Add the FromDate column as a `Data` column. _Note! It cannot be a Key column, even if it's part of the primary key. Key columns are matched by equality, which is not how FromDate should be evaluated._
2) Set the current timeframe by calling `Lookups.UseTimeframe(...)` or `Lookups.MyTable.UseTimeframe(...)` in a Function. This must be done prior to doing a lookup as shown in the example below (You only need to call UseTimeframe when the date changes, not every time you want to do a lookup).


### Example using FromDate
```csharp
public void Calculate(ForecastInput sourceTransRow)
{
    Lookups.UseContext(sourceTransRow);

    // Call UseTimeframe to specify to Flow which date to use as a reference date when doing a lookup
    Lookups.UseTimeframe(sourceTransRow.TransDate);

    // Because Flow was told the reference date (by calling UseTimeframe) in the line above, 
    // you now get back the price of the product applicable for sourceTransRow.TransDate 
    var totalAmount = Lookups.ProductPriceByPeriod.Price * sourceTransRow.Qty;
}
```

<br/>

### Using Lookups inside libraries  
If you create a library of business logic (for example financial calculations) in C#, and you want to fetch data from Lookups from _within_ the library instead of having data passed _in_ as arguments, you need to use [Func](https://learn.microsoft.com/en-us/dotnet/api/system.func-2) delegates. Func delegates basically lets you define functions with one or more parameters that can return data. You can then pass the function itself to your library, and _call_ the function from your code to retrieve data from the outside.  

Below is a code example with a custom PaymentCalculator class that generates a payment plan based on a total amount, and payment settings coming from a Lookup table. The Lookup table contains the payment date and percentage of total amount pr legal entity and department.  

#### Example

![img](/images/flow/lookup-table-example-with-callback.png)  

##### 1. Your code  
The code below is typically defined in the [Custom Code](../../../flows/defining-custom-code.md) editor in a [Flowchart](../../../flows/flowcharts.md) (box 1. in the image above), or in your own .NET library.  
It defines a payment calculator that generates a list of payments from a `total amount` (input), and a list of due dates with percentages provided by calling the `GetPaymentPlan` Func delegate passing in the legal entity and department.  
This is just standard C# code, and is not specific to Flow in any way.   


```csharp
// Your code, for example defined in the Custom Code editor in a Flowchart, or in your own .NET library. 
public record Payment(decimal? Amount, DateTime DueDate);

public sealed class PaymentCalculator
{    
    public Func<string, string, IEnumerable<(DateTime DueDate, decimal? PaymentPct)>> GetPaymentPlan { get;set; }

    public List<Payment> CalculatePayments(string legalEntityId, string departmentId, decimal totalAmount)
    {
        List<Payment> payments = [];
        // Fetch the payment plan for the legal entity and department by calling the GetPaymentPlan Func
        foreach(var payment in this.GetPaymentPlan(legalEntityId, departmentId))
        {
            var paymentAmount = totalAmount * (payment.PaymentPct / 100.0m); // Assuming PaymentPct is a value between 0 and 100.
            payments.Add(new (paymentAmount, payment.DueDate));
        }

        return payments;
    }
}

```
##### 2. The callback that performs the lookup agains the Lookup tables  
Open the [Custom Code](../../../flows/defining-custom-code.md) editor and add a method like the example below. (Box 1 in the image above.)
It defines a method that can be called from the PaymentCalculator above, to retrieve data from Lookup tables (for example all types of finance settings).
You can name the method anything, but we're naming it GetPaymentPlan**Callback** by convention, because it's a method that's essentially passed as an argument (or property) to another method.

```csharp
// Add this code as Custom Code of the Flowchart.
// It declares a private function in the Flow that the PaymentCalculator can call (above) to get the payment plan settings for the given legal entity and department.
IEnumerable<(DateTime PaymentDate, decimal? PaymentPct)> GetPaymentPlanCallback(string legalEntityId, string departmentId) => 
{
    // Use the SetXXXContext methods to set the search scope before calling FilterByContext.
    // This will return a list of all rows from the underlying LookupTable, 'Payments', having data for the specified legal entity and department based on wildcard or hierarchical search (meaning data may be defined on an aggregated level instead of at the specific department level).
    foreach(var item in Lookups.Payments.SetLegalEntityIDContext(legalEntityId).SetDepartmentIDContext(departmentId).FilterByContext())
    {
        // Return a tuple with the payment date and pct        
        yield return (item.PaymentDate, item.PaymentPct);
    }
}

// You can alternatively use a standard LINQ expression to filter on an exact match for the legal entity and department using the Where()-method as shown below.
IEnumerable<(DateTime PaymentDate, decimal? PaymentPct)> GetPaymentPlanCallback_ExactMatch(string legalEntityId, string departmentId) => 
{    
    // This will return a list of all rows from the underlying LookupTable, 'Payments', having rows with exact match for legal entity and department IDs.
    foreach(var item in Lookups.Payments.Where(c => c.LegalEntityID == legalEntityId && c.DepartmentID == departmentId))
    {
        // Return a tuple with the payment date and pct        
        yield return (item.PaymentDate, item.PaymentPct);
    }
}
```

##### 3. Pass the lookup callback to your library   
The final step is to put the code below in a setup [Function](../../built-in/function.md) which is run **once** before looping over input transactions. (Annotated as box 2 in the image above.)   
It assigns the `GetPaymentPlanCallback` method defined above, to the GetPaymentPlan property of the calculator class.  
GetPaymentPlan can now be called from within the PaymentCalculator.CalulatePayments method to get a list of payments for a specific legal entity and department.

```csharp
// Optional: Create an instance of the PaymentCalculator if you have not already done this previously in the Flow.
this.paymentCalculator = new PaymentCalculator();

// Assign the GetPaymentPlanCallback method to the GetPaymentPlan property of the calculator.
this.paymentCalculator.GetPaymentPlan = GetPaymentPlanCallback;

```