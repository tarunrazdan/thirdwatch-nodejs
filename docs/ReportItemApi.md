# ThirdwatchApi.ReportItemApi

All URIs are relative to *https://api.thirdwatch.ai/event*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportItem**](ReportItemApi.md#reportItem) | **POST** /v1/report_item | Use report_item to let us know when another user reports that this item may violate your company’s policies.


<a name="reportItem"></a>
# **reportItem**
> EventResponse reportItem(JSON)

Use report_item to let us know when another user reports that this item may violate your company’s policies.

If you have a feature like \&quot;Report Item\&quot; or \&quot;Flag this Item\&quot;, send that event to us using this. 

### Example
```javascript
var ThirdwatchApi = require('thirdwatch_api');
var defaultClient = ThirdwatchApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new ThirdwatchApi.ReportItemApi();

var JSON = new ThirdwatchApi.ReportItem(); // ReportItem | Pass report item info to thirdwatch. Only `_userID` is required field. But this should contain item id.

apiInstance.reportItem(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **JSON** | [**ReportItem**](ReportItem.md)| Pass report item info to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain item id. | 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

