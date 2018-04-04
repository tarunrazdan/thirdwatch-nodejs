# thirdwatch_api.RemoveFromCartApi

All URIs are relative to *https://localhost/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**removeFromCart**](RemoveFromCartApi.md#removeFromCart) | **POST** /v1/remove_from_cart | Use remove_from_cart when a user removes an item from their shopping cart or list.


<a name="removeFromCart"></a>
# **removeFromCart**
> EventResponse removeFromCart(JSON)

Use remove_from_cart when a user removes an item from their shopping cart or list.

### Example
```javascript
var thirdwatch_api = require('thirdwatch-nodejs');
var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new thirdwatch_api.RemoveFromCartApi();

var JSON = new thirdwatch_api.RemoveFromCart(); // RemoveFromCart | Pass removed item info to thirdwatch. Only `_userID` is required field. But this should contain item info.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeFromCart(JSON, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**RemoveFromCart**](RemoveFromCart.md)| Pass removed item info to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain item info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

