# thirdwatch_api.CreateAccountApi

All URIs are relative to *https://localhost/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccount**](CreateAccountApi.md#createAccount) | **POST** /v1/create_account | Use create_account to pass user details at user registration.


<a name="createAccount"></a>
# **createAccount**
> EventResponse createAccount(JSON)

Use create_account to pass user details at user registration.

### Example
```javascript
var thirdwatch_api = require('thirdwatch_api');
var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new thirdwatch_api.CreateAccountApi();

var JSON = new thirdwatch_api.CreateAccount(); // CreateAccount | Pass user details after registration. Only `_userID` is required field. But this should contain user info.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAccount(JSON, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**CreateAccount**](CreateAccount.md)| Pass user details after registration. Only &#x60;_userID&#x60; is required field. But this should contain user info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

