# Account

**Applies to:** ![img](https://profitbasedocs.blob.core.windows.net/icons/yes-icon.png) Planner 4.x, 5.0 or 5.1

# Overview
Here you can edit the Account dimension.

![](https://profitbasedocs.blob.core.windows.net/plannerimages/dimensions-account.jpg)

1. **Account** <br/>
This will filter accounts on the hierarchical node selected.

2. **Change Account Dimension** <br/>
This table is showing the list of accounts and some attributes to be edited here.

3. **Publish**<br/>
Push this button to apply changes to Account dimension.

Often accounts are imported from an external source. In this case the default priority between the local edits and external source are as follows:
- External source will have priority for Account Description and translations and will add new accounts.
- Local edits will have priority for "Allow Input", "Sign Factor", "Acc. Type" and hierarchical information contained in the Hierarchy level 1 to 3 (see below). Local edits can also add accounts and delete accounts.

If you choose to edit account description or translations and delete an account that is imported from external source, the edits will be overwritten, and the deleted account will be added from external source.

## Hierarchy

The account dimension hierarchy by default consists of 4 levels, including the actual account, in the following order:

- Hierarchy level 1
- Hierarchy level 2
- Hierarchy level 3
- Account

This is reflected in the positioning of the columns from left (lowest level, i.e. Account) to right (highest level, i.e. Hierarchy level 1).

Note that all levels must be filled in, but padding - that is repeating - levels from one level to the next level up should be used if the actual hierarchy does not contain all levels, as shown in the example below, considering the account level contains actual accounts.

![](https://profitbasedocs.blob.core.windows.net/plannerimages/AccountPadding.JPG)

In the example, Account 3790 is padded - repeated - to hierarchy levels 3. This means that Planner renders the hierarchy skipping hierarchy levels 3 so that when expanding level 2 at the 37 node, 3790 renders immediately below as shown in the left margin.

The number of hierarchical levels can be changed but has to be done using the Hypergene InVision designer. Legal entity does not have to be a level in the hierarchy, but it has to be present in the table and filled in.

The account dimension hierarchy is used for defining Finance settings and not for reporting.<br/>

When designing this hierarchy, the main consideration should therefore be the granularity most suitable for defining finance settings.<br/>

## Column Descriptions

- **Account**<br/>
The account identifier.
- **Account Description**<br/>
The descriptive name of the account.
- **Allow Input**<br/>
Set to true for accounts that will be available for Forecast or Budget input.
- **Sign Factor**<br/>
Set this to tell how the sign on accounts will be used. For example, it is normal that sales account is using negative sign and as such Sign Factor will be -1.0.
Sign factor is relevant in two scenarios:<br/>
1.	**Account** sign factor (**this field**): a sign factor of -1 tied to an account will:<br/>
o	Switch the sign of any historical data<br/>
o	Switch the sign of any input data<br/>
This would typically apply to income accounts booked with a credit sign that one would like to see and input as a positive amount in an input form.<br/>
2.	**Report line** sign factor (see [Setup Report](../report-setup/setup-report.md)): a report line nets a range of accounts or is a calculation of other report lines.<br/>
The report line sign factor indicates whether this net amount should be presented "as is" (sign factor +1) or with the opposite sign (sign factor -1) in this particular report.<br/>
Note that any report lines that act as calculations of other report lines will perform that calculation based on the values displayed, i.e. after the sign factor has been applied. <br/>
- **EN: Account Description**<br/>
Text for English translation for Account Description.
- **NO: Account Description**<br/>
Text for Norwegian translation for Account Description.
- **Acc.Type**<br/>
Dropdown list to set the type of account ("Balance" or "Profit Loss") is the 12 period columns showing amounts.


**Hierarchy level 3**<br/>

- **ID**<br/>
ID for hierarchical level 3 (level above account)<br/>
- **Descr.**<br/>
Description for hierarchical level 3 (level above account)<br/>
- **EN: Descr.**<br/>
Description for hierarchical level 3 in English<br/>
- **NO: Descr.**<br/>
Description for hierarchical level 3 in Norwegian<br/>

**Hierarchy level 2**<br/>

- **ID**<br/>
ID for hierarchical level 2<br/>
- **Descr.**<br/>
Description for hierarchical level 2<br/>
- **EN: Descr.**<br/>
Description for hierarchical level 2 in English <br/>
- **NO: Descr.**<br/>
Description for hierarchical level 2 in Norwegian<br/>

**Hierarchy level 1**<br/>

- **ID**<br/>
ID for hierarchical level 1 (highest level)<br/>
- **Descr.**<br/>
Description for hierarchical level 1 (highest level)<br/>
- **EN: Descr.**<br/>
Description for hierarchical level 1 in English <br/>
- **NO: Descr.**<br/>
Description for hierarchical level 1 in Norwegian<br/>
