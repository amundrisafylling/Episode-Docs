# AutoTransaction.FilterByContextDistinctByTypeField

Returns the Auto Transactions having keys matching the key(s) of the data source input row currently used as context, in addition to also filtering by the `Auto Transaction type` property if specified. If you have specified the `Auto transaction type` property, you must use this API to avoid the possibility of getting multiple matches pr Auto Transaction type.  
Note that the returned set includes rows matching by "*" / "All level" as well as items having fully qualified matches.

## Example

**Dimension X**  
```md
All  
|-- A  
|---- A.1  
|-- B  
|---- B.1  
```

**Dimension Y**  
```md
All  
|-- T  
|---- T.1  
```

**MySet (Auto Transactions)**

| X    | Y   | Value  | Required |
|------|-----|--------|-----------|
| *    | *   | 100    | Phone     |
| A    | T   | 200    | Internet  |
| A    | T   | 130    | Phone     |
| A.1  | T.1 | 300    | Car       |
| A.1  | T.1 | 150    | Phone     | 

Note the last row, where you want a different value for Phone than the default value

```dos

input = { X = "A", Y = "T" }
MySet.UseContext(input);
...
...
MySet.FilterByContextDistinctByTypeField() will return two matches:  
(A, T, 200, Internet)   
(A, T, 130, Phone)  

**************************************************************************************************

input = { X = "A.1", Y = "T.1" }
MySet.UseContext(input);
...
...
MySet.FilterByContextDistinctByTypeField() will return three matches: 
(A.1, T.1, 150, Phone)  
(A.1, T.1, 300, Car)  
(A, T, 200, Internet)  

**NOTE!!**
MySet.FilterByContext() will return FIVE matches, because it does not filter distincty by Type: 
(A.1, T.1, 150, Phone) 
(A.1, T.1, 300, Car) 
(A, T, 200, Internet) 
(A, T, 130, Phone)
(*, *, 100, Phone)
```

### Example 

This example shows how to create one output transaction pr employee benefit for the given context, _not including_ fallback values.

```csharp
// Returns which employee benefits to generate for the given context.
foreach(var autoTrans in this.AutoTransactions.EmployeeBenefits.FilterByContextDistinctByTypeField())
{
    this.Output.Add(AccountID: autoTrans.TargetAccountID, Amount: amount * autoTrans.Factor);
}
```


#### Continue reading

To understand more about how the `FilterByContextDistinctByField` API works, read about:  
[Set lookups](../set-lookups.md)