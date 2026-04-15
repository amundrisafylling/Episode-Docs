# Upgrade notes EPM Planner 5.4.0

Supports upgrade to Planner 5.4.0 from Planner 5.1.2, 5.2.x, 5.3.0.

**NOTE: Upgrading from versions older than 5.1.2 is no longer supported!**

When upgrading to the next version after 5.4.0, upgrading from versions older than 5.2.0 will no longer be supported. It is therefore strongly recommended to keep your Planner version as up to date as possible.

Requirements: Hypergene InVision platform version 2023.3 (bug fix EPM Common 5.3.1 requires platform version 2022.4)

Notes:
- When upgrading to Planner 5.3.0, a new socalled extension package (EPM Finance Reports) is introduced. It will extend EPM Reporting and EPM PLanner with financial reporting capabilities in the for of the Finance Reports workbook. This extension package is automatically deployed when upgrading using the Package Management tool (recommended). If, however, upgrade is performed manually from individual files, the EPM Finance Reports extension package must manually be deployed to the solution containing EPM Reporting after EPM Reporting has been upgraded. It must also be deployed manually to the solution containing the EPM Planner blueprint after the EPM Planner package has been upgraded. In order for individual Planner versions to have its own Finance Reports workbook, process contents must be updated to include EPM Finance Reports. For processes that have EPM Finance Reports included as part of their content, the Finance Report workbook will be available within the versions created thereafter.
- When upgrading to Planner 5.2.4, there is a **breaking change** for customized pre- and post- pipeline scripts as the interface to these scripts have changed. This only applies to to solutions that have made use of these customization possibilities.
- Planner 5.2x makes use of a central dimension management and ledger repository. When upgrading to from a pre-5.2 version each upgraded versions will move the content and configuration from the version's dimensions to the primary dimension residing in the central repository.
It is thus recommended that the version containing the most correct versions of the dimensions is the LAST one to be upgraded. Alternatively you can publish dimension(s) from a given version to the primary dimension located in the EPM Reporting solution after the upgrade is done.
- It is highly recommended that all versions should either be upgraded or deleted (if no longer in use), regardless of their status
- When upgrading from version 5.2.3 or older, the schedules defined for scheduled operations in Operation Manager are removed by mistake (issue #1105). Make therefore sure to document any schedules prior to upgrading.

Involves packages:
- EPM Datamart (Package upgraded to: 5.3.0)
- EPM Common (Package upgraded to: 5.3.0)
- EPM Reporting (Package upgraded to: 1.0.6)
- EPM Finance Reports extension package (Package upgraded to 1.0.1)
- EPM Planner (Package upgraded to: 5.4.0)

Manual steps that may need to be executed post the upgrade:

If you are upgrading from a pre-5.2 version:
- In the User Management workbook and the Workbook Permissions page, open the EPM Reporting solution (new) and click the Publish button
- In the Dimensions workbook, once all relevant Planner versions and blueprint is upgraded and before you deploy any new versions, you must publish the primary dimension to all relevant versions.
- In the Planner blueprint solution, open the Forecast workflow and execute Restart active iteration. For all other upgraded Planner versions, the Operation "Restart workflow" must be executed from the Operation Manager workbook. This will reset the workflow status of all selected versions.
- If you have set up operations on the first page of the Operation Manager workbook that imports historical ledger data from an external source, you need add the following operation step after the data import step from external source: Reload datamart ReportAccountByMonthHistorical (hist. ledger). This new step aggregates the ledger data prior to consumption by Finance Reports, planner versions and so on.
- If you have set up operations on the first page of the Operation Manager workbook that imports dimensional data from an external source, you need to add the following operation step after the data import step(s) from external source: Import data to XYZ primary dimension (XYZ representing the dimension name). This step import the dimensional data to the new central dimension repository, please review Dimension workbook, Setup page for available import options.



