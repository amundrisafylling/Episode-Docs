# Changelog 2024.4

<br/>

The 2024.4 release of InVision adds new features and improvements to multiple InVision components, including File Storage, the Dimension editor, Forms and Ranked Input tables.

## File Storage

We’ve added new features to the File Storage Workbook component, allowing you to now specify the following options:

- **Max number of files to upload pr batch** – allows limiting the number of files that a user can upload in a single operation.
Context menu option on a file entry in the component.
- **Allow Delete** – specifies whether the user is allowed to delete the selected file.
- **Allow Download** – specifies whether the user is allowed to download the selected file.
- **Allow Open** – specifies whether the user is allowed to open the selected file without having to download it first.

![Image](https://profitbasedocs.blob.core.windows.net/flowimages/changeLogInv24_4_1.png)

## Dimension editor
The dimension editor now supports two new advanced features:

Support for running **custom JavaScript when items are added** to a dimension tree in the Dimension editor UI. This enables scenarios such as setting good default values for properties when a new dimension member is added. [Read more here](../docs/dimensions/howto/set-default-data-for-new-dimension-members.md).
Support for running a **Flow before a dimension is published**. This enables validating a dimension before it is published to production or other Work Process Versions.

![Image](https://profitbasedocs.blob.core.windows.net/flowimages/changeLogInv24_4_2.png)

### Forms

Form controls have received the following updates:

- **Checkboxes** now support three states:
  - `true`
  - `false`
  - `undefined` / `null`


- **Number inputs** now support the following new features:
  - **Min and max values**
  - **Allows NULL values**


- **Dropdown**:
  - Fixed an issue that caused the dropdown list to not appear when using a custom `SelectedItem` template.
  - Fixed an issue where dropdown items with `NULL` as the data value did not display in the dropdown list.


## Ranked Input tables

If dimension members are renamed, this is now reflected in Ranked Input table sheets after the the dimension has been published.

## Performance
We’ve made the following changes to the platform which will improve performance:

- Faster access control checks to resources.
- Added more caching to APIs called when running financial calculations.



## Bug fixes / enhancements

- InVision will now retry / re-run calls to Hypergene Flow during Work Process Version and Package Deployments if Flow reports back that required resources are missing.
- Fixed an issue that may cause background services to terminate prematurely during shutdown or scale down phases in Kubernetes.

## See Also

- [Change Log 2025.4](changelog25_4.md)
- [Change Log 2025.3](changelog25_3.md)
- [Change Log 2025.2](changelog25_2.md)
- [Change Log 2025.1](changelog25_1.md)
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
- [Change Log 5.2](changelog52.md)
- [Change Log 5.1](changelog51.md)
- [Change Log 5.0](changelog5.md)
- [Change Log 4.1](changelog41.md)
- [Change Log 4.0](changelog40.md)
