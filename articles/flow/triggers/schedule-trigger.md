# Schedule trigger

Configures the Flow to be triggered on a schedule.

<br/>

![sch tr](/images/flow/scheduled-trigger.png) 


**Example**![img](/images/strz.jpg)  
This flow runs on a scheduled basis and performs automated file cleanup on an FTP server. At each scheduled interval, it [retrieves](../actions/ftp/get-file-names.md) a list of files from a specified directory, checks [whether](../actions/built-in/if.md) each file is older than 7 days, and [deletes](../actions/ftp/delete-file.md) those that meet the condition. This helps keep the FTP directory tidy by automatically removing outdated files.

<br/>

## Properties 

| Name                 | Required | Description                         |
|----------------------|----------|-------------------------------------|
| Title                |          |                                     |
| Schedule           | Required | Configure the frequency of the trigger.       |
| Payload | Optional | Define available data when the flow starts.   |
| Output data type | Optional | Select the datatype of the trigger output. |
| Output variable name | Optional | Name of the variable containing the data. |
| Disabled          | Optional | Boolean value indicating whether the trigger is disabled (true/false). |
| Description          | Optional |  Additional notes or comments about the trigger's purpose or configuration. |

<br/>

## Returns

This trigger returns a single variable with the specified name and Output data type. 

![img](../../../images/flow/schedule-trigger-output-type.png)
<br/>

## Step by step
<br/>

1. Add the Trigger.

<br/>

![p](https://profitbasedocs.blob.core.windows.net/flowimages/schedule_trigger_1.png)

<br/>

2. Choose the type of trigger from the library.

<br/>

![p](https://profitbasedocs.blob.core.windows.net/flowimages/schedule_trigger_2.png)

<br/>


3. Set up the properties.

<br/>

![p](https://profitbasedocs.blob.core.windows.net/flowimages/schedule_trigger_3.png)

<br/>

![p](https://profitbasedocs.blob.core.windows.net/flowimages/schedule_trigger_4.png)

<br/>