# ThirdwatchApi.LinkSessionToUserApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkSessionToUser**](LinkSessionToUserApi.md#linkSessionToUser) | **POST** /v1/link_session_to_user | Use link_session_to_user to associate specific session to a user. Generally used only in anonymous checkout workflows.


<a name="linkSessionToUser"></a>
# **linkSessionToUser**
> EventResponse linkSessionToUser(JSON)

Use link_session_to_user to associate specific session to a user. Generally used only in anonymous checkout workflows.

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.LinkSessionToUserApi();

var JSON = new ThirdwatchApi.LinkSessionToUser(); // LinkSessionToUser | Pass session and user to thirdwatch for link. Only `_userID` is required field. But this should contain session and user info.

apiInstance.linkSessionToUser(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**LinkSessionToUser**](LinkSessionToUser.md)| Pass session and user to thirdwatch for link. Only &#x60;_userID&#x60; is required field. But this should contain session and user info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

