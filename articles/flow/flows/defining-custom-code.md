#### Defining custom code in Flowcharts

Defining Custom code is an advanced feature which enables you to write custom C# code that can be used in [Function](../actions/built-in/function.md) actions in a Flow. You can write custom code which can range from creating custom classes, to crafting simple helper functions that you can reuse throughout the Flow. Note that the custom code is not available to other Flows in the Workspace. When writing custom code, you have access to the entire .NET SDK class library, but you cannot use custom NuGet packages. If you need to use features that are not part of .NET, you must call an external API (such as an Azure Function) to do the work, and return the result to Flow.

To define custom code, select a Flowchart (click the canvas of the current Flowchart) and click `Custom code` in the `Properties panel`.

![Flowchart Custom Code](/images/flow/flowchart-custom-code.png)
