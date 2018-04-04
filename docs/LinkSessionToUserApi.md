# thirdwatch_api.LinkSessionToUserApi

All URIs are relative to *https://localhost/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkSessionToUser**](LinkSessionToUserApi.md#linkSessionToUser) | **POST** /v1/link_session_to_user | Use link_session_to_user to associate specific session to a user. Generally used only in anonymous checkout workflows.


<a name="linkSessionToUser"></a>
# **linkSessionToUser**
> EventResponse linkSessionToUser(JSON)

Use link_session_to_user to associate specific session to a user. Generally used only in anonymous checkout workflows.

### Example
```javascript
var thirdwatch_api = require('thirdwatch-nodejs');
var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new thirdwatch_api.LinkSessionToUserApi();

var JSON = new thirdwatch_api.LinkSessionToUser(); // LinkSessionToUser | Pass session and user to thirdwatch for link. Only `_userID` is required field. But this should contain session and user info.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.linkSessionToUser(JSON, callback);
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

