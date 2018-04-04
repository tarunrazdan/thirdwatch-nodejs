# thirdwatch_api.TransactionApi

All URIs are relative to *https://localhost/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transaction**](TransactionApi.md#transaction) | **POST** /v1/transaction | Use transaction to record attempts results to Pay, Transfer money, Refund or other transactions.


<a name="transaction"></a>
# **transaction**
> EventResponse transaction(JSON)

Use transaction to record attempts results to Pay, Transfer money, Refund or other transactions.

### Example
```javascript
var thirdwatch_api = require('thirdwatch-nodejs');
var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new thirdwatch_api.TransactionApi();

var JSON = new thirdwatch_api.Transaction(); // Transaction | Pass transaction results to thirdwatch. Only `_userID` is required field. But this should contain transaction info.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transaction(JSON, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**Transaction**](Transaction.md)| Pass transaction results to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain transaction info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

