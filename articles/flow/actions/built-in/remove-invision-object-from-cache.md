# Remove InVision object from Cache

This action removes an InVision object from the Flow cache. 

For performance reasons, Flow will cache data and metadata for InVision objects when used in [Calculation Flows](../profitbase-invision/calculation-flow/overview.md). Specifically, the objects that are cached are [Lookup tables](../profitbase-invision/calculation-flow/lookup-tables.md), [Auto transactions](../profitbase-invision/calculation-flow/auto-transactions.md), [Distribution keys](../profitbase-invision/calculation-flow/distribution-keys.md) and `Dimensions`. 

![img](/images/flow/remove-invision-object-from-cache.png)


**Example** ![img](../../../../images/strz.jpg)  
This flow first updates the Price List using [custom SQL](../sql-server/update-entity.md), then runs Remove **InVision object from Cache** to explicitly evict that Price List from Flow’s cache (using the objectId). This ensures that the next time the object is used in Calculation Flows, Flow reloads fresh data/metadata instead of continuing to use a stale cached version.
</br>

## Properties

| Property                        | Required | Description |
|---------------------------------|-----------|-------------|
| Title                       | Optional  | A descriptive name for the action. |
| Connection                  | Optional  | InVision connection used to access the target environment where the object cache should be cleared. |
| Object to remove from cache | Required  | The InVision object to evict from cache. Can be a **Table**, **View**, or **Data Store**. |
| Disabled                    | Optional  | If enabled, the action will be skipped during flow execution. |
| Description                 | Optional  | Optional free-text description explaining why or when the cache invalidation is needed. |




> [!NOTE]
> You only need to use this action when you modify an object used in Calculation Flows `programmatically`, or when using a `View` as a Lookup table source and the underlying data of the View changes.



**You DO need to use this action**  
- When you `programmatically` modify an object used in a Calculation Flow by adding, removing or updating rows using a [SQL Script](../../../invision/docs/sqlscripts.md), [Stored Procedure](../../../invision/docs/stored-procedures.md) or any type of `custom code` that execute SQL commands that updates an object. If you use custom code to modify data stored in an object, InVision is not able to track this, so it cannot automatically notify Flow to invalidate its cache.
- When using a `View` as a [Lookup table](../profitbase-invision/calculation-flow/lookup-tables.md), and one of the underlying tables has changed.


**You DO NOT need to use this action**  
- When an object is modified from the InVision Designer or Workbooks through built-in UI components
- When an object is modified through an InVision API

