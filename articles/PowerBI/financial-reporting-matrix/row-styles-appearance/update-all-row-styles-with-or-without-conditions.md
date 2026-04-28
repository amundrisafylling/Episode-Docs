You can customize the appearance of all rows at once, or use conditions to only apply to some rows.

To customize all row, perform the following 4 steps:

1. Ensure you are in Edit mode.
2. Right click above the row header
3. Select the style you want to apply
4. Write the condition to chose which rows you want to apply the style to (optional)


![image](https://user-images.githubusercontent.com/82056309/175512546-25de8e6d-ba4a-4672-b511-bf2417b06a30.png)


**Now everything** has a grey background, because that's how style Custom1 has been defined in this example:
![image](https://user-images.githubusercontent.com/82056309/175512815-535fe9db-4f7b-4bec-8217-1ac8641ad9ec.png)


**Add a condition**, like: "RowLevel()==1" and the style will only be applied to rows on level 1:
![image](https://user-images.githubusercontent.com/82056309/175513088-fb855b43-6c6f-4e38-b26c-8d1093152b66.png)


**You can also reference** the value of other columns. For instance, only apply the style where the value of "Is Cost" is greater than 0:

![image](https://user-images.githubusercontent.com/82056309/175514705-238c9db0-ae35-4395-a2f6-1ac3b9c9c193.png)

Using && or || will allow you do add multiple conditions at once.

**Then you can hide** the "Is Cost" - column, so it doesn't show in the report:
![image](https://user-images.githubusercontent.com/82056309/175514959-5a16685f-5431-4d27-af14-d2208386b990.png)
