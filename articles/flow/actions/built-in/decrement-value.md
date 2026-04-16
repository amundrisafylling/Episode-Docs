# Decrement value

Decrements a (numeric) value by a number.


![Decrement Value](../../../../images/flow/decrement-value.png)



**Example** ![Example](../../../../images/strz.jpg)  
This Flow demonstrates how to decrement a numeric value during execution. It begins by [retrieving](function.md) or receiving an initial number, passes it to the Decrement value action, and reduces it by the configured amount. The resulting value is then forwarded to the [next node](if-else.md), where it can be stored, evaluated, or used to control additional logic, such as implementing countdowns, retry attempts, or conditional branching.
</br>

## Properties

| Name         | Required       | Description                                       |
|--------------|-----------------|---------------------------------------------------|
| Title           | No | The title or name of the action.     |
| Variable to decrement         | Yes | The name of variable to decrement. |
| Decrement by   | Yes | The number to decrement by.   |
| Description   | No | Additional notes or comments about the action or configuration. |

<br/>

## Returns

Returns a (numeric) value.
