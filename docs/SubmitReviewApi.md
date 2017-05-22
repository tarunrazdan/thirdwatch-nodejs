# ThirdwatchApi.SubmitReviewApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitReview**](SubmitReviewApi.md#submitReview) | **POST** /v1/submit_review | Use submit_review when a user-submitted review of a product or seller.


<a name="submitReview"></a>
# **submitReview**
> EventResponse submitReview(JSON)

Use submit_review when a user-submitted review of a product or seller.

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.SubmitReviewApi();

var JSON = new ThirdwatchApi.SubmitReview(); // SubmitReview | Pass review to thirdwatch. Only `_userID` is required field. But this should contain review info.

apiInstance.submitReview(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**SubmitReview**](SubmitReview.md)| Pass review to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain review info. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

