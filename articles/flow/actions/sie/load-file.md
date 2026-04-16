# Load SIE file

This action loads and parses a [Standard Import Export (SIE)](https://sie.se/in-english/) file and returns an object with information and DataReaders that can be used by other actions. 
Use this action to extract opening/closing balances, transactions, vouchers etc. from a SIE file.

The Swedish SIE (Standard Import and Export) file format is an open, text-based standard for transferring accounting data between different software systems in Sweden, acting as a de facto standard for companies, accountants, and auditors to exchange financial information like balances, transactions, and account details, with different types (SIE 1, 2, 3, 4) for varying data levels.


![SIE File Parser](/images/flow/sie-file-parser.png)

<br/>

**Example** ![Example](/images/strz.jpg)

The example above shows how a SIE file is read from the [Fortnox REST API](../fortnox/get-sie-file-stream.md), and parsed with the **Load SIE file**. One of the DataReaders in the SIE result object is then used to [insert data into an SQL Server table](../sql-server/insert-data.md).

<br/>

## Properties

| Name            | Required | Description          |
|-----------------|----------|----------------------|
| Title           | No | The title or name of the action.  |
| Source          | Yes | A stream or byte array containing SIE file content. |
| Parser options  | No | Optional settings about source file and parsing settings (see below). | 
| Result variable name | Yes | The name of the variable that contains the output from this action. | 
| Description     | No | Additional notes or comments about the action. |

<br/>

### Parser options

| Name            | Description          |
|-----------------|----------------------|
| Date Format | Enter the source date format (default: yyyyMMdd). |
| Encoding | Select the source encoding format (default: ISO-8859-1). |
| Max flatten depth | The maximum number of nested object levels to flatten into columns. |
| Allow Missing Date | Allows missing dates in e.g. transactions. |
| Allow Unbalanced Voucher | Allows incomplete / unbalanced vouchers. | 
| Throw Errors | Specifies whether parsing should throw errors or complete silently. |

<br/>

## Result 

This action returns an **SIEResultObject**. 

<br/>

### Object properties

| Property | Type | Description |
|----------|------|-------------|
| Properties     | Object      | A sub object with properties about the SIE content - see below for detasils. | 
| OpeningBalance | IDataReader | Opening balance for balance sheet account. |
| ClosingBalance | IDataReader | Closing balance for balance sheet account. |
| OpeningBalanceForObject | IDataReader |  Opening balance for object. | 
| ClosingBalanceForObject | IDataReader | Closing balance for object. |
| PeriodBudget   | IDataReader |  Budget for account for the period. |
| PeriodBalance  | IDataReader | Period saldo for account for the period. |
| ProfitLossBalance | IDataReader | Profit/loss account balance for the period. |
| Transactions   | IDataReader | Transaction items (Voucher transaction rows including Voucer information). |
| FinancialYears | IDataReader | Financial year from which the exported data is retrieved. |
| Accounts       | IDataReader | Account information. |
| Dimensions     | IDataReader | Dimensions. |
| SubDimensions  | IDataReader | Sub-dimensions. |
| Vouchers       | IDataReader | Voucher information. |
| Company        | IDataReader | Company the data originates from. |
| Data           | Object      | A sub object with (raw) collections and objects from parser - see below for details. |

<br/>

### Properties object

| Property | SIE tag | Type | Description |
|----------|---------|------|-------------|
| Format | #FORMAT | string | SIE file format version. | 
| GeneratedDate | #GEN | DateTime | Date when the SIE file was generated. |
| GeneratedName | #GEN | string | Name of the user who generated the SIE file (signature). |
| Description | #PROSA | string |  Description of the SIE file content. |
| ChartOfAccountType | #KPTYP | string | Type of chart of accounts. |
| PeriodToDate | #OMFATTN | DateTime | Date for period of period end balance  (date up to and including). |
| TaxationYear | #TAXAR | Integer | Tax year for the exported data. |
| Currency | #VALUTA | string | Currency code for the exported data. |

<br/>

### Data object

| Collection | SIE tag | Of type | Description |
|------------|---------|---------|-------------|
| OpeningBalanceList | #IB | SiePeriodValue | Opening balance for balance sheet account. |
| ClosingBalanceList | #UB | SiePeriodValue |  Closing balance for balance sheet account. |
| OpeningBalanceForObjectList | #OIB | SiePeriodValue |  Opening balance for object. | 
| ClosingBalanceForObjectList | #OUB | SiePeriodValue | Closing balance for object. |
| PeriodBudgetList | #BUDGET | SiePeriodValue |  Budget for account for the period. |
| PeriodBalanceList | #PSALDO | SiePeriodValue | Period saldo for account for the period. |
| ProfitLossBalanceList | #RES | SiePeriodValue | Profit/loss account balance for the period. |
| TransactionsList | #TRANS | SieVoucherTransaciton | Transaction items. |
| FinancialYearsList | #RAR | SieBookingYear | Financial year from which the exported data is retrieved. |
| AccountsList | #KONTO | SieAccount | Account information. |
| DimensionsList | #DIM | SieDimension | Dimensions. |
| SubDimensionsList | #UNDERDIM | SieDimension | Sub-dimensions. |
| VouchersList | #VER | SieVoucher | Voucher information. |

<br/>

| Object | SIE tag | Of type | Description |
|--------|---------|---------|-------------|
| Company | #FNAMN | SieCompany | Company the data originates from. | 

