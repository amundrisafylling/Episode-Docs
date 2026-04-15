
# Scheduled Execution

Use the **Data Flow Scheduler** to schedule executions of Data Flows.

The Data Flow Scheduler is opened from the **Application Menu** -> **Data Flow** -> **Scheduler**. 
<br/>

**Scheduled execution of parameterized Data Flows.**

After you have created a scheduled job, you can edit it to specify arguments. When adding arguments, you must specify the parameter name that you want the argument to apply to.


<br/>

## Scheduling Data Flow Execution for InVision 2.7 and earlier

Data Flows can be executed from the command line by running dfcmdutil.exe located in the InVision Worker Service install folder.

To schedule the execution of a Data Flow, you use a task scheduler, such as SQL Server Agent or Windows Task Scheduler, to run dfcmdutil.exe by providing the id of the data flow as argument to the process.

The Id of the Data Flow can be obtained by right clicking the Data Flow node in the **Solution Explorer** and choosing "**Copy to Clipboard**". 

To execute a Data Flow from the command line, run dfcmdutil.exe using the following syntax:

    dfcmdutil.exe /run < dataflowid >

**Example**

Executing a Data Flow having id «updatesales»  
```dos 
dfcmdutil /run updatesales
```

<br/>

## Scheduled execution using SQL Server Agent

Scheduled execution of a Data Flow using SQL Server Agent can be set up as a job running a .bat-file using the xp_cmdshell command. This section shows an example of how this can be set up.

1.	Create a .bat-file for executing the Data Flow. The .bat-file can be placed anywhere as long as it’s possible to execute it using xp_cmdshell. 

 Add the following instructions to the file. 
 
     pushd <path to Hypergene InVision Worker>
     call dfcmdutil.exe /run <dataflowid>
     popd

2.	Create a SQL Server Agent Job and add a step to execute ``xp_cmdshell <.bat-file>``. 


**Example** 


* Hypergene InVision in installed in folder C:\Program Files (x86)\Profitbase\Hypergene InVision\Worker 1 on server «app01».

* Schedule1.bat is created in folder C:\Profitbase\Jobs

* The Id of the Data Flow to schedule is "dataflow1";

  1.	Edit Schedule1.bat to contain the following commands

            pushd «\\app01\c$\Program Files (x86)\Profitbase\Hypergene InVision\Worker 1»
            call dfcmdutil.exe /run dataflow1 
            popd

  2.	Create a SQL Server Agent Job containing a step with the following command:

            xp_cmdshell c:\Profitbase\Jobs\schedule1.bat


## Videos

* [Data Flow](../../../videos/dataflows.md)
* [Execute from Workbook with arguments](https://profitbasedocs.blob.core.windows.net/videos/Data%20Flow%20-%20Execute%20from%20Workbook%20with%20arguments.mp4)
* [Execute Using dfcmdutil Command Line Tool](https://profitbasedocs.blob.core.windows.net/videos/Data%20Flow%20-%20Execute%20using%20dfcmdutil%20command%20line%20tool.mp4)