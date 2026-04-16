# PdfDocumentElement
###### Namespace: Profitbase.Flow.Extensions.Adobe

Represents an element in a [PdfTree](pdf-tree.md) returned from the [Extract content from PDF as document tree](../extract-content-from-pdf-as-object-tree.md) action.

<br/>

## Properties
| Name            | Type              | Description                    |
|-----------------|-------------------|--------------------------------|
| ElementType     | string            | The type of element in the document, for example `Table`, `TR`, `TD`, `P`. |
| Value           | string            | The value of the element.  | 
| Page            | int               | The page that the element belongs to. |
| Children        | List&lt;PdfDocumentElement&gt; | The children of this element (if any). |
| Parent          | PdfDocumentElement| The parent `PdfDocumentElement` of this element. This property is null for the root (Document) element. |

<br/>

## Methods
| Name                      | Description                            |
|---------------------------|-----------------------------------------|
| Ancestors()               | Returns an [IEnumerable](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)&lt;[PdfDocumentElement](pdf-document-element.md)&gt;. Enumerates the ancestors of this element up to the document root, starting with the immediate parent of this element. |
| Descendants()             | Returns an [IEnumerable](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1)&lt;[PdfDocumentElement](pdf-document-element.md)&gt; Enumerates all descendants of this element in breadth first order. |

<br/>

## Example - use Descendants()
This example shows how to extract the `Compute SUBTOTAL` from the sample invoice below.  
It first finds the table containing the invoice lines, then finds the table row containing the "Compute" row header, and then  
finds the 4th cell (.Children[3]) and picks the Value from cell object.

![Snowflake Sample Invoice 2](/images/flow/snowflake-sample-invoice-2.png)

```csharp

// PdfTree pdfTree = ...from an "Extract content from PDF as document tree" action

// Find the table element containing a (descendant) cell with the heading (value) "SERVICE".
var serviceDetailsTable = pdfTree.Where(element => element.ElementType == "Table" && element.Descendants().Any(c => c.Value == "SERVICE")).FirstOrDefault();

// Locate the row containing the "Compute" row header.
var computeRow = serviceDetailsTable.Descendants().Where(c => c.Value == "Compute").First().Parent.Parent;

// Pick the value of the element in the 4th (Children[3]) cell (.Children[0]). 
// Remember that the value is not stored in the cell itself, but rather in a nested child element of the cell.
var subtotalComputeText = computeRow.Children[3].Children[0].Value;

// The amount is on the following format: $24.89
var subtotalCompute = double.Parse(subtotalComputeText, NumberStyles.Currency, CultureInfo.CreateSpecificCulture("en-US"));

```
