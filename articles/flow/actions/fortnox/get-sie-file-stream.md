# Get SIE file stream

This action retrieves a [Standard Import Export (SIE)](https://sie.se/in-english/) file and returns it as a stream object. 
Use this action to retrieve opening/closing balances, transactions, vouchers etc. from Fortnox.

The Swedish **SIE (Standard Import and Export)** file format is an open, text-based standard for transferring accounting data between different software systems in Sweden, acting as a de facto standard for companies, accountants, and auditors to exchange financial information like balances, transactions, and account details, with different types (SIE 1, 2, 3, 4) for varying data levels.


![img](/images/flow/fortnox-get-sie.png)

<br/>

**Example** ![img](/images/strz.jpg)

The example above shows how a SIE file is read from Fortnox and parsed with the [Load SIE file](../sie/load-file.md). From the parsed result object's, one of the available DataReaders is  used to [insert data into an SQL Server table](../sql-server/insert-data.md).

<br/>

## Properties

| Name            | Required | Description            |
|---------------- | -------- | ---------------------- |
| Title           | Optional | The title or name of the request.                              |
| Connection      | Required | The [Fortnox Connection](./connection.md) used to make an authenticated request to the Fortnox REST API. |
| Dynamic connection | Optional | Use this option if you need to use a connection created by the [Create Connection](./create-connection.md) action. |
| SIE type        | Required | Specifies the SIE type (1-4). |
| Financial year index | Required | Index of the financial year. |
| Result variable name | Required | Name of the variable returning the file stream. |
| Description     | Optional | Additional notes or comments about the action or configuration. |

<br>

## Returns  
[Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream)

<br/>

## Related documentation

- [SIE file specification](https://sie.se/in-english/)
- [Fortnox SIE Rest API documentation](https://apps.fortnox.se/apidocs#tag/fortnox_Sie)