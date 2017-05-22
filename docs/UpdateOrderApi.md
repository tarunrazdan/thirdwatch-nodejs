# ThirdwatchApi.UpdateOrderApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateOrder**](UpdateOrderApi.md#updateOrder) | **POST** /v1/update_order | Update details of an existing order.


<a name="updateOrder"></a>
# **updateOrder**
> EventResponse updateOrder(JSON)

Update details of an existing order.

* This event contains the same fields as &#x60;&#x60;&#x60;create_order&#x60;&#x60;&#x60;. * The existing order will be completely replaced by the values sent in &#x60;update_order&#x60;. Be sure to specify all values for the order, not just those that changed. * If no matching &#x60;_orderId&#x60; found, a new order will be created. 

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.UpdateOrderApi();

var JSON = new ThirdwatchApi.UpdateOrder(); // UpdateOrder | Update details of an existing order. Only `_userID` is required field. But this should contain existing order info.

apiInstance.updateOrder(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**UpdateOrder**](UpdateOrder.md)| Update details of an existing order. Only &#x60;_userID&#x60; is required field. But this should contain existing order info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

