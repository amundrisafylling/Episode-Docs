Right click any row in Edit mode, and select "Set row options":

![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/b0763102-58ce-47b2-bc7a-6610f81074ff)

It currently has two options:
1. Allow expand/collapse of row
2. Is Cost

More options will be added here in future releases.


**Allow expand:**

This will allow you to turn ON or OFF expansion for individual rows, and now also specify if a row is cost or not.

**Is Cost:**

If you tick the "Is cost" box, the row will get a value of 1, which can be referenced using "Row().cost". This will return 1 for all rows where the box has been ticked.


![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/c6f67163-ce6e-4b1c-96cb-4f238677080c)

To see and validate the "Is cost" value per row, you can add a custom column and write "Row().cost" to extract the values.

![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/0528d167-9a3a-4107-a4fc-4028504a0165)


You can use these values in formulas and conditional formatting, like this example:
![image](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/assets/82056309/b9e067b3-f279-43bf-b7cc-de33fc1decbe)
