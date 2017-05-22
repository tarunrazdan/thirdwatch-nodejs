# ThirdwatchApi.UntagAPIApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**unTagUser**](UntagAPIApi.md#unTagUser) | **POST** /v1/untag | If you are unsure whether a user is bad or good, you can always remove tag and leave the user in a neutral state.


<a name="unTagUser"></a>
# **unTagUser**
> EventResponse unTagUser(JSON)

If you are unsure whether a user is bad or good, you can always remove tag and leave the user in a neutral state.

To untag a user for a particular abuse type, send the abuse_type key in json data. In the rare case that you want to remove all tags for all abuse types for a particular user, send without the abuse_type query parameter. 

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.UntagAPIApi();

var JSON = new ThirdwatchApi.UnTag(); // UnTag | Pass user and it's info to thirdwatch. Only `_userID` is required field. But this should contain untag info.

apiInstance.unTagUser(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**UnTag**](UnTag.md)| Pass user and it&#39;s info to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain untag info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

