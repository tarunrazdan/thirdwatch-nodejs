# ThirdwatchApi.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user&#39;s account ID according to your systems. Note that user IDs are case sensitive. | [optional] 
**sessionId** | **String** | The user&#39;s current session ID, used to tie a user&#39;s action before and after login or account creation. Required if no user_id values is provided. | [optional] 
**orderId** | **String** | The ID for tracking this order in your system. | [optional] 
**transactionId** | **String** | The ID for identifying this transaction. Important for tracking transactions, and linking different parts of the same transaction together, e.g., linking a refund to its original transaction. | [optional] 
**deviceIp** | **String** | IP address of the request made by the user. Recommended for historical backfills and customers with mobile apps. | [optional] 
**originTimestamp** | **String** | Represents the time the event occured in your system. Send as a UNIX timestamp in milliseconds in string. | [optional] 
**userEmail** | **String** | Email of the user creating this order. Note - If the user&#39;s email is also their account ID in your system, set both the userId and userEmail fields to their email address. | [optional] 
**amount** | **String** | The item unit price in numbers, in the base unit of the currency_code.e.g. \&quot;2500\&quot; | [optional] 
**currencyCode** | **String** | The [ISO-4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for the amount. e.g., USD, INR alternative currencies, like bitcoin or points systems. | [optional] 
**transactionType** | **String** | The type of transaction being recorded. e.g. _sale, _authorize, _capture, _void, _refund, _deposit, _withdrawal, _transfer | [optional] 
**transactionStatus** | **String** | Use _transactionStatus to indicate the status of the transaction. The value can be \&quot;_success\&quot; (default value), \&quot;_failure\&quot; or \&quot;_pending\&quot;. For instance, If the transaction was rejected by the payment gateway, set the value to \&quot;_failure\&quot;. | [optional] 
**isFirstTimeBuyer** | **Boolean** | Is user first time buyer. | [optional] 
**billingAddress** | [**BillingAddress**](BillingAddress.md) |  | [optional] 
**shippingAddress** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) |  | [optional] 
**customInfo** | [**CustomInfo**](CustomInfo.md) |  | [optional] 


