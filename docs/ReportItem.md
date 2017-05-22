# ThirdwatchApi.ReportItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **String** | The user&#39;s account ID according to your systems. Note that user IDs are case sensitive. | [optional] 
**sessionId** | **String** | The user&#39;s current session ID, used to tie a user&#39;s action before and after login or account creation. Required if no user_id values is provided. | [optional] 
**itemId** | **String** | The unique ID for the item that is being reported. Note - item IDs are case sensitive. | [optional] 
**deviceIp** | **String** | IP address of the request made by the user. Recommended for historical backfills and customers with mobile apps. | [optional] 
**originTimestamp** | **String** | Represents the time the event occured in your system. Send as a UNIX timestamp in milliseconds in string. | [optional] 
**userEmail** | **String** | Email of the user creating this order. Note - If the user&#39;s email is also their account ID in your system, set both the userId and userEmail fields to their email address. | [optional] 
**customInfo** | [**CustomInfo**](CustomInfo.md) |  | [optional] 


