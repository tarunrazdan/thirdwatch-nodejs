# thirdwatch_api.UpdateOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user&#39;s account ID according to your systems. Note that user IDs are case sensitive. | [optional] 
**sessionId** | **String** | The user&#39;s current session ID, used to tie a user&#39;s action before and after login or account creation. Required if no user_id values is provided. | [optional] 
**orderId** | **String** | The ID for tracking this order in your system. | 
**deviceIp** | **String** | IP address of the request made by the user. Recommended for historical backfills and customers with mobile apps. | [optional] 
**originTimestamp** | **String** | Represents the time the event occured in your system. Send as a UNIX timestamp in milliseconds in string. | [optional] 
**userEmail** | **String** | Email of the user creating this order. Note - If the user&#39;s email is also their account ID in your system, set both the userId and userEmail fields to their email address. | [optional] 
**amount** | **String** | The item unit price in numbers, in the base unit of the currency_code.e.g. \&quot;2500\&quot; | [optional] 
**currencyCode** | **String** | The [ISO-4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for the amount. e.g., USD, INR alternative currencies, like bitcoin or points systems. | [optional] 
**hasExpeditedShipping** | **Boolean** | Whether the user requested priority/expedited shipping on their order. | [optional] 
**shippingMethod** | **String** | Indicates the method of delivery to the user. e.g. _electronic, _physical | [optional] 
**orderReferrer** | **String** | Referer website or user name. | [optional] 
**isPrePaid** | **Boolean** | is order is prepaid. | [optional] 
**isGift** | **Boolean** | Is user chosen gift pack. | [optional] 
**isReturn** | **Boolean** | Is this return order. | [optional] 
**isFirstTimeBuyer** | **Boolean** | Is user first time buyer. | [optional] 
**billingAddress** | [**BillingAddress**](BillingAddress.md) |  | [optional] 
**shippingAddress** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**paymentMethods** | [**[PaymentMethod]**](PaymentMethod.md) | The payment information associated with this order. Represented as an array of nested payment_method objects containing payment type, payment gateway, credit card bin, etc. | [optional] 
**promotions** | [**[Promotion]**](Promotion.md) | The list of promotions that apply to this order. You can add one or more promotions when creating or updating an order. Represented as a JSON array of promotion objects. You can also separately add promotions to the account via the addPromotion event. | [optional] 
**items** | [**[Item]**](Item.md) | The list of items ordered. Represented as a JSON array of item | [optional] 
**customInfo** | [**CustomInfo**](CustomInfo.md) |  | [optional] 


