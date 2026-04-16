# Workspace Objects

Workspace Object are reusable objects that consist of multiple values. For instance, a Workspace Object can represent a SQL Server connection with properties like server name, database name, username, and password. Instead of defining distinct connection for every SQL Server action within a Flow, you can reuse an existing connection object and maintain its settings in one central location.  

A Workspace object _property_, such as a user name in a SQL Server connection, may be a [Workspace variable](workspace-variables.md). This means that a Workspace object may be configured to be dynamic based on which [Environment](../environments.md) the Flow is in.  

To use a Workspace variable in a Workspace object property, use the following syntax:  
```dos
${variable-name}
```  

### Example

Suppose we have a Workspace Variable named `UserName`, it can be used in a Workspace Object property using the following syntax:  
```csharp
${UserName}
```  

> [!IMPORTANT]
> Properties containing sensitive information will not be available through the user interface after the current browser session has ended. This means that you will not be able to view the value of a sensitive field after you reload the page in the browser.  
If you need access to the information, make sure to make a copy for yourself.  

## Creating Workspace Objects

Workspace Objects are created automatically when you configure an Action or Trigger that require them. For example, if you are configuring a SQL Server action, you must specify a SQL Server connection. At this poing, a SQL Server Connection object is created. The next time you create a SQL Server action, you can reuse the existing SQL Server Connection object instead of creating another connection definition.

## Editing and deleting Workspace Objects

To edit or delete a Workspace Object, open the Workspace Objects editor from the Resources -> Workspace Objects menu in the Flow Designer.

> [!NOTE]
> If you edit a Workspace Object which contains secrets such as usernames, passwords or API keys, you must re-enter all secrets before saving. Secrets will not be displayed when opening a Workspace Object for edit.

![Open Workspace Objects Editor](../../../images/open-workspace-objects-editor.png)

<br/>

![Open Workspace Objects Editor2](../../../images/flow/open-workspace-objects-editor2.png)
