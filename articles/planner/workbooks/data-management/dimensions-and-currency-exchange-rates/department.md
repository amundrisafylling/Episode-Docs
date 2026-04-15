# Department

**Applies to:** ![img](https://profitbasedocs.blob.core.windows.net/icons/yes-icon.png) Planner 4.x, 5.0 or 5.1

## Overview
Here you can manage the Department dimension hierarchy and attributes including adding new departments. This table is the source for the Department dimension.
<br/>

![](https://profitbasedocs.blob.core.windows.net/plannerimages/dimensions-department.jpg)


1. **Department filter**<br/>
Here you can make a selection to filter the department table.
2. **Department**<br/>
This is where you manage departments and map each department to legal entity. Each department must be tied to a legal entity.
3. **Publish**<br/>
The publish button is used to put your changes to work by updating the Department dimension.
<br/>

Often departments are imported from an external source. In this case the default priority between the local edits and external source are as follows:
- External source will have priority for Department Description, legal entity associations and will add new departments.
- Local edits will have priority for hierarchical information contained in the Hierarchy level 1-6 (see below). Local edits can also add departments and delete departments.

## Descriptions

The Department dimension is a mandatory dimension in Profitbase Planner. Departments represent the input level for budgets and forecasts. Each department must belong to one legal entity.

Note that the ID for department must be unique across all companies. One way to achieve this is to prefix the ID using the legal entity as a prefix. For example: LegalEntityID="pro" and DepartmentID="004". For the ID to be unique when adding more companies set DepartmentID="pro.004".

Columns marked with (k) is key columns that will be used to match transactions when exchange rates are deployed in calculations.

### Hierarchy

The department dimension hierarchy by default consists of 8 levels, including the actual department and the legal entity, in the following order:

- Hierarchy level 1
- Hierarchy level 2
- Hierarchy level 3
- Legal entity
- Hierarchy level 4
- Hierarchy level 5
- Hierarchy level 6
- Department

This is reflected in the positioning of the columns from left (lowest level, i.e. Department) to right (highest level, i.e. Hierarchy level 1).

Note that all levels must be filled in, but padding - that is repeating - levels from one level to the next level up should be used if the actual hierarchy does not contain all levels, as shown in the example below so long as the department level contains actual departments and the legal entity level contains actual legal entities.

![](https://profitbasedocs.blob.core.windows.net/plannerimages/DepartmentPadding.JPG)

In the example, department Stavanger is padded - repeated - to Hierarchy levels 6 and 5. This means that Planner renders the hierarchy skipping Hierarchy levels 5 and 6 so that when expanding level 4, the department level is displayed as shown in the left margin where Norway (Hierarchy level 4) expands directly to Stavanger (Department).

The same applies to Legal entity that is padded - repeated - to Hierarchy level 3 and 2 so that when expanding Hierarchy level 1 (Profitways holding), the legal entity level is displayed (Profitways).

The number of hierarchical levels can be changed but has to be done using the Hypergene InVision designer. Legal entity does not have to be a level in the hierarchy, but it has to be present in the table and filled in.

### Column Descriptions:

- **Departm. (k)**<br/>
Department ID text string to identify the department.
- **Department Name**<br/>
The descriptive name for department.

**Hierarchy level 6**<br/>

- **ID (see comments on hierarchy)**<br/>
ID for hierarchy level 6 nodes.
- **Name**<br/>
Name of hierarchy level 6 nodes.

**Hierarchy level 5**<br/>

- **ID (see comments on hierarchy)**<br/>
ID for hierarchy level 5 nodes.
- **Name**<br/>
Name of hierarchy level 5 nodes.

**Hierarchy level 4**<br/>

- **ID (see comments on hierarchy)**<br/>
ID for hierarchy level 4 nodes.
- **Name**<br/>
Name of hierarchy level 4 nodes.

**Hierarchy level Legal Entity**<br/>

- **Legal Entity**<br/>
The ID text string that identifies the legal entity. This is not an input column and is automatic filled when Legal Entity Name is selected.
- **Legal Entity Name**<br/>
Dropdown list for the legal entity name. This is the legal entity that the department belongs to.

**Hierarchy level 3**<br/>

- **ID (see comments on hierarchy)**<br/>
ID for hierarchy level 3 nodes.
- **Name**<br/>
Name of hierarchy level 3 nodes.

**Hierarchy level 2**<br/>

- **ID (see comments on hierarchy)**<br/>
ID for hierarchy level 2 nodes.
- **Name**<br/>
Name of hierarchy level 2 nodes.

**Hierarchy level 1**<br/>

- **ID (see comments on hierarchy)**<br/>
ID for hierarchy level 1 nodes.
- **Name**<br/>
Name of hierarchy level 1 nodes.
<br/>
<br/>
- **Modify Type**<br/>
Read-only test to tell the last operation on each row.
<br/>
