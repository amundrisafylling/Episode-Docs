To use the Premium features without getting a watermark, you need to buy a license.

### Purchasing and assigning Licenses (Starting at version 7.x)

* Purchase licenses directly through Microsoft AppSource [here](https://appsource.microsoft.com/en-us/marketplace/checkout/WA200000642?exp=ubp8&tab=Overview).


* Learn how to assign licenses [here](https://learn.microsoft.com/en-us/power-bi/developer/visuals/licensing-faq#how-do-we-assign-the-licenses-).



### Using the visual in Embedded Capacity or want an Enterprise License?


1. Get in touch with us on pbi.visuals@profitbase.com, and request a license for Power BI Embedded
2. In Power BI Desktop or the Online Editor, go to the **Format pane** and enter the license key

![](https://profitbasedocs.blob.core.windows.net/pbireportingmatrix/Register_License.png)

Note that if you download the visual directly from [https://profitbase.com/embed-licence-key-in-financial-reporting-matrix/](https://profitbase.com/embed-licence-key-in-financial-reporting-matrix/) and supply your license key, you do not need to enter the license manually every time you add the visual to a report or dashboard.

However, due to how Power BI works, if you want to **export** the visual to PowerPoint/PDF, you **have to** download from **AppSource**. In that case, you have no choice but to enter the license key every time you use the visual in a dashboard.

# Video showing how to insert license key:
![](https://github.com/Profitbase/PowerBI-visuals-FinancialReportingMatrix/blob/master/assets/Insert%20License.gif)

## Add your Licence key from table

_Available from version 9.0.0.0_

If you have an Enterprise or Embedded license key, you can now use the License bucket in the visual to supply the key directly from your data model. This allows for centralized storage of the key (e.g., in OneLake or a database). When your license key is renewed, you only have to update it in your centralized storage, and all connected visuals will automatically use the new key.

1. Ensure your license key is loaded into a table within your Power BI semantic model.
2. Select the Financial Reporting Matrix visual on your report canvas.
3. In the Build visual pane, locate the License bucket.
4. Drag and drop the data field containing your license key into the License bucket.


Example:
We have this table called license, having one column with one row. This table does not have any relationships to other tables in the semantic model.

<img width="488" height="91" alt="image" src="https://github.com/user-attachments/assets/8c2b57f5-a64a-424d-9479-95c05c5614a7" />



Simply drag the 'key' column into the License bucket:

<img width="326" height="761" alt="image" src="https://github.com/user-attachments/assets/83dcfe64-7144-48c6-a126-5b91e08f1c9c" />

When you need to renew the license key, you now only have to update the value in the table and all visuals will use the new license key.
