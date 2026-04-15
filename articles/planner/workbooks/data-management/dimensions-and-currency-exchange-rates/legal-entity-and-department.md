# Legal entity

**Applies to:** ![img](https://profitbasedocs.blob.core.windows.net/icons/yes-icon.png) Planner 4.x, 5.0 or 5.1

## Overview
Here you can manage the Legal Entity dimension attributes including adding new members.
<br/>

![](https://profitbasedocs.blob.core.windows.net/plannerimages/dimensions-legal-entity-and-department.jpg)

1. **Legal entity filter**<br/>
Here you can make a selection to filter the department table.
2. **Legal Entity**<br/>
Here you can add and change Legal Entities. This table is the source for the Legal Entity dimension.
3. **Publish**<br/>
The publish button is used to put your changes to work by updating the Legal Entity dimension.
<br/>

Often legal entities are imported from an external source. In this case the default priority between the local edits and external source are as follows:
- External source will have priority for Legal entity description and will add new legal entities.
- Local edits will have priority for hierarchical information contained in the Hierarchy level 1-3 (see below). Local edits can also add legal entities and delete legal entities.

## Descriptions

The Legal Entity dimension is a mandatory dimension in Profitbase Planner.

For the system to work properly and generate forecast and general ledger, some attributes defined here are important. These are described in detail under columns below.

Columns marked with (k) is key columns that will be used to match transactions when exchange rates are deployed in calculations.

### Hierarchy

The legal entity dimension hierarchy by default consists of 4 levels, including the actual legal entity, in the following order:

- Hierarchy level 1
- Hierarchy level 2
- Hierarchy level 3
- Legal entity

This is reflected in the positioning of the columns from left (lowest level, i.e. Legal entity) to right (highest level, i.e. Hierarchy level 1).

Note that all levels must be filled in, but padding - that is repeating - levels from one level to the next should be used if the actual hierarchy does not contain all levels, as shown in the example below:

![](https://profitbasedocs.blob.core.windows.net/plannerimages/LegalEntityPadding.JPG)

In the example, Legal entity Profitways is padded - repeated - to Hierarchy levels 3 and 2. This means that Planner renders the hierarchy skipping Hierarchy levels 3 and 2 so that when expanding level 1, the legal entity level is displayed as shown in the left margin where Profitways holding (Hierarchy level 1) expands directly to Profitways (Legal entity).

The number of hierarchical levels can be changed but has to be done using the Hypergene InVision designer.

### Column Descriptions:

Columns:

- **Legal Entity (k)**<br/>
The ID text string that identifies the legal entity.
- **Legal Entity Name**<br/>
The descriptive name for the legal entity.
- **Curr.Func.**<br/>
3-character currency code that defines the currency that the legal entity uses for their finance general ledger.
- **Operation Type**<br/>
Dropdown list to tell what type of entity. Choices are "Main" which is a normal legal entity and "Elimination" is the entity used for eliminating intercompany transactions.
- **Default Department**<br/>
This dropdown list is to select the default department to be used when it is not logical nor required to specify a department. It may be required to add a department to serve this purpose. This is typically used for transactions generated at the company level such as opening balances.

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
- **Comments**<br/>
Free text sting to help document settings.
- **Modify Type**<br/>
Read-only test to tell the last operation on each row.
<br/>

