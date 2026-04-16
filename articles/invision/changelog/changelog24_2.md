# Changelog 2024.2

Here are the most important new features and improvements added to Hypergene InVision in the latest release. You should also check out the Hypergene Flow August 2024 update to see how InVision can be automated using Flow.

<br/>

### Workbook 

We’ve added numerous improvements to Workbooks. Most notable is probably the Workbook header which has been redesigned to include tools such as feedback, setting options and custom content.

#### Workbook header redesign

The Workbook header has been redesigned by moving the logo to the left and moving all the icons (help, options, etc) from the page navigation bar to the Workbook header. 

![img](https://profitbasedocs.blob.core.windows.net/images/wb-header-redesigned.png)

<br/>

#### Feedback

We’re always looking to improve so any [feedback](../docs/header/feedback.md), good or bad, is valuable to us. You can now easily submit feedback to us by pressing the Feedback button in the Workbook header and express your opinion.

![img](https://profitbasedocs.blob.core.windows.net/images/feedback2.png)

<br/>


#### Customizable app header  

You are now able to add custom components, such as buttons or Forms, to the [Workbook App Header](../docs/header/header-section.md). The custom app header components have the same capabilities as regular Workbook components, so they can interact with any functionality in the Workbook itself. Note, however, that the height of the Workbook header limits the custom components to a maximum height of 32 pixels.

![img](https://profitbasedocs.blob.core.windows.net/images/cust-app-header.png)


<br/>

### JavaScript APIs

We’ve added new JavaScript APIs which makes it easy to programmatically:

* [Show message boxes](../docs/workbooks/programmingmodel/apis/dialog-service-apis.md)
* [Show toast notifications](../docs/workbooks/programmingmodel/apis/toast-notification-apis.md)
* [Call HTTP endpoints](../docs/workbooks/programmingmodel/apis/http-apis.md)
* [Run Flows](../docs/workbooks/programmingmodel/apis/flow-apis.md)
* [Get filter states](../docs/workbooks/programmingmodel/apis/filter-apis.md)
* [Publish messages to other open Workbooks](../docs/workbooks/programmingmodel/apis/message-hub-apis.md)
* [Translate text to the current user language](../docs/workbooks/programmingmodel/apis/localization-apis.md)

These new APIs are available for both Forms and Workbook component event handlers and conditions.

![img](https://profitbasedocs.blob.core.windows.net/images/ch-log-24-1.png)

<br/>

### Forms

**Text control**
We’ve added a new Text control for displaying simple text. The main difference between the Text and Label control is that the Label control has a default bold font, while the Text control default font is normal.

**Tab control new API** to **activate tab**
You can now programmatically change the active tab of a Tab control by calling the activateTab(…) API.

```
this.controls.myTab.activateTab('Tab2');
```

**New Spinner control**
The new Spinner control enables you to display a spinner while long running operations, such as executing Flows or Web Functions.

<br/>

### Tab control

**Tab activation API**

You can now programmatically change the active tab of the Tab control Workbook component using the Execute Expression action and call *TabItem("tab name").activate()* to activate the named tab; 

![img](https://profitbasedocs.blob.core.windows.net/images/ch-log-24-1.png)

<br/>

### Dataflow
We’ve added support for executing long and short-running Flows from InVision Dataflows. This makes it easier to replace Dataflow in favor of Flow for running business logic, by gradually moving over.


<br/>

### Performance improvements

* Saving data in spreadsheets (Tables and Worksheets) is now faster, in some scenarios up to 200%.
* Loading spreadsheets with hidden dropdown columns is now much faster.

<br/>

### Bug fixes and enhancements

* Fixed issue with dependency tracking of Stored Procedures.
* Fixed issue with dependency tracking of objects used in Datastore Index and Partition scripts.
* Fixed issue with TableView row clicks, where the mouse up event raised a row click even if the mouse button was pressed down outside the row.
* Fixed rendering issue with reloading filter data, where the current selection was not reset so it did not reflect the actual filter selection.
* More detailed log information about issues encountered when Compound Views are created.
* Fixed issue that prevented materialization of Time Dimensions having localizations.

<br/>



<br/>

### See Also

- [Change Log 2025.4](changelog25_4.md)
- [Change Log 2025.3](changelog25_3.md)
- [Change Log 2025.2](changelog25_2.md)
- [Change Log 2025.1](changelog25_1.md)
- [Change Log 2024.4](changelog24_4.md)
- [Change Log 2024.3](changelog24_3.md)
- [Change Log 2024.2](changelog24_2.md)
- [Change Log 2024.1](changelog24_1.md)
- [Change Log 2023.7](changelog23_7.md)
- [Change Log 2023.6](changelog23_6.md)
- [Change Log 2023.5](changelog23_5.md)
- [Change Log 2023.4](changelog23_4.md)
- [Change Log 2023.3](changelog23_3.md)
- [Change Log 2023.2](changelog23_2.md)
- [Change Log 2023.1](changelog23_1.md)
- [Change Log 2022.5](changelog22_5.md)
- [Change Log 2022.4](changelog22_4.md)
- [Change Log 2022.3 pt 2](changelog22_3_2.md)
- [Change Log 2022.3 pt 1](changelog22_3_1.md)
- [Change Log 2022.2](changelog22_2.md)
- [Change Log 5.2](changelog52.md)
- [Change Log 5.1](changelog51.md)
- [Change Log 5.0](changelog5.md)
- [Change Log 4.1](changelog41.md)
- [Change Log 4.0](changelog40.md)
