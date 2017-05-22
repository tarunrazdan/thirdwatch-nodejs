# ThirdwatchApi.LoginApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](LoginApi.md#login) | **POST** /v1/login | Use login to record when a user attempts to log in.


<a name="login"></a>
# **login**
> EventResponse login(JSON)

Use login to record when a user attempts to log in.

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.LoginApi();

var JSON = new ThirdwatchApi.Login(); // Login | Pass login status to thirdwatch. Only `_userID` is required field. But this should contain login info.

apiInstance.login(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**Login**](Login.md)| Pass login status to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain login info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

