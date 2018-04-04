# thirdwatch_api.CreateAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user&#39;s account ID according to your systems. Note that user IDs are case sensitive. | [optional] 
**sessionId** | **String** | The user&#39;s current session ID, used to tie a user&#39;s action before and after login or account creation. Required if no user_id values is provided. | [optional] 
**deviceIp** | **String** | IP address of the request made by the user. Recommended for historical backfills and customers with mobile apps. | [optional] 
**originTimestamp** | **String** | Represents the time the event occured in your system. Send as a UNIX timestamp in milliseconds in string. | [optional] 
**userEmail** | **String** | Email of the user creating this order. Note - If the user&#39;s email is also their account ID in your system, set both the userId and userEmail fields to their email address. | [optional] 
**firstName** | **String** | Provide the first name associated with the user here. | [optional] 
**lastName** | **String** | Provide the last name associated with the user here. | [optional] 
**phone** | **String** | The primary phone number of the user associated with this account. Provide the phone number as a string. | [optional] 
**age** | **String** | Age of the user e.g. \&quot;25\&quot; | [optional] 
**gender** | **String** | Gender of the user e.g. \&quot;_male\&quot;, \&quot;_female\&quot; or \&quot;_trans\&quot; | [optional] 
**referralCode** | **String** | Code or promotion used by the user while creating account. | [optional] 
**referrerUserId** | **String** | The ID of the user that referred the current user to your business. This field is required for detecting referral fraud. | [optional] 
**billingAddress** | [**BillingAddress**](BillingAddress.md) |  | [optional] 
**shippingAddress** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 
**paymentMethods** | [**[PaymentMethod]**](PaymentMethod.md) | The payment information associated with this account. Represented as an array of nested payment_method objects containing payment type, payment gateway, credit card bin, etc. | [optional] 
**promotions** | [**[Promotion]**](Promotion.md) | The list of promotions that apply to this account. You can add one or more promotions when creating or updating an order. Represented as a JSON array of promotion objects. You can also separately add promotions to the account via the addPromotion event. | [optional] 
**socialSignOnType** | **String** | If the user logged in with a social identify provider, give the name here. e.g. _google, _facebook, _twitter, _linkedin, _other | [optional] 
**emailConfirmedStatus** | **String** | Status of email verification. e.g. _success, _failure, _pending | [optional] 
**phoneConfirmedStatus** | **String** | Status of phone verification. e.g. _success, _failure, _pending | [optional] 
**isNewsletterSubscribed** | **Boolean** | Is user subscribed for newsletter. e.g. true, false | [optional] 
**accountStatus** | **String** | Current status of account, e.g. _active, _inactive | [optional] 
**facebookId** | **String** | Facebook user id or token of the user. This can help to varify his social identity. | [optional] 
**googleId** | **String** | Google user id or token of the user. This can help to varify his social identity. | [optional] 
**twitterId** | **String** | Twitter handle or token of the user. This can help to varify his social identity. | [optional] 
**customInfo** | [**CustomInfo**](CustomInfo.md) |  | [optional] 


