# On-premises installation

If you cannot use the SaaS offering of Hypergene Flow, you can run it on a Virtual Machine in your own data center, or even on your own laptop.
To install Hypergene Flow on a local machine / VM, you need to do the following:

## Before you begin

1)  Make sure the [system requirements](on-premises-installation/system-requirements.md) are met.
2)  Make sure your user account has the [required permissions](on-premises-installation/account-permissions.md) on the server.
3)	Make sure that IIS is installed.
4)	Install .NET 8 Hosting Bundle or higher.
5)	Download and install Profitbase Installation Manager 5.3.0.8 or higher.
6)	Make sure that you have access to a SQL Server instance, either an on-premises instance or an Azure SQL Server instance.

**During the installation you also need to**

1)	Create a Microsoft Entra ID Application Registration. Please see the details in the [installation guide](on-premises-installation/step-by-step-installation.md).
2)	Configure Azure Service Bus or install RabbitMQ. Please see the details in the [installation guide](on-premises-installation/step-by-step-installation.md).

## Installation guide

Please follow the steps outlined in link below to install Hypergene Flow on a VM / local server.  
[On-premise step-by-step installation guide](on-premises-installation/step-by-step-installation.md)
