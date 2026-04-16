# API

Specifies the endpoint of the writeback service.

When users edits and saves comments, the changes are sent to a service that writes back to the Direct Query data source used by the visual. If you try to edit and save data without specifying the API URL, you will get an error message.  

You will need a separate API endpoint for every visual in a report or dashboard (unless they use the same Direct Query data source).  

You have two options for creating a writeback service:  
1) Use Hypergene Flow. This is the easiest option, and only takes a few minutes to set up. This is demonstrated in the video below.
2) Create an Azure Function and implement the API for writing data to the data source yourself. If you choose this option, you will need a license for the visual.

<br/>

### Writeback payload
This section describes the data payload sent from the visual when a user saves their changes. Use this information if you plan to implement writeback manually using an Azure Function. If you're using Hypergene Flow, everything is handled automatically.  

```typescript
type WritebackPayload = {
    column: string,
    value: any,
    context: {[index: string]:any },
    userId?: string,
    timeZone: string 
}
```

#### Properties
| Name         | Description                    |
|--------------|--------------------------------|
| column       | The name of the column that contains the comments. |
| value        | The comments provided by the user.                 |
| context      | The columns and values that identify the row to update. |
| userId       | Depending on how [change tracking](./change-tracking.md) is configured, this is the OID or UPN of the logged in user.|
| timeZone     | The IANA timezone of the user. <br/><br/> If you use Hypergene Flow to handle writeback, you can ignore this property. Everything is handled automatically.<br/><br/>If you implement writeback manually using an Azure Function, you must use this property to convert any date/time values in the `context` property back to their original server values when using them in the update statement. This is because when Power BI _loads_ data to a report or dashboard, it automatically converts all dates to UTC relative to the user timezone, meaning that the date/time values on the frontend differs from the actual values stored in the backend database or semantic model. |

**Example**
```json
{
    "column": "Comments",
    "value": "Ahead of budget primarily due to lower material cost.",
    "context": {
        "DepartmentID": "P-PROD-M1",
        "ProductGroupID": "MAT-3211",
        "Period": "2025-03-01"
    },
    "userId": "user@corp.com",
    "timeZone": "Europe/Oslo"
}

```

### Writeback using Hypergene Flow  
This video shows how to configure the visual and do writeback using Hypergene Flow.

![video](https://www.youtube.com/watch?v=PAAViWwxLdA)