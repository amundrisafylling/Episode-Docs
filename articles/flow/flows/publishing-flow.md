
# Publish a Flow

To publish a Flow, open the Flow in the Designer and press Publish from the application bar.  

![img](../../../images/publish-flow.png)

Hypergene Flow defines three environments: 

-	Development 
-	Test
-	Production 

While developing a Flow, you are working in one environment which usually is the Development environment. Once your Flow reaches a stage where it's prepared for testing or deployment in production, you should **publish** it to either the Test or Production environment. This allows users or APIs to access a stable version of the Flow, while you can continue development of subsequent versions or features.

When you publish a Flow, a copy is made and saved to the target environment. This means that it is   completely isolated from the configuration of the source environment. 

All Workspace Variables in the Flow will now automatically use the values for the target environment instead of the values of the source environment. 

For example, if you publish from Development to Production and you have a different database connection for the Production and Development environments, the published Flow will now automatically connect to the production database instead of the development database. 

Flows published to production will also run faster due to optimizations applied during the publish process.

