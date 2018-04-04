# thirdwatch_api.Seller

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerId** | **String** | The seller’s internal account ID. This field is required on all events required seller info. | [optional] 
**name** | **String** | Provide the full name associated with the seller here. Concatenate first name and last name together if you collect them separately in your system. | [optional] 
**email** | **String** | Email of the seller. Note - If the seller&#39;s email is also their account ID in your system, set both the _sellerId and _email fields to their email address. | [optional] 
**phone** | **String** | The primary phone number of the seller associated with this account. Provide the phone number as a string. | [optional] 
**createdDate** | **String** | Date when seller registered in system. | [optional] 
**lastUpdatedDate** | **String** | Date when seller profile uopdated last time. | [optional] 
**onboardingIpAddress** | **String** | Ip address used by seller while registration. | [optional] 


