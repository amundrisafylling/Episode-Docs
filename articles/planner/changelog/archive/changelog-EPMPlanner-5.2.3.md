# Changelog EPM Planner 5.2.3

**Changes**

- Introduce option to use central dimension options to control the naming of dimensional input column, filter names and so on. Workbooks supported: All input module workbooks, Plan overview, Finance Settings, Input settings and Administration, Source fact data, Driver based modelling, Tasks. #497 (closed)

- Introduced an Execute operation button in many workbooks. Button visible if operations are mapped to the workbook and the user has access to executing operations, typically an administration role. #996 (closed)

- Scripts for deleting input transactions that are not present in the dimensions. Consultant tool available from the Hypergene InVision designer #1047 (closed)

**Bug fixes**

- Driver based plan proposal avg measure inserted as four times the source #998 (closed)

- Finance Opening Balance not able to change OB values - input columns appears in read-only mode #1099 (closed)

- Audit report - warnings for non-mapped system fallback accounts reported incorrectly #1098 (closed)

- Upgrading from 5.1xx to 5.2xxx replace content in system fallback account table with demo data #1096 (closed)

- Not possible to add new row for driver based assumption in input setting and administration workbook #1094 (closed)

- Operation "Kalkuler rapportdata" issues - operation not working #1080 (closed)

- Personell module: Change dimensionality allows for ID change #1079 (closed)

- Driver based model year two spreads postings on spesific months flat to account #1067 (closed)

- Plan overview: TY value in deviation column not applied on higher level #1049 (closed)

- Personnel long term planning not accessible #1108 (closed)

