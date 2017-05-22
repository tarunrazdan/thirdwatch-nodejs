# ThirdwatchApi.OrderStatusApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderStatus**](OrderStatusApi.md#orderStatus) | **POST** /v1/order_status | Use order_status to track the order processing workflow of a previously submitted order.


<a name="orderStatus"></a>
# **orderStatus**
> EventResponse orderStatus(JSON)

Use order_status to track the order processing workflow of a previously submitted order.

For example, order_status can be used to indicate that an order has been held for review, canceled due to suspected fraud, or fulfilled. This event can be called multiple times to record changes an order&#39;s status. 

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.OrderStatusApi();

var JSON = new ThirdwatchApi.OrderStatus(); // OrderStatus | Pass order status to thirdwatch. Only `_userID` is required field. But this should contain order info.

apiInstance.orderStatus(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**OrderStatus**](OrderStatus.md)| Pass order status to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain order info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

