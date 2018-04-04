# thirdwatch_api.SendMessageApi

All URIs are relative to *https://localhost/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendMessage**](SendMessageApi.md#sendMessage) | **POST** /v1/send_message | Use send_message to record when a user sends a message to other i.e. seller, support.


<a name="sendMessage"></a>
# **sendMessage**
> EventResponse sendMessage(JSON)

Use send_message to record when a user sends a message to other i.e. seller, support.

### Example
```javascript
var thirdwatch_api = require('thirdwatch-nodejs');
var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new thirdwatch_api.SendMessageApi();

var JSON = new thirdwatch_api.SendMessage(); // SendMessage | Pass message to thirdwatch. Only `_userID` is required field. But this should contain message info.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendMessage(JSON, callback);
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

