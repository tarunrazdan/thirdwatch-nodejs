# thirdwatch_api.CreateOrderApi

All URIs are relative to *https://localhost/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](CreateOrderApi.md#createOrder) | **POST** /v1/createOrder | Submit a new or existing order to Thirdwatch for review. This API should contain order item info, the payment info, and user identity info.


<a name="createOrder"></a>
# **createOrder**
> EventResponse createOrder(body)

Submit a new or existing order to Thirdwatch for review. This API should contain order item info, the payment info, and user identity info.

### Example
```javascript
var thirdwatch_api = require('thirdwatch-nodejs');
var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new thirdwatch_api.CreateOrderApi();

var body = new thirdwatch_api.CreateOrder(); // CreateOrder | An order to submit for review. Only `_userID` is required field. But this should contain order info.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrder(body, callback);
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

