# thirdwatch_api.AddToCartApi

All URIs are relative to *https://localhost/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addToCart**](AddToCartApi.md#addToCart) | **POST** /v1/add_to_cart | Use add_to_cart when a user adds an item to their shopping cart or list.


<a name="addToCart"></a>
# **addToCart**
> EventResponse addToCart(JSON)

Use add_to_cart when a user adds an item to their shopping cart or list.

### Example
```javascript
var thirdwatch_api = require('thirdwatch-nodejs');
var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new thirdwatch_api.AddToCartApi();

var JSON = new thirdwatch_api.AddToCart(); // AddToCart | Pass added item info to thirdwatch. Only `_userID` is required field. But this should contain item info.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addToCart(JSON, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**AddToCart**](AddToCart.md)| Pass added item info to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain item info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

