## Select where you want to place your measures
_(Available from v7.1)_

### Default:
* Default view is below column headers, where each measure repeats itself under each new column header name:

![image](https://user-images.githubusercontent.com/82056309/226594444-703c6060-3387-4e06-b64b-2357dfc72856.png)


***


### Above Columns:
* New view available is Above Columns, where each column header is repeated under each measure:

![image](https://user-images.githubusercontent.com/82056309/226594573-103da42b-fec2-421c-af34-7a40545982ee.png)

### Add column formula in "Measures above columns"

_available from v8.1.x_

With the layout "Measures above columns", you are now able to use the function "Add column formula":

![image](https://github.com/user-attachments/assets/6372062a-6833-4b90-bbd5-57d2c2f5d499)

The formula you create in the field will be shown in all columns below the measure.

![image](https://github.com/user-attachments/assets/d9b5b3bd-038e-46d6-af8d-c049890c468e)


***


### In rows:
_(Available from v7.2)_
* New view available where measures are listed in the rows:

![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/fee8345f-6a58-48f4-b0e7-e677e037f7fa)

![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/5f12646c-3c74-457f-99f4-33c1609773c7)



### Measure placement setting is found in the Values section of the Format pane:

![image](https://user-images.githubusercontent.com/82056309/226594843-9e401c53-fe22-4502-a96b-9d47f2451744.png)




## Important to note!

### Only one measure:
If you only add one measure, the view will look the same, both for _Default_ and _Above Columns_ because the measure name is not visible then:

![image](https://user-images.githubusercontent.com/82056309/226595339-90bd91b7-4d1b-43c3-aacc-9143f26c4fcb.png)

### Each Measure Placement has it's own set of Applied Steps:

If you apply steps in one Measure Placement, e.g. add custom rows, or apply conditional formatting. Those steps will only be applied in the Measure Placement they are made in.

If you later decide to change Measure Placement, from _Default_ to _Above Columns_, then those steps will no longer be active:

In Default Measure Placement, I have added a custom column, as you can see in the applied steps. The column itself i highlighted in Yellow:

![image](https://user-images.githubusercontent.com/82056309/226596548-4ec74b29-ef6c-482e-b456-c3daaf1509a3.png)

By changing Measure Placement to _Above Columns _ the column, and other applied steps, disappears:
![image](https://user-images.githubusercontent.com/82056309/226596727-3fe4f40c-bb68-4bd7-b764-990fd29f67bc.png)

By changing back to _Default_, it reappears:
![image](https://user-images.githubusercontent.com/82056309/226596939-ee83ebae-4f5e-4d38-860d-2fcb085a8841.png)

This is made by design, so please chose your layout before you start adding steps.
If not, you might have to do it twice.
