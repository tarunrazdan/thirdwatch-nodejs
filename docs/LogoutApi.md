# ThirdwatchApi.LogoutApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logout**](LogoutApi.md#logout) | **POST** /v1/logout | Use logout to record when a user logs out.


<a name="logout"></a>
# **logout**
> EventResponse logout(JSON)

Use logout to record when a user logs out.

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.LogoutApi();

var JSON = new ThirdwatchApi.Logout(); // Logout | Pass logout status to thirdwatch. Only `_userID` is required field. But this should contain logout info.

apiInstance.logout(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**Logout**](Logout.md)| Pass logout status to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain logout info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

