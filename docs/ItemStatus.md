# thirdwatch_api.ItemStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user&#39;s account ID according to your systems. Note that user IDs are case sensitive. | [optional] 
**sessionId** | **String** | The user&#39;s current session ID, used to tie a user&#39;s action before and after login or account creation. Required if no user_id values is provided. | [optional] 
**orderId** | **String** | The ID for the order that this chargeback is filed against. This field is not required if this chargeback was filed against a transaction with no _orderId. | [optional] 
**itemId** | **String** | The item&#39;s unique identifier according to your systems. Use the same ID that you would use to look up items on your website&#39;s database. | [optional] 
**itemStatus** | **String** | Indicates the high-level state of the order. e.g. _approved, _canceled, _held, _fulfilled, _returned, _rto | [optional] 
**reason** | **String** | The reason for a cancellation. e.g. _paymentRisk, _abuse, _policy, _other | [optional] 
**shippingCost** | **String** | if _approved or _fulfilled than pass the shipping cost. e.g. \&quot;50\&quot; | [optional] 
**trackingNumber** | **String** | if _approved or _fulfilled than pass the tracking number. e.g. \&quot;55327470\&quot; | [optional] 
**trackingMethod** | **String** | if _approved or _fulfilled than pass the tracking url. e.g. \&quot;http://fedex.com/track?q&#x3D;abc123\&quot; | [optional] 
**source** | **String** | The source of a decision. e.g. _automated, _manualReview\&quot; | [optional] 
**analyst** | **String** | The analyst who made the decision, if manual. | [optional] 
**description** | **String** | Any additional information about this order status change. | [optional] 
**customInfo** | [**CustomInfo**](CustomInfo.md) |  | [optional] 


