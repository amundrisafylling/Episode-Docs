# Prophet forecast

Forecasts time series using the [Prophet](https://facebook.github.io/prophet/) algorithm. 

## Properties

| Name                      | Required | Description                                                                              |
|---------------------------|----------|------------------------------------------------------------------------------------------|
| Title                     | No       | Display label for this Action in the Flow editor. Does not affect execution.             |
| Input contents            | Yes      | The input data variable containing the time series to forecast. Select from available data variables in the Flow. |
| Output file format        | No       | The file format for the forecast output.  |
| Configuration             | No       | Opens a detailed configuration editor for the Prophet algorithm parameters. |
| Result variable name      | No       | The name of the output variable that downstream Actions can reference to consume the forecast result. Defaults to `forecast`. |
| Disabled                  | No       | When checked, the Action is skipped during Flow execution. Use this to temporarily exclude the forecast step without removing it from the Flow. |
| Description               | No       | Free-text notes visible only in the Flow editor. Use to document the purpose or context of this forecast step for other solution builders. |