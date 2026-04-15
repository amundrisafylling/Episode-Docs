# InVision 5.1 change log

<br/>-

## New Features

<br/>

#### Authentication using IBM Security Verify

<br/>

In addition to Windows and Microsoft Entra ID, we now also support IBM Security Verify as an authentication provider. This means that customers using IBM Cloud can now use InVision, and manage identities in IBM Cloud instead of having to use Microsoft Entra ID.
[Read more…](../docs/systemsetup/installation/ibmsecurity.md)

<br/>

#### Access Control API

We have added a public HTTP API which enables managing Identities and Access Group membership from 3rd party applications, such as automated scripts. This means that permissions to resources (Workbooks and Data.md can be managed using external tools without having to use the InVision Designer or the Access Control Workbooks.
[Read more…](../docs/accesscontrol/httpapi.md)

<br/>

#### Access Control Workbook components now supports raising a Published event

The Identity Management, Access Group Management, Workbook Permissions and Data Permissions Workbook components now exposes a Published event, which enables performing custom actions after their contents have been published.

<br/>

#### Dynamic Filter headings

You can now dynamically change Filter headings using the Execute Expression action of the Filter and running one or the SetHeader instructions.
[Read more…](../docs/workbooks/components/filter.md)

<br/>

## Enhancements & Changes

<br/>

#### Configurable RabbitMQ queue names

The RabbitMQ queue names can now be configured individually pr InVision instance, either using the Installation Manager when installing or upgrading, or by manually editing the appsettings.json files.
This enhancement enables multiple instances of Hypergene InVision to use the same RabbitMQ broker instance.

<br/>

#### New Solution

Creating a new Solution now requires specifying whether the Solution should provide contents to Work Process blueprints or not. This change was added because it was too easy to forget to set this property after a Package had been deployed.

<br/>

#### Workbook Menus in Packages

Workbook Menu configurations are now included in Packages, so they will not have to be created manually after a Package deployment. It is, however, recommended to verify that the menu(s) are correct after a deployment because menus from Packages will be merged with existing menus.

<br/>

#### Rearrange items in Dropdown Package Properties

Dropdown items in Package Properties can now be moved up and down using the Designer.

<br/>

#### Removed System Menu Items concept

We removed the concept of having Menu Items in the Workbook Menus which were owned by the system / application platform. All menu items are now considered custom menu items without any editing restrictions.

<br/>

#### Performance improvements

Package and Version deployments runs faster.

<br/>

## Breaking Changes

<br/>

Access Control tables in the Solution database has been renamed. Any custom queries running against these tables must be updated to use new table names.

| **Old table name**   | **New table name**         |
| -------------------- | -------------------------- |
| pbACGroupUser        | pbACIdentity               |
| pbACGroupUserMap     | pbACIdentityMap            |
| pbACRole             | pbACAccessGroup            |
| pbACRoleGroupUserMap | pbACAccessGroupIdentityMap |

<br/>

| **Old column names**                     | **New column names**                     |
| ---------------------------------------- | ---------------------------------------- |
| pbACConsumerPermission.AcRoleID          | pbACConsumerPermission.AccessGroupID     |
| pbACDataPermission.AcRoleID              | pbACDataPermission.AccessGroupID         |
| pbACIdentity.AcGroupUserID               | pbACIdentity.IdentityID                  |
| pbACIdentity.GroupUserType               | pbACIdentity.IdentityType                |
| pbACAccessGroup.AcRoleID                 | pbACAccessGroup.AccessGroupID            |
| pbACAccessGroupIdentityMap.AcRoleID      | pbACAccessGroupIdentityMap.AccessGroupID |
| pbACAccessGroupIdentityMap.AcGroupUserID | pbACAccessGroupIdentityMap.IdentityID    |
| pbACSolutionPermission.AcRoleID          | pbACSolutionPermission.AccessGroupID     |
| pbACUserDirectory.UserGroupID            | pbACUserDirectory.AccessGroupID          |
| pbSolutionObjectACL.RoleID               | pbSolutionObjectACL.AccessGroupID        |

<br/>

## Bug Fixes

<br/>

[#283](https://support.profitbase.com/platform/invision-beta/-/issues/283) Permissions are always copied when a Work Process Version is deployed.

[#274](https://support.profitbase.com/platform/invision-beta/-/issues/274) In some scenarios, DatePicker selects the last day of previous month when the first day of a month is selected.

[#290](https://support.profitbase.com/platform/invision-beta/-/issues/290) Global Data Context is not deployed with Package.

[#286](https://support.profitbase.com/platform/invision-beta/-/issues/286) Work Process Version directives used in Views are not resolved during Version deployment.

[#292](https://support.profitbase.com/platform/invision-beta/-/issues/292) Custom Indexes in source Solution not recreated in target Solution when Version is deployed.

[#306](https://support.profitbase.com/platform/invision-beta/-/issues/306) Data Store Source mappings is not correctly remapped during Version deployment.

[#284](https://support.profitbase.com/platform/invision-beta/-/issues/284) Values of Package Properties with names containing periods (.) were not saved.

<br/>

### See Also

- [Change Log 2025.4](changelog25_4.md)
- [Change Log 2025.3](changelog25_3.md)
- [Change Log 2025.2](changelog25_2.md)
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
- [Change Log 5.2](changelog52.md)
- [Change Log 5.0](changelog5.md)
- [Change Log 4.1](changelog41.md)
- [Change Log 4.0](changelog40.md)
