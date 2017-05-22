# ThirdwatchApi.SendMessageApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendMessage**](SendMessageApi.md#sendMessage) | **POST** /v1/send_message | Use send_message to record when a user sends a message to other i.e. seller, support.


<a name="sendMessage"></a>
# **sendMessage**
> EventResponse sendMessage(JSON)

Use send_message to record when a user sends a message to other i.e. seller, support.

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.SendMessageApi();

var JSON = new ThirdwatchApi.SendMessage(); // SendMessage | Pass message to thirdwatch. Only `_userID` is required field. But this should contain message info.

apiInstance.sendMessage(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**SendMessage**](SendMessage.md)| Pass message to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain message info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

