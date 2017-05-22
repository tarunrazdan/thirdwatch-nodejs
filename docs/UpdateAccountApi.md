# ThirdwatchApi.UpdateAccountApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateAccount**](UpdateAccountApi.md#updateAccount) | **POST** /v1/update_account | Use update_account to record changes to the user&#39;s account information.


<a name="updateAccount"></a>
# **updateAccount**
> EventResponse updateAccount(JSON)

Use update_account to record changes to the user&#39;s account information.

For user accounts created before integration with Thirdwatch, there&#39;s no need to call &#x60;create_account&#x60; before &#x60;update_account&#x60;. Simply call &#x60;update_account&#x60; and we&#39;ll infer that account was created before integration. 

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.UpdateAccountApi();

var JSON = new ThirdwatchApi.UpdateAccount(); // UpdateAccount | Pass user details after update or change in user info. Only `_userID` is required field. But this should contain user info.

apiInstance.updateAccount(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**UpdateAccount**](UpdateAccount.md)| Pass user details after update or change in user info. Only &#x60;_userID&#x60; is required field. But this should contain user info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

