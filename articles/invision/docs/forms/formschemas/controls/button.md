# Button

Inherits from [Text Control](textcontrol.md).

<br/>

![btn](https://profitbasedocs.blob.core.windows.net/images/btnUI.png)

<br/>

## Properties
| Name                | Description                            |
|---------------------|----------------------------------------|
| Click               | Specifies the name of the Function to call when the user clicks the button. |
| Disabled            | Use the Disabled property to disable a control or set it to read-only. Note that you cannot use both a Binding AND the control APIs at the same time to set the disabled state of a control. If the Disabled property of a control has a Binding, using the control.Disable() or control.Enable() APIs will not work (binding will win). The disabled property support data binding or an explicit value (true, false). |
| Required | Specifies the default look of the button. Valid values are `Default`, `Primary`, `Secondary`, `Confirm`, `Icon`, and `Link`.|
| Image               | Specifies the image to display. The value can be a named image, an image in your web assets library (@images/my-image-name.png), or a URL. |
| Hotkey              | Specifies the hotkey for the control, for example `Alt + B`. |

<br/>

### Examples

**Click**
```xml
<Button Name="Button1" Text="Click me" Click="ShowAlert"/>

<!--Pass an argument to the ShowAlert function-->
<Button Name="Button1" Text="Click me" Click="ShowAlert('My message')"/>

<!--A button displayed in a listbox, where Data represents the current data context-->
<Button Name="Button1" Text="Click me" Click="ShowAlert(Data.MyProp)"/>
```

<br/>

**Disabled**

Valid values for the **Disabled** property:

- true
- false
- {Binding}

```xml
<Button Disabled="{Binding Path:Customer.NotActive}"/>
<!--or-->
<Button Disabled="true"/>
```

<br/>

**Hotkey**

```xml
<Button Hotkey="Alt + B" Name="Button1" Text="Click me" Row="1" ColumnSpan="2" Click="ShowAlert('My Message')"/>
```

<br/>

**stopClickEventPropagation**

Stops the click event from propagating up the DOM tree.

```xml
<Button Hotkey="Alt + B" Name="Button1" Text="Click me" Row="1" ColumnSpan="2" Click="ShowAlert('My Message')" stopClickEventPropagation="true"/>
```

<br/>

### Example

This example shows how to programmatically activate (select) a tab when a button is clicked.

![activateTab](https://profitbasedocs.blob.core.windows.net/images/activateTab.png)

```xml
  <Functions>
  <Function Name="ChangeTab" Parameters="tabname">
    <![CDATA[
      console.log('Changing tab to: ' + tabname);
      controls.tc.activateTab(tabname);
    ]]>
  </Function>
</Functions>

<EventHandlers>
</EventHandlers>

<UI Grid="grid">
  <Grid RowDefinitions="Auto, *">
    <!-- TabControl -->
    <Grid Row="2">
      <TabControl Name="tc" SelectedTab="One">
        <Tab Name="One" Header="Customers">
          <Grid>
            <Label Text="Manage customer data and view customer details." />
          </Grid>
        </Tab>
        <Tab Name="Two" Header="Budget">
          <Grid>
            <Label Text="Track your budget allocations, expenses, and forecasts." />
          </Grid>
        </Tab>
        <Tab Name="Three" Header="Employees">
          <Grid>
            <Label Text="Overview of employee details and management." />
          </Grid>
        </Tab>
        <Tab Name="Four" Header="Inventory">
          <Grid>
            <Label Text="Inventory management and stock levels." />
          </Grid>
        </Tab>
        <Tab Name="Five" Header="Reports">
          <Grid>
            <Label Text="Generate and view financial and operational reports." />
          </Grid>
        </Tab>
      </TabControl>
    </Grid>
    <!--  Button -->
    <Grid Row="1">
      <Grid Margin="20,10,20,10">
        <Button Text="Go to Inventory" Click="ChangeTab('Four')" />
      </Grid>
    </Grid>
  </Grid>
</UI>

```

<br/>

## Videos

- [Form Schemas](../../../../videos/formschemas.md)

- [Controls - Basics](https://profitbasedocs.blob.core.windows.net/videos/Form%20Schema%20-%20Input%20Element.mp4)
