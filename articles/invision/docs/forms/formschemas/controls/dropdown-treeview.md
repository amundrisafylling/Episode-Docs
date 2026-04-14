# DropdownTreeView

Inherits from [Control](control.md).

A dropdown control that display selectable items as a tree (hierarchial) structure. The control supports multi-select, and selected item(s) are displayed in the dropdown's selected items tray.

## Properties
| Name            | Required | Description                      |
|-----------------|---------------|----------------------------------|
| Name            | Optional      | Specify the name to access the control API programatically, for example `this.controls.myDropdownTree.expandAll()` |
| MultiSelect     | Optional      | Whether or not the user can select multiple items. Default is false. |
| ItemsSource     | Required      | This is the collection of items displayed in the (dropdown) TreeView. The ItemSource can be a SetModel, List, or DimensionModel.<br/> If the ItemsSource is a SetModel or List, you must set the ItemId and ParentItemId to specify the parent-child relationship between the items in the TreeView. <br/> If the ItemsSource is a DimensionModel, you should NOT specify the ItemId, ParentItemId, or DisplayMember. | 
| SelectedValues | Required       | The collection of selected values. This needs to be bound to a collection object, so you often need to create a custom ViewState for this purpose - using the `addViewStateModel(name, value)` API. |
| ItemId                | Specify the name of the field in the ItemSource that represents an item. If the ItemSource is a SetModel or List, you must set the ItemId.<br/> If the ItemSource is a DimensionModel, this property is ignored. |
| ParentItemId          | Specifies the name of the field in the ItemSource that represents the parent of an item. If the ItemSource is a SetModel or List, you must set the ParentItemId.<br/>If the ItemsSource is a DimensionModel, this property is ignored.|
| DisplayMember         | Specifies the name of the field in the ItemSource that should be displayed as the text of an item in the TreeView. If this field is not specified, the ItemId field is displayed in the tree.<br/>If the ItemsSource is a DimensionModel, this property is ignored. |
| ItemSelected          | The function to call when an item in the TreeView is selected. The argument passed to the function is the data object from the ItemsSource displayed in the TreeView which is being clicked / selected by the user. Use this method when `MultiSelect` is false. | 
| SelectionChanged | Optional  | The function to call when the selection changes. Typically used when `MultiSelect` is enabled. An array of all selected items are passed to the callback function. |
| ItemTemplate          | Use ItemTemplate to specify the custom rendering of TreeView items, for example, if you want to render images or checkboxes. |
| SelectedItemTemplate  | Use the SelectedItemTemplate to customize how the items in the selected items tray are rendered. |


<br/>

## Methods
| Name                                  | Description                            |
|---------------------------------------|----------------------------------------|
| expandNode(nodeId: string)            | Expands the node with the specified member id. The Id is the value of the `ItemId` property, for example the dimension member id if the TreeView is bound to a DimensionModel. |
| setExpandedNodeIds(nodeIds: string[]) | Expands the nodes specified in the list. |
| focusNode(nodeId: string)             | Sets focus to the node with the specified id. |
| collapseNode(nodeId: string)          | Collapses the node with the specified id. | 
| expandAll()                           | Expands the entire tree. |
| collapseAll()                         | Collapses the tree.      |
| getExpandedNodeIds()                  | Returns the ids of all expanded nodes. Use this API when you want to preserve the expansion state between sessions. |
| setSelectedValues(values: any[])      | Sets the ids for the selected values displayed in the selected items tray. |
| getSelectedValues(): any[]            | Gets the ids of the selected values in the selected items tray. |


<br/>

