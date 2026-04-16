# PostgreSQL Connection

To interact with a PostgreSQL database using actions in **Hypergene Flow**, you need to either select an existing connection or create a new one.

This guide explains how to configure a PostgreSQL connection and what each field means.

<br/>

## Connection properties


| Name                         | Description |
|------------------------------|-------------|
| Name                     | A custom name for the connection. This will be shown when selecting it in Flow actions. |
| Connection / Authentication Type | Choose between `PostgreSQL Authentication` or a `Custom Connection String`. |
| Server Name              | The hostname or IP address of your PostgreSQL server. |
| Database Name            | The name of the specific database to connect to. |
| Username                 | The database user used for authentication. |
| Password                 | The password for the specified user. |
| Connection Timeout (optional) | Number of seconds before the connection attempt times out. Default is 60 seconds. |

<br/>

## Configuration steps

1. Provide a **Name** for the connection.
2. Select the **Authentication Type**:
   - `PostgreSQL Authentication` – Fill in server, database, username, and password.
   - `Custom Connection String` – Paste a full connection string with credentials and parameters.
3. Fill in the **Server Name**, **Database Name**, **Username**, and **Password**.
4. (Optional) Set a **Connection Timeout** if needed.
5. Click **Test Connection** to verify the setup.
6. If the test is successful, click **OK** to save the connection.

<br/>

## Notes and best practices

- Ensure the PostgreSQL server is reachable from your network.
- Use strong credentials and rotate passwords regularly.
-  Keep the default timeout unless your environment requires a longer or shorter duration.
- If connecting through a firewall, ensure the relevant port (default is `5432`) is open.

<br/>

## Screenshots

### Standard authentication
![PostgreSQL Connection - Standard](../../../../images/flow/postgresql-connection1.png)

### Custom connection string
![PostgreSQL Connection - Custom String](../../../../images/flow/postgresql-connection2.png)

<br/>

## Related documentation

- [PostgreSQL connection string reference](https://www.postgresql.org/docs/current/libpq-connect.html)
- [Flow PostgreSQL actions](https://docs.profitbase.com/articles/flow/actions/postgresql/)