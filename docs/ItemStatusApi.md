# thirdwatch_api.ItemStatusApi

All URIs are relative to *https://localhost/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemStatus**](ItemStatusApi.md#itemStatus) | **POST** /v1/item_status | Use item_status to update the status of item that you’ve already pass to Thirdwatch.


<a name="itemStatus"></a>
# **itemStatus**
> EventResponse itemStatus(JSON)

Use item_status to update the status of item that you’ve already pass to Thirdwatch.

If the status is the only thing that’s changing about the item, use this as a convenient way to send status of the item after order processing. 

### Example
```javascript
var thirdwatch_api = require('thirdwatch-nodejs');
var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new thirdwatch_api.ItemStatusApi();

var JSON = new thirdwatch_api.ItemStatus(); // ItemStatus | Pass change item status to thirdwatch. Only `_userID` is required field. But this should contain item status.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.itemStatus(JSON, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**ItemStatus**](ItemStatus.md)| Pass change item status to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain item status. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

