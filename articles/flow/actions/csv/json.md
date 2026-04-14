# JsonDataImportOptions JSON Specification

This document specifies the JSON format for the `JsonDataImportOptions` object, used to configure data import settings.

<br/>

## Properties

| Property Name                | Required | Required | Default Value | Description                                                                 |
|------------------------------|-----------|----------|---------------|-----------------------------------------------------------------------------|
| `Locale`                     | String    | No       | `"en-US"`     | Specifies the locale for formatting, e.g., `"en-US"`, `"fr-FR"`.             |
| `DateTimeFormat`             | String    | No       | `"MM/dd/yyyy"` | Defines the date format, e.g., `"MM/dd/yyyy"`, `"dd-MM-yyyy"`.              |
| `NumberGroupSeparator`       | String    | No       | `","`         | Character used as the thousands separator in numbers, e.g., `","`, `" "`.    |
| `NumberDecimalSeparator`     | String    | No       | `"."`         | Character used as the decimal separator in numbers, e.g., `"."`, `","`.      |
| `AllowNonDigitCharactersInNumbers` | Boolean | No       | `null`        | If `true`, allows non-digit characters in numeric fields; `false` otherwise. |
| `QuoteCharacter`             | String    | No       | `null`        | Single character used for quoting fields, e.g., `"\""`, `"'"`. Must be a single character. |
| `Delimiter`                  | String    | No       | `null`        | Character or string used to separate fields, e.g., `","`, `";"`.             |
| `EscapeCharacter`            | String    | No       | `null`        | Character used to escape special characters within fields, e.g., `"\""` or `"\\"`. Must be a single character. |
| `Encoding`                   | Number/String/Null | No       | `null`        | Specifies the text encoding. See **Encoding Values** below.                  |

<br/>

#### Encoding Values

The `Encoding` property can be specified as:
- A **number** (integer corresponding to the enum value),
- A **string** (case-insensitive enum name),
- Or `null`.

Valid values:

| Enum Name          | Number | Description                          |
|--------------------|--------|--------------------------------------|
| `UTF8`             | `0`    | UTF-8 encoding                       |
| `Unicode`          | `1`    | UTF-16, little endian                |
| `BigEndianUnicode` | `2`    | UTF-16, big endian                   |
| `UTF32`            | `3`    | UTF-32 encoding                      |
| `ASCII`            | `4`    | ASCII encoding                       |
| `Base64`           | `5`    | Base64 (treated as encoding)         |
| `ISO_8859_1`       | `6`    | ISO-8859-1 (Latin-1) encoding       |

If a string is provided, it must match one of the enum names (case-insensitive). If a number is provided, it must correspond to one of the defined enum values. Invalid values will result in a parsing error.

<br/>

## Notes
- All properties are optional, as they have default values or are nullable in the `JsonDataImportOptions` class.
- The `NullableEncodingTypeConverter` ensures that the `Encoding` property can be deserialized from a number, a string, or `null`, with validation for valid enum values.
- The `QuoteCharacter` must be a single character if specified.
- The JSON must be valid and conform to the types specified above.

<br/>

## Example JSON

```json
{
  "Locale": "fr-FR",
  "DateTimeFormat": "dd-MM-yyyy",
  "NumberGroupSeparator": " ",
  "NumberDecimalSeparator": ",",
  "AllowNonDigitCharactersInNumbers": true,
  "QuoteCharacter": "\"",
  "Delimiter": ";",
  "EscapeCharacter": "\\",
  "Encoding": "UTF8"
}
```