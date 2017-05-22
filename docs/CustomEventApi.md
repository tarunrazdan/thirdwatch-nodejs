# ThirdwatchApi.CustomEventApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customEvent**](CustomEventApi.md#customEvent) | **POST** /v1/custom_event | Use order_status to track the order processing workflow of a previously submitted order.


<a name="customEvent"></a>
# **customEvent**
> EventResponse customEvent(JSON)

Use order_status to track the order processing workflow of a previously submitted order.

Custom events and fields capture user behavior and differences not covered by our reserved events and fields. For example, a location tracking business can create a custom event called trackLocation with custom fields that are relevant. 

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.CustomEventApi();

var JSON = new ThirdwatchApi.Custom(); // Custom | Pass order status to thirdwatch. Only `_userID` is required field. But this should contain custom info.

apiInstance.customEvent(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**Custom**](Custom.md)| Pass order status to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain custom info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

