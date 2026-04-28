
_available from v8.1.x_

Turned on in the format pane:

![image](https://github.com/user-attachments/assets/a027f5ca-b3ac-47e2-a6f2-7de8c188e87d)







Option | Description
-- | --
Icon position | Chose where the icon should appear in the visual
Date format | Select format for date stamp on comments
Comment title options | Select fields to use in the comment title
Column header level | Select the headers you want to include in the comment title


***
Once the commenting option is turned ON, the icon will appear:

![image](https://github.com/user-attachments/assets/46248f89-640a-4282-a05e-341b7ae589f5)

Click on the icon to start commeting:

![image](https://github.com/user-attachments/assets/d1be947c-7845-4d90-8a13-af162bda4025)

You can add comments by selecting a cell in the matrix. The Row and Column headers for that cell will appear as the comment header, along with the cell value.

On each comment, you are able to add replies:

![image](https://github.com/user-attachments/assets/30de8cbd-0382-49f3-a668-607875b7015f)

By clicking on the back-arrow next to the comment header, you will see the full list of comments, based on your slicer selection:

![image](https://github.com/user-attachments/assets/ec8714b8-28b8-4f52-995c-de1445816007)

![image](https://github.com/user-attachments/assets/af883440-b492-441e-8640-adc6cfecf1b5)


When closing the comments field, the visual will show a red triangle in the top right corner of cells that contain a comment.
The comment icon will also show a number illustrating how many comments are available in the current filter context.

![image](https://github.com/user-attachments/assets/3a17fbe5-c9be-42b7-b00c-b32a75d5a923)


All comments can be edited or deleted.
Each comment will also display how many replies that has been added to the comment:

![image](https://github.com/user-attachments/assets/9fe124ff-fc11-437d-964c-c7d0a0c789bf)


***

## Formatting and export to excel
_available from v8.2.x_

Our comments now support formatting. There are familiar formatting options available within the comment box. Such as Bold, Italic, Underlined, Font color, Highlight color, and also comment box background color.

The color picker will remember the last selected colors to make it easy to reuse the same colors across comments.

Use cases:
1. One color for each department.
2. One color for each report section (Green - income, Red - Costs)
3. Criticality (Green - OK, Red - Warning)

![image](https://github.com/user-attachments/assets/18c2c598-4d95-4110-a365-69cad75ec141)


Comments will be exported to Excel and added as Notes.
Comment background color and font highlighting is not exportable. Other formatting is:

![image](https://github.com/user-attachments/assets/516c1895-eda8-4f4f-86b7-be925fb2470e)


## Add comments to headers:

_available from v8.2.x_

![image](https://github.com/user-attachments/assets/1af51379-33e8-47d8-93e5-ce8254ffa674)




***

## Limitations

* Comments are stored inside the visual, and not written to any data source. They are not re-usable across other visuals.
* Comments can only be added in Power BI Desktop and Power BI Service when editing the report, as the comments needs to be saved as part of the reports.
