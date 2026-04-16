# Extract content from PDF as byte array

Extracts content from a PDF file and returns it as byte array. 
The input is provided as a stream or byte array (typically via a file read block). This action uses **Adobe PDF Services** to extract textual and structural content from PDF documents.

>[!NOTE]
>If you want to programatically query the document structure of a PDF document, consider using the [Extract content from PDF as document tree](./extract-content-from-pdf-as-object-tree.md) action instead.

![img](../../../../images/flow/extract-content-from-pdf-as-byte-array.png)

**Example** ![img](../../../../images/strz.jpg)  
This flow reads a PDF from cloud storage, extracts its content using Adobe PDF Services with the `JSON_Hierarchical` format, transforms the output, and stores it in a new file.

<br/>

## Properties

| Name            | Required |Description         |
|-----------------|----------|---------|
| fileContent   | Yes | Byte array of the PDF file to be extracted.     |
| outputFormat  | Yes | Defines the structure of the extracted result. Options: `JSON_Raw`, `JSON_Simplified`, `JSON_Hierarchical`. |
| fileData      | No | Name of the variable to store the extracted result. Defaults to `fileData`. |

<br/>

## Output format options

**JSON_Raw**
- Contains low-level layout and styling metadata such as bounding boxes, fonts, position coordinates, justification, line height, etc.
- Best for use cases where exact PDF layout reproduction or fine-grained analysis is needed.

**JSON_Simplified**
- Extracts only plain text, organized by page.
- Suitable for basic text search and lightweight parsing.

**JSON_Hierarchical**
- Outputs a tree structure reflecting logical document structure (`Document` -> `Page` -> `heading`, `paragraph`, `table`, etc.).
- Best choice for semantically meaningful documents like theses, reports, contracts.

### Examples

**JSON_Raw format**

```json
{
  "elements": [
    {
      "Bounds": [126.02, 315.34, 488.76, 358.76],
      "Font": {
        "family_name": "Times New Roman",
        "weight": 700
      },
      "Lang": "en",
      "page": 6,
      "path": "/Document/P[6]",
      "text": "Results: Results showed decrease in the intensity of the symptoms of Attention-Deficit/Hyperactivity Disorder...",
      "TextAlign": "Justify"
    }
  ]
}
```

**JSON_Simplified format**

```json
{
  "elements": [
    {
      "page": 6,
      "path": "/Document/P[6]",
      "text": "Results: Results showed decrease in the intensity of the symptoms of Attention-Deficit/Hyperactivity Disorder..."
    }
  ]
}
```

**JSON_Hierarchical format**

```json
{
  "elementType": "Document",
  "children": [    
    {
      "elementType": "Page",
      "page": 1,
      "children": [        
        {
          "elementType": "Sect",
          "page": 1,
          "children": [
            {
              "elementType": "H1",
              "value": "Competitive Analysis",
              "page": 1,
              "children": []
            },
            {
              "elementType": "P",
              "value": "Our company’s market share in the travel industry has been steadily increasing since the introduction of our company in 2011, and currently hovers around approximately 15% of US sales, 10% of European sales, and 7% of Asian sales. We do believe, however, that increased marketing efforts are needed to maintain this growth, due to ever-increasing competition from other travel brands.",
              "page": 1,
              "children": []
            },
            {
              "elementType": "Figure",
              "value": "15% 85% Market Share: US Our Company Combined Competitors 10% 90% Market Share: Europe Our Company Combined Competitors",
              "page": 1,
              "children": []
            },
            {
              "elementType": "Sect",
              "page": 1,
              "children": [
                {
                  "elementType": "H2",
                  "value": "Market Share: Asia",
                  "page": 1,
                  "children": []
                },
                {
                  "elementType": "Figure",
                  "value": "7% 93% Our Company Combined Competitors",
                  "page": 1,
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    }    
  ]
}
```

<br/>

[!INCLUDE [](./__videos.md)]