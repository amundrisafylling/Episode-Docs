# Convert JSON to DataTable

Converts a JSON string, byte array or file to a DataTable.  
Typical use cases include inserting a JSON document into a relational database table as rows and columns, or converting JSON into other tabular formats such as Excel or Parquet files.  

> [!NOTE]
> The JSON documents must have a valid JSON format, meaning it must be a singel object starting and ending with curly brackets (`{` and `}`), OR a collection of objects, starting or ending with square brackets (`[` and `]`).  
> The tabular data must also be present at the root level, and not in a nested field.

<br/>

![img](/images/flow/json-get-json-datatable.png)


**Example** ![img](../../../../images/strz.jpg)  
This Flow automates the process of retrieving employee data from PowerOfficeGo, transforming it to a DataTable, and inserting it into a database.

<br/>

## Properties

| Name                     | Type                 | Description                                |
|--------------------------|----------------------|--------------------------------------------|
| JSON                     | Yes | A string or byte array containing data in a valid JSON format. |
| [Schema mapping](#schema-mapping)           | No | Enables manually defining the mapping between JSON properties and column names, including data types. |
| DataTable variable name | Yes | The name of the variable that contains the output from this action.| 

<br/>

## Returns

DataTable.
<br/>

## Details

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write, and it is easy for machines to parse and generate.  
JSON is built on two structures:
 - A collection of **name/value pairs** called `properties`. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
 - An ordered **list of values**. In most languages, this is realized as an array, vector, list, or sequence.

In addition, JSON has the following characteristic:
- JSON may contain **nested objects**
- JSON data **does not** include information about **data types**
- JSON can represent values as `string`, `numbers`, and `booleans` (true / false) and `null`. Dates are represented as strings.

When a JSON document is parsed by the DataTable, it converts `each collection of properties (name/value pairs)` to a `row`, where each property represents a column and value (cell).
The _data type_ of the value is inferred from the representation of the value in the JSON document (string, number, etc). If a value is `null`, the data type cannot be inferred. 

##### Example
The example below shows how a JSON document containing two objects in an array is converted to a table. 

```json
[{
   "customerId": 1234,
   "firstName": "Luke",
   "lastName": "Skywalker",
   "subscriptionStart": "2024-01-13T12:03:15",
   "balance": 555.30,
   "isActive": true,
   "securityCode": null
},
{
   "customerId": 5678,
   "firstName": "Darth",
   "lastName": "Vader",
   "subscriptionStart": "2021-02-14T18:00:00",
   "balance": -156.00,
   "isActive": true,
   "securityCode": null
}]
```

The JSON above is converted to the following table.   


| customerId         | firstName     | lastName      | subscriptionStart    | balance     | isActive   | securityCode     |
|--------------------|---------------|---------------|----------------------|-------------|------------|------------------| 
| 1234               | Luke          | Skywalker     | 2024-01-13T12:03:15  | 555.30      | true       | null             |
| 5678               | Darth         | Vader         | 2021-02-14T18:00:00  | -156.00     | true       | null             |

---

> [!NOTE]
> The JSON documents must have a valid JSON format, meaning it must be a singel object starting and ending with curly brackets (`{` and `}`), OR a collection of objects, starting or ending with square brackets (`[` and `]`).  
> The tabular data must also be present at the root level, and not in a nested field.

<br/>

[!INCLUDE [](./__data-extraction.md)] 

<br/>

### Nested objects
JSON may contain nested objects, such as Person and Address. When the DataTable encounters a nested object, it flattens the structure, using underscores ('_') to delimit each level.

> [!IMPORTANT]
> If a JSON document has a jagged (non-uniform) format, you must always define the [schema mapping](#schema-mapping) explicitly. This is typically the case for JSON documents containing nested objects where some of the properties may be null.

##### Example
The example below shows how a JSON document containing nested objects (`address`) are flattened to a table. 

```json
[{
   "customerId": 1234,
   "firstName": "Luke",
   "lastName": "Skywalker",   
   "address": {
    "country": "Norway",
    "city": "Stavanger",
    "zip": 4016
   }
},
{
   "customerId": 5678,
   "firstName": "Darth",
   "lastName": "Vader",   
   "address": {
    "country": "Norway",
    "city": "Sandnes",
    "zip": 4313
   }
}]
```

The JSON above is converted to the following table. Note that the nested object `address` is flattented.  

| customerId         | firstName     | lastName      | address_country      | address_city  | address_zip   | 
|--------------------|---------------|---------------|----------------------|---------------|---------------|
| 1234               | Luke          | Skywalker     | 2024-01-13T12:03:15  | 555.30        | true          |
| 5678               | Darth         | Vader         | 2021-02-14T18:00:00  | -156.00       | true          |


<br/>

### Arrays
When the JSON document contains array fields, it is treated as a string, meaning it will be read in its raw format. How you want to handle arrays is up to you, as it depends on your use case. You might want to simply save the data to a database as is, use a function to do custom deserialization, or simply add another `Get JSON DataTable` to the chain that converts the array fields to rows and columns.

##### Example
The example below shows how a JSON document having an array field (`orders`), is converted to a table.  

```json
[{
   "customerId": 1234,
   "firstName": "Luke",
   "lastName": "Skywalker",   
   "orders": [
      {
         "orderId": 1000,
         "productId": "Y-66754",
         "qty": 2
      }
   ]
}]
```

Note that the data type of the `orders` column is `string`.

| customerId         | firstName     | lastName      | orders               |
|--------------------|---------------|---------------|----------------------|
| 1234               | Luke          | Skywalker     | [{"orderId": 1000, "productId": "Y-66754", "qty": 2}] |

<br/>


### Schema mapping

When the DataReader reads the JSON document, it infers the column names and performs a best-attempt to infer the data types for each property. If it cannot infer the data type, it will make a guess based on what the value can be converted to. However, because JSON does not separate between decimal and non-decimal numbers, and dates and strings, you may sometimes get an error when trying to send the data to a database or API because the data types does not match what's expected. 
If this happens, you must define the Schema mapping and specify the data type for each each property explicitly. 

You can also use the `Schema mapping` to override how a JSON property is mapped to a `column name`.  
For example, if you want to map the JSON property `lastName` to column name `Surname`, you can configure this in the Schema mapping.

![img](/images/flow/json-get-json-datatable-schema-mapping.png)

<br/>

##### Column mapping for nested objects
In a JSON document, relationships between nested objects are represented using a dot ('.'), for example `address.country`. By default, the DataReader converts this to `address_country` because using a `.` will fail when trying to save the data to most target systems. If you want to use a different column name for nested objects, you can configure a mapping for this like shown below.

> [!IMPORTANT]
> If a JSON document has a jagged (non-uniform) format, you must always define the [schema mapping](#schema-mapping) explicitly. This is typically the case for JSON documents containing nested objects where some of the properties may be null.

| JSON path        | Column name     | Data type          |
|------------------|-----------------|--------------------|
| address.country  | Country         | string             |


