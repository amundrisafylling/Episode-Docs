### Extract data from computed property
If you need to apply (complex) business logic to compute which property to read from a JSON document, use a [Function](../built-in/function.md) and the .NET JSON APIs to parse and extract the specific property you want to read.
The Function takes the original JSON document as input and returns the new value to read as shown below.

```csharp
private string GetData(string originalJsonDocument)
{
   string pathToJsonProperty = "Company.Finance"; // Computed by your business logic

   // Parse the JSON string and drill to the target property before returning its string representation.
   var rootElement = JsonDocument.Parse(originalJsonDocument).RootElement;
   var pathSegments = options.RootPath.Split('.', StringSplitOptions.RemoveEmptyEntries);
   foreach (var segment in pathSegments)
   {
      if (rootElement.ValueKind == JsonValueKind.Object && rootElement.TryGetProperty(segment, out var childElement))
      {
         rootElement = childElement;
      }
      else
      {
         throw new Exception($"Root path '{pathToJsonProperty}' not found in JSON document.");
      }
   }

   return rootElement.GetRawText();   
}
```

```json
{
   "Company": {
      "Finance:" [
         {
            "EntityType": "Budget",
            "Amount": 100,
            "AccountID": 3020
         },
         {
            "EntityType": "Budget",
            "Amount": 200,
            "AccountID": 3010
         }
      ]
   }
}
``` 