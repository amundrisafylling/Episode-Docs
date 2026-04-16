
#### Running Flows from the Designer

To run a Flow from the Designer, click the "Run" button in the application menu. 

![Flow Run Button](/images/flow_run_button.png)

If you expect the Flow to take more than 300 seconds to complete (5 minutes), you need to switch the `Development execution type` property to `Long running`, or else it will time out and terminate prematurely.   

>[!NOTE]
> The Long-running setting only applies when running the Flow from the Designer. When executing from 3rd party clients, use the appropriate [Run](../../api-reference/execute-flow/run.md) or [Submit](../../api-reference/execute-flow/submit-long-running.md) APIs.

![Flow Long Running Option](/images/flow_long_running_option.png)