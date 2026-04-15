
# HTTP API

The Log API lets you fetch log information from Hypergene InVision for Ops and Log Analysis using tools such Splunk, Datadog and Logstash.

<br/>

## Calling the API

To call the API, you need an API Key.  
The API Key must be included in each request using a query string parameter or an HTTP header.

<br/>

**API Key in the query string**  
To send the API Key as part of the query, use the `api_key` query string parameter.  
**Example:** https://domain.com/api/v1/monitoring?api_key=KEY

<br/>

** API Key in a header**  
To send the API Key in a header, add a header with the name **x-api-key** and the corresponding API Key as value to the request.

<br/>

## Creating an API Key

To create an API Key, go to **Application Menu -> API Management -> Edit**. In the **Monitoring** tab, find an existing key or create a new one.

1. Click the Edit command under the API Management menu item.
2. Select the Monitoring tab.
3. Click the Add button.

<br/>

## API Definition

**[GET]** api/v1/monitoring

```
response:
[{
    rowid: string
    data: string
    level: string
    timestamputc: datetime
    logevent: string of type LogEvent (see below)
}]
```

**URL parameters**  
_fromDateTimeUtc_ (Optional)  
Use the fromDateTimeUtc to specify the lower bound timestamp of log entries to fetch.
The value must be on the format `yyyy.MM.dd HH:mm:ss`

_toDateTimeUtc_ (Optional)  
Use the toDateTimeUtc parameter to specify the upper bound timestamp of log entries to fetch.
The value must be on the format `yyyy.MM.dd HH:mm:ss`

_logEventType_ (Optional)  
Use one of the following values to fetch log entries of a specific log event type.  
`ApplicationError`, `ApplicationInfo`, `BackgroundAgentTask`, `DataFlowExecution`, `Fatal`, `InvalidCron`, `UserAccessWorkbook`, `StartingHostProcess`

_logLevel_ (Optional)  
Use one of the following values to fetch log entries of a specific log level.  
`Error`, `Information`, `Warning`, `Verbose`

<br/>

> **Example**

    https://domain.com/api/v1/monitoring?api_Key=YOUR_KEY&fromDateTimeUtc=2021.08.24 15:08:41&logLevel=Error&LogEventType=ApplicationInfo
