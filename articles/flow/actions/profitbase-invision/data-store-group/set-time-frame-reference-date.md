# Set Time Frame reference date for Data Store Group

This action calls the InVision API to set the time frame reference date for a Data Store Group.
It is typically used when starting a new [InVision Work Process version](../../../../invision/docs/workprocess/workprocessversions.md), for example at the beginning of a new forecast cycle, to define the date from which the cycle applies.  
For instance, for a 12-month planning cycle starting in January 2025, the reference date would be set to January 1st 2025 (whether the planning cycle is 12 months or something else doesn't matter - it's just an example).

![Invision Store Group Set Time Frame Reference Date](/images/flow/invision-store-group-set-time-frame-reference-date.png)


**Example** ![Example](../../../../../images/strz.jpg)  
This flow sets the start date of a forecast cycle by defining the time frame reference date for a Data Store Group.

It retrieves the forecast configuration, applies the reference date to the selected Data Store Group, and then opens the corresponding Work Process version. This establishes the point in time from which all time-based calculations and periods in the forecast are evaluated.

<br/>


## Properties 

| Name         | Required | Description                    |
|--------------|---------------|--------------------------------|
| Connection   | Yes | A valid [InVision Connection](../invision-connection.md) used to execute the SQL script.  |
| Data Store Group | Yes | The ID of the Data Store Group in InVision that will be rolled forward. | 
| Reference date | Yes | Specifies the start date for which the planning cycle applies. The value must be of type [DateOnly](https://learn.microsoft.com/en-us/dotnet/api/system.dateonly), [DateTime](https://learn.microsoft.com/en-us/dotnet/api/system.datetime) or [DateTimeOffset](https://learn.microsoft.com/en-us/dotnet/api/system.datetimeoffset). |