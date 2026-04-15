
# InVision 5.2 change log

<br/>

## New Features

<br/>

### File Storage

This cool new feature enables rich file/document management. The component can be used to upload, store, download, and delete any type of file.
File access can be managed by associating files to dimensions, filters, or any custom attribute. We currently support Azure Blob Storage and disk as file stores.  
<br/>

![File Storage](https://profitbasedocs.blob.core.windows.net/images/FileStorage_Panel.PNG)  
[Read more...](../docs/filestorage.md)

<br/>

#### WCAG AAA compliance

Hypergene InVision is now WCAG AAA compliant by supporting requirements such as high contrast mode for people with low vision, keyboard navigation, keyboard shortcuts, and support for screen readers.  
[Read more...](../docs/accessibility/accessibility.md)
<br/>

### Multiple Access Control enhancements

- Added support for copying permissions for identities
- Introduced categorization (Default, Role, Data) of Access Group.  
  Access Groups in the Default category can be used to assign permissions to both Workbooks and Dimensions.
  Role Access Groups can only be assigned to Workbooks. Data Access Groups can only be assigned to Dimensions.
- Intermediate/padded levels in ragged dimensions are skipped when rendering dimensions in the Access Control editors
- Access Groups can be created directly from the Data Access Control screen when assigning permissions to a dimension member
- You can now switch between all available Solutions in the Workbook or Data Permissions screens when configuring permissions (no need for separate Workbooks for each Solution, or having to use the Designer)

<br/>

### Monitoring and logging API

We added support for a REST API for reading logs from the system, including application, data flow, and background agent logs.
This feature enables enterprise IT departments to integrate InVision into their operations management.
[Read more...](../docs/systemsetup/monitoring/httpapi.md)

<br/>

### New Form Schema controls and accessibility support

- Added support for [ToggleButton](../docs/forms/formschemas/controls/togglebutton.md) control
- Added support for [SplitButton](../docs/forms/formschemas/controls/splitbutton.md)
- Added support for ItemTemplate in Dropdown so you can now render rich content in a dropdown instead of just text
- Added support for [DatePicker](../docs/forms/formschemas/controls/datepicker.md) and DateTimePicker
- Added support for the htmlFor attribute to Label controls (Accessibility)
- Added support for search in Dropdowns
- Added support for hotkeys (Accessibility)
- Added support for AriaLabelledBy to all editable controls (Accessibility)
- Added support for the Required attribute to all editable controls (Accessibility)

<br/>

### Copy permissions when cloning Solution

When cloning Solutions, you can now specify how permissions are copied from the source Solution to the target Solution.

<br/>

## Enhancements

- When the session expires, a nice overlay is shown telling the user to reload the page
- When a Workbook does not exist, the user is notified instead of just getting a blank page
- Drag and drop in code editors does not remove all text when dropping on an invalid target
- Datagrid styling and column sizing improvements
- You are prevented from deleting Work Process Versions which are data sources for other versions
- If there's more than one Workbook with the same name in the same folder in the menu, it's Solution name will be shown in parentheses
- PowerShell editor bug fixes

<br/>

### See Also

- [Change Log 2025.4](changelog25_4.md)
- [Change Log 2025.3](changelog25_3.md)
- [Change Log 2025.2](changelog25_2.md)
- [Change Log 2025.1](changelog25_1.md)
- [Change Log 2025.1](changelog25_1.md)
- [Change Log 2024.4](changelog24_4.md)
- [Change Log 2024.3](changelog24_3.md)
- [Change Log 2024.2](changelog24_2.md)
- [Change Log 2024.1](changelog24_1.md)
- [Change Log 2023.7](changelog23_7.md)
- [Change Log 2023.6](changelog23_6.md)
- [Change Log 2023.5](changelog23_5.md)
- [Change Log 2023.4](changelog23_4.md)
- [Change Log 2023.3](changelog23_3.md)
- [Change Log 2023.2](changelog23_2.md)
- [Change Log 2023.1](changelog23_1.md)
- [Change Log 2022.5](changelog22_5.md)
- [Change Log 2022.4](changelog22_4.md)
- [Change Log 2022.3 pt 2](changelog22_3_2.md)
- [Change Log 2022.3 pt 1](changelog22_3_1.md)
- [Change Log 2022.2](changelog22_2.md)
- [Change Log 2022.1](changelog22_1.md)
- [Change Log 5.1](changelog51.md)
- [Change Log 5.0](changelog5.md)
- [Change Log 4.1](changelog41.md)
- [Change Log 4.0](changelog40.md)
