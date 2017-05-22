# ThirdwatchApi.CreateOrderApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](CreateOrderApi.md#createOrder) | **POST** /v1/createOrder | Submit a new or existing order to Thirdwatch for review. This API should contain order item info, the payment info, and user identity info.


<a name="createOrder"></a>
# **createOrder**
> EventResponse createOrder(body)

Submit a new or existing order to Thirdwatch for review. This API should contain order item info, the payment info, and user identity info.

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.CreateOrderApi();

var body = new ThirdwatchApi.CreateOrder(); // CreateOrder | An order to submit for review. Only `_userID` is required field. But this should contain order info.

apiInstance.createOrder(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrder**](CreateOrder.md)| An order to submit for review. Only &#x60;_userID&#x60; is required field. But this should contain order info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

