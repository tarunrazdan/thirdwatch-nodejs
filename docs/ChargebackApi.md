# ThirdwatchApi.ChargebackApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chargeback**](ChargebackApi.md#chargeback) | **POST** /v1/chargeback | Use chargeback to capture a chargeback reported on a transaction. This event can be called multiple times to record changes to the chargeback state.


<a name="chargeback"></a>
# **chargeback**
> EventResponse chargeback(JSON)

Use chargeback to capture a chargeback reported on a transaction. This event can be called multiple times to record changes to the chargeback state.

Note - When you send a chargeback event you also need to send a label event if you want to prevent the user from making another purchase. 

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.ChargebackApi();

var JSON = new ThirdwatchApi.Chargeback(); // Chargeback | Pass chargeback to thirdwatch. Only `_userID` is required field. But this should contain chargeback info.

apiInstance.chargeback(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**Chargeback**](Chargeback.md)| Pass chargeback to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain chargeback info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

