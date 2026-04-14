# Unescape unicode characters

Unescapes unicode characters in a string, so that for example `Europa s\u00f8r` becomes `Europa sør`.

A typical use case for this action is when processing raw JSON returned from HTTP APIs, and the returned JSON string may contain unicode escaped characters.

![img](/images/flow/unescape-unicode-characters.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow demonstrates how Unescape Unicode characters converts escaped Unicode sequences (for example \u00E5, \u00F8, \u00E6) into readable characters. The flow [takes](../json/create-json-file-as-byte-array.md) an input string containing escaped Unicode values, processes it using the **Unescape Unicode characters** action, and outputs a human-readable string that is than [saved](../postgresql/insert-data.md) to the database. This is typically used when handling JSON, API responses, or encoded text to ensure correct display and further processing of international characters.
<br/>

## Properties
| Name                 | Required | Description                                           |
|--------------------- |-----------|-------------------------------------------------------|
| String to unescape   | Required  | A string that may contain escaped unicode characters. If the string is null / empty, or does not contain escaped unicode characters, no operation is performed. |
| Output variable name | Required  | The name of the variable containing the unescaped string. |

<br/>

## Returns
[String](https://learn.microsoft.com/en-us/dotnet/api/system.string) containing unescaped unicode characters.  
Note that if the original string does not contain escaped unicode characters, the original string is returned. 

#### Example
The example below shows a JSON string before and after unicode characters have been unescaped.  

**Before**  
```json
{
    "code": "EU-S",
    "displayName":"Europa s\u00f8r"
}
```

**After**  
```json
{
    "code": "EU-S",
    "displayName":"Europa sør"
}
```