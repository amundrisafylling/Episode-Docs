# Track

Sends diagnostics to Azure Application Insights, including a message, custom properties, severity level, and an optional exception.

![img](../../../../images/flow/azure-application-insights-track.png)

**Example** ![img](../../../../images/strz.jpg)  
This example shows the Track action used in a Catch path to log an exception and diagnostic message to Azure Application Insights. 

## Properties

| Name                    | Required | Description                                                                 |
|-------------------------|-----------|-----------------------------------------------------------------------------|
| Title                   | No | A descriptive label for the action.                                         |
| Connection              | Yes | Azure Application Insights [connection](connection.md) used to authenticate and connect.     |
| Message                 | Yes | The diagnostics message to log.                                             |
| Properties              | No | Key-value telemetry properties to include with the message.                 |
| Include system properties | No | Include Flow/job/system context properties with the telemetry entry.        |
| Severity                | No | Diagnostics severity,  (Verbose, Information, Warning, Error, Critical). Severity controls how the telemetry entry is categorized and filtered in Azure Application Insights.     |
| Exception               | No | An exception object to attach to the telemetry entry (if available).        |
| Description             | No | Additional notes or comments about the action or configuration.             |