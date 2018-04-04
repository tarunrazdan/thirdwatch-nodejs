# thirdwatch_api.Promotion

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**promotionId** | **String** | The ID/Coupon Code within your system that you use to represent this promotion. This ID is ideally unique to the promotion across users (e.g. \&quot;Welcome\&quot;). | [optional] 
**status** | **String** | The status of the addition of promotion to an account. Best used with the add_promotion event. This way you can pass to Thirdwatch both successful and failed attempts when using a promotion. May be useful in spotting potential abuse. e.g. _success, _Failed | [optional] 
**description** | **String** | Describe promotion here. | [optional] 
**amount** | **String** | The amount or credits the promotion is worth. | [optional] 
**minPurchaseAmount** | **String** | The minimum amount someone must spend in order for the promotion to be applied. | [optional] 
**referrerUserId** | **String** | The unique user ID of the user who referred the user to this promotion. | [optional] 
**failureReason** | **String** | When adding a promotion fails, use this to describe why it failed.e.g. _alreadyUsed, _invalidCode, _notApplicable, _expired | [optional] 
**percentageOff** | **String** | The percentage discount. If the discount is 10% off, you would send \&quot;10\&quot;. | [optional] 
**currencyCode** | **String** | The [ISO-4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for the amount. e.g., USD, INR alternative currencies, like bitcoin or points systems. | [optional] 
**type** | **String** | Type of the promotion e.g., First Time, Refer, Diwali | [optional] 


