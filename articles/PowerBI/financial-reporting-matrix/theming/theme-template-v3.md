The JSON definition below shows all properties of the Financial Reporting Matrix that can be themed, along with all valid values for each property.

A few things to note:
- \<empty> means empty string "" (two double quotes with no whitespace)
- All colors are specified using the hex color format #XXXXXX. For example #000000 is black. #someColor = use a hex color.
- If you import the visual from your Organizational store (not AppSource), you must change the visual id in the visualStyles section below to "financialreportingmatrixD8A502553641450F8EAEB9BA40B2166E_OrgStore"

```json
{
  "name": "Financial Reporting Matrix by Profitbase",
  "dataColors": [
    "#00338D",
    "#005EB8",
    "#0091DA",
    "#483698",
    "#470A68",
    "#6D2077",
    "#00A3A1",
    "#009A44",
    "#43B02A",
    "#EAAA00",
    "#F68D04",
    "#BC204B",
    "#C6007E"
  ],
  "visualStyles": {
    "financialreportingmatrixD8A502553641450F8EAEB9BA40B2166E": {
      "*": { "_fieldExamples": [{ "colorOption": { "solid": { "color": "#FF5733" } } }, { "fontFamilyOption": "Arial" }],
        "customColumns": [{ "width": 100 }, { "columnSeparator": "left | right | both | <empty>" }],
        "grid": [
          { "verticalGrid": false },
          { "verticalGridThickness": 1 },
          { "verticalGridColor": "" },
          { "horizontalGrid": false },
          { "horizontalGridThickness": 1 },
          { "horizontalColor": "" },
          { "rowPadding": 1 },
          { "fontFamily": "" },
          { "outlineColor": "" },
          { "outlineWeight": 1 }
        ],
        "downloadExcel": [
          { "show": false },
          { "iconPosition": "bottom right | bottom left | top left | top right" }
        ],
        "commenting": [
          { "show": false },
          { "iconPosition": "bottom right | bottom left | top left | top right" },
          { "headerTitle": "Row column | Column row | Row | Column" },
          { "automaticHideIcon": false },
          { "dateFormat": "MM/DD/YY | YY/MM/DD | DD/MM/YY | MM/DD/YYYY | DD/MM/YYYY | YYYY/MM/DD | DD-MM-YY | DD-MM-YYYY | MM-DD-YY | MM-DD-YYYY | DD.MM.YY | DD.MM.YYYY | MM.DD.YY | MM.DD.YYYY | MM.DD.YYYY LT | YYYY.MM.DD LT | DD.MM.YYYY LT | custom" },
          { "customDateFormat": "" },
          { "fontFamily": "" }
        ],
        "columnFormatting": [
          { "firstColumnWidth": 150 },
          { "firstColumnWidthStatic": 150 },
          { "width": 100 },
          { "isHidden": false },
          { "color": "" },
          { "backgroundColor": "" },
          { "columnSeparatorColor": "" },
          { "separator": "<empty> | left | right | both" },
          { "formatString": "<empty> | <Power BI format string> | custom" },
          { "customFormatString": "<Power BI format string>" },
          { "alignment": "<empty> | left | right | center" }
        ],
        "columnHeaders": [
          { "fontColor": "" },
          { "backgroundColor": "" },
          { "fontWeightBold": false },
          { "fontStyleItalic": false },
          { "outline": "<empty> | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right" },
          { "textSize": 8 },
          { "groupAlignment": "left | center | right" },
          { "alignment": "left | center | right" },
          { "wordWrap": true },
          { "verticalGrid": false },
          { "verticalGridColor": "" },
          { "verticalGridThickness": 1 },
          { "horizontalGrid": false },
          { "horizontalGridColor": "" },
          { "horizontalGridThickness": 1 }
        ],
        "columnExpansionSettings": [
          { "show": false },
          { "storeExpansionState": true },
          { "defaultColumnExpansion": false },
          { "expandToLevel": 1 }
        ],
        "rowHeaders": [
          { "caption": "" },
          { "captionFontColor": "" },
          { "captionBackgroundColor": "" },
          { "captionAlignment": "left | right | center" },
          { "defaultExpandRows": false },
          { "expandToLevel": 1 },
          { "fontColor": "" },
          { "backgroundColor": "" },
          { "outline": "<empty> | bottom | bottom double | top | top right | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "textSize": 8 },
          { "dateFormat": "<empty> | custom" },
          { "customDateFormat": "" },
          { "wordWrap": true }
        ],
        "values": [
          { "measurePlacement": "default | aboveColumns | inRows" },
          { "scalingValues": "none | thousands | millions | billions | trillions" },
          { "negativeValueFormatting": "minus | parentheses" },
          { "zeroValueFormatting": "dash | empty | zero" },
          { "noValue": "zero | empty" },
          { "formatString": "<empty> | <Power BI format string> | custom" },
          { "customFormatString": "<Power BI format string>" },
          { "decimalSeparator": "." },
          { "thousandSeparator": "," },
          { "useColumnsAsMeasures": false },
          { "handlingValues": "numeric | both" },
          { "fontColor": "" },
          { "backgroundColor": "" },
          { "bandedRowStyle": false },
          { "bandedStyleForHeaderColumn": false },
          { "bandedRowFontColor": "" },
          { "bandedRowBackgroundColor": "" },
          { "outline": "none | bottom | top | left | right | top bottom | left right | top bottom left right" },
          { "textSize": 8 },
          { "wordWrap": false }
        ],
        "subTotals": [
          { "rowGrandTotal": false },
          { "rowGrandTotalLabel": "Total" },
          { "rowGrandTotalStyle": "\"\"| bold | overline | underline | custom1 | custom2 | custom3 | custom4 | stylesSubtotal | stylesKPI" },
          { "rowGrandTotalPosition": "bottom | top" },
          { "showColumnSubtotals": false },
          { "columnSubtotalsPosition": "end | start" },
          { "columnTotalsLabel": "Total" },
          { "columnTotalsStyle": "\"\"| bold | overline | underline | custom1 | custom2 | custom3 | custom4 | stylesTotal"},
          { "valuesTotalLabel": "{{Value}} total" },
          { "perColumnLevel": false },
          { "showRowSubtotals": false },
          { "rowTotalsLabel": "Total" },
          { "rowTotalsStyle": "\"\"| bold | overline | underline | custom1 | custom2 | custom3 | custom4 | stylesTotal" },
          { "valuesRowTotalLabel": "{{Value}} total" },
          { "rowSubtotalsPosition": "end | start" }
        ],
        "rowExpansion": [
          { "storeExpansionState": true },
          { "indentSize": 10 },
          { "showExpandCollapseIcon": true },
          { "expandCollapseIconsSize": 8 },
          { "steppedLayout": false },
          { "showParentRowHeaderLabel": true },
          { "showParentRowHeaderLabelFromLevel": 0 },
          { "upwardsExpansion": false },
          { "useRowExpansionStyling": false },
          { "bold": false },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "hideEmptyRows": [
          { "show": false },
          { "alwaysShowCustomRows": true },
          { "alwaysShowJSONRows": true },
          { "hideCondition": "" }
        ],
        "hideEmptyColumns": [
          { "show": false },
          { "alwaysShowCustomMeasures": true }
        ],
        "raggedHierarchy": [
          { "compressDescendants": false },
          { "hideBlanks": false }
        ],
        "webUrl": [
          { "show": false },
          { "showUrlIcon": false },
          { "color": "" }
        ],
        "stylesTotal": [
          { "bold": true },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesSubtotal": [
          { "bold": true },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesKPI": [
          { "bold": true },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesCustom1": [
          { "bold": false },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesCustom2": [
          { "bold": false },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesCustom3": [
          { "bold": false },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesCustom4": [
          { "bold": false },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesCustom5": [
          { "bold": false },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesCustom6": [
          { "bold": false },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesBold": [
          { "bold": true },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "marginTop": 0 },
          { "marginBottom": 0 },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesOverline": [
          { "bold": false },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          { "outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ],
        "stylesUnderline": [
          { "bold": false },
          { "fontFamily": "" },
          { "fontStyleItalic": false },
          { "fontSize": 8 },
          { "color": "" },
          { "background": "" },
          {"outline": "\"\" | bottom | bottom double | top | top bottom | top bottom double | left | right | left right | top bottom left right"},
          { "outlineThickness": 1 },
          { "outlineColor": "" }
        ]
      }
    }
  }
}

```
