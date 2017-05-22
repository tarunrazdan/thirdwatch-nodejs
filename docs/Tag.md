# ThirdwatchApi.Tag

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user&#39;s account ID according to your systems. Note that user IDs are case sensitive. | [optional] 
**isBad** | **Boolean** | Indicates whether a user is engaging in behavior deemed harmful to your business. Set to true if the user is engaging in abusive activity. Set to false if the user is engaging in valid activity. | [optional] 
**abuseType** | **String** | The type of abuse for which you want to send a tag. It&#39;s important to send a tag specific to the type of abuse the user is committing so that thirdwatch can learn about specific patterns of behavior. You&#39;ll end up with more accurate results this way. e.g. _paymentAbuse, _contentAbuse, _promotionAbuse, _accountAbuse | [optional] 
**description** | **String** | The text content of the tag.Useful as annotation on why the label was added. | [optional] 
**source** | **String** | String describing the original source of the tag information (e.g. payment gateway, manual review, etc.). | [optional] 
**analyst** | **String** | Unique identifier (e.g. email address) of the analyst who applied the label. Useful for tracking purposes after the fact. | [optional] 
**customInfo** | [**CustomInfo**](CustomInfo.md) |  | [optional] 


