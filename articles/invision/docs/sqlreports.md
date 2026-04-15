
# SQL Reports

![pic](https://profitbasedocs.blob.core.windows.net/images/sqlScr.png)

InVision supports line and chart reports, and a single report can toggle between line and chart display mode.

Reports are created by defining one or more data sets using SQL queries and then mapping those data sets to chart and table reports.

InVision reports can read data from any SQL source, so you can use reports to view data from any SQL Server database in addition to the InVision databases.
<br/>

## Query Definitions

The data sets for the line and chart reports are created using standard SQL queries and [SQL direktives](sqlreports/dataqueries.md), called [Data Queries](sqlreports/dataqueries.md). A Report definition can contain multiple data sets used for displaying the same data in different ways. For example, you can use one data set for the chart and a different data set for the line report. Or you can use multiple data sets in the same chart and display then as different series.

The data sets are listed in the Data Sets list of the Report editor. To create a new data set, drag and drop a "**New Default Data Set**" from the _Data View Resources_ Toolbox onto the list.

Default queries for reading data from InVision table resources such as Data Stores and Views can be added by drag and drop resource objects from the Database Resources Toolbox onto the query editor.
<br/>

## Writing custom event handlers for Chart events

Hypergene InVision is using Highcharts for rendering charts. If you want to write custom event handlers for events such as when a user clicks a point in a series, or when the user hovers the mouse over a point, you should first read the documentation for Highcharts on how to handle the different types of events and what data is available to an event handler function when the event is raised.

Currently, InVision has a built-in event handler that can be applied to the Point Clicked event of a series. When the user clicks a point, the [ChartInteractionEvent](workbooks/components/reports.md) will be raised when the Report is displayed in a Workbook, passing along the x-value, y-value and the data object (row) that point represents. Any other Workbook component can subscribe to this event and use the event payload to do with as he pleases.

If you need to write a custom event handler for any of the events exposed by the Properties editor in the Chart Configuration screen, you can either write an inline function or provide the name of a function from a [JavaScript](javascript.md) defined in the solution. The example below shows how to create a custom event handler for the point clicked event of a series, which will raise the ChartInteractionEvent manually. It will also output the data object associated with the point to the browser console window.

    var mySolution;
    (function(mySolution){
        var myChartEventHandlers;
        (function(myChartEventHandlers){
            var myUtil = (function(){
                function myUtil(){
                }
                myUtil.onClick = function(){
                    console.log(this.dataObject);
                    this.series.chart.componentContext.eventDispatcher
                    raiseEvent('ChartInteractionEvent', {x : this.x, y :  this.y, row :
                    this.dataObject}, this.series.chart.componentContext.componentId);
                };
        return myUtil;
            })();
            myChartEventHandlers.myUtil = myUtil;
        })( myChartEventHandlers = mySolution. myChartEventHandlers ||
         (mySolution. myChartEventHandlers = {}));
    })(mySolution || (mySolution = {}));

To use this function as the event handler of the Point Clicked event of a Serie, enter the following value for the Point Clicked property of a chart serie:

```
func::mySolution.myChartEventHandlers.myUtil.onClick (Note the func:: designation at the start)
```

<br/>

## See Also

- [How to's](sqlreports/howto.md)
- [Reports](../docs/workbooks/components/reports.md)
- [Charts Formatting](sqlreports/chartformatting.md)
- [Data Queries](sqlreports/dataqueries.md)


## Videos

* [SQL Reports](../videos/sqlreports.md)
* [SQL Reports - Basics](https://profitbasedocs.blob.core.windows.net/videos/SQL%20Report%20Intro%20basics.mp4)
* [SQL Reports - Charts](https://profitbasedocs.blob.core.windows.net/videos/SQL%20Report%20Charts.mp4)
* [SQL Reports - ChartInteractionEvent](https://profitbasedocs.blob.core.windows.net/videos/SQL%20Reports%20-%20ChartInteractionEvent.mp4)