# Apply synonym configurations

Applies the synonym configurations of an object and all descendants in an InVision Solution.

## Properties

| Name        | Required | Description |
|-------------|----------|-------------|
| Title       | Optional | A descriptive label for the action displayed in the Flow editor. |
| Connection  | Required | Defines the [InVision connection](../invision-connection.md) used to access the Profitbase InVision environment. The connection contains the credentials required to execute the action. |
| Object ID   | Required | The ID of the InVision root object where synonym configurations should be applied. This identifies the model or semantic layer where the synonyms will be updated. |
| Disabled    | Optional | If enabled, the action will be skipped during flow execution. This allows the step to remain in the flow without being executed. |
| Description | Optional | Additional information describing the purpose of the action. This is only used for documentation within the Flow. |