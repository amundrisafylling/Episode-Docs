
# Service User Accounts

The Hypergene InVision **AppPool**, **Dispatcher** and **Worker** processes requires the following permissions

1. Must be a member of the Administrators group on the server, OR

   - An administrator must create the "ProfitBase" Application Event Log

   - An administrator must create the http endpoint used by the Worker process to accept messages. This can be done using a command such as ``netsh http add urlacl url=http://+:port/ user=DOMAIN\user`` where port is the port specified in ``dfworker.exe.config`` (12533 by default)

2. Must have Db Owner permissions on the InVision_xxx Solution database

3. If InVision need to connect to a Profitbase Studio database (solution or DWH), read permission on that database is required.

4. If InVision need to connect to a Profitbase Studio database (solution or DWH) on a different SQL Server, the user account must have permissions to create and delete linked servers, OR

   - A linked server must be created upfront, where the name must match the name of the Data Connection specified in InVision.


<br/>


![Service User Accounts](https://profitbasedocs.blob.core.windows.net/images/serviceuseraccounts.jpg "Service User Accounts")