# thirdwatch_api

ThirdwatchApi - JavaScript client for thirdwatch_api

The first version of the Thirdwatch API is an exciting step forward towards making it easier for developers to pass data to Thirdwatch.  

# Introduction 

Once you've [registered your website/app](https://thirdwatch.ai) it's easy to start sending data to Thirdwatch.  All endpoints are only accessible via https and are located at `api.thirdwatch.ai`. 
For instance: you can send event at the moment by ```HTTP POST``` Request to the following URL with your API key in ```Header``` and ```JSON``` data in request body. 

```   https://api.thirdwatch.ai/event/v1 ``` 

Every API request must contain ```API Key``` in header value ```X-THIRDWATCH-API-KEY```  Every event must contain your ```_userId``` (if this is not available, you can alternatively provide a ```_sessionId``` value also in ```_userId```). 

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm


```shell
npm install thirdwatch_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/thirdwatch/thirdwatch-nodejs
then install it via:

```shell
    npm install thirdwatch/thirdwatch-nodejs --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ThirdwatchApi = require('thirdwatch_api');

var defaultClient = ThirdwatchApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"

var api = new ThirdwatchApi.AddPromotionApi()

var JSON = new ThirdwatchApi.AddPromotion(); // {AddPromotion} Pass added promotion info to thirdwatch. Only `_userID` is required field. But this should contain promotion info.

api.addPromotion(JSON).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.thirdwatch.ai/event*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ThirdwatchApi.AddPromotionApi* | [**addPromotion**](docs/AddPromotionApi.md#addPromotion) | **POST** /v1/add_promotion | Use add_promotion to record when a user adds one or more promotions to their account.
*ThirdwatchApi.AddToCartApi* | [**addToCart**](docs/AddToCartApi.md#addToCart) | **POST** /v1/add_to_cart | Use add_to_cart when a user adds an item to their shopping cart or list.
*ThirdwatchApi.ChargebackApi* | [**chargeback**](docs/ChargebackApi.md#chargeback) | **POST** /v1/chargeback | Use chargeback to capture a chargeback reported on a transaction. This event can be called multiple times to record changes to the chargeback state.
*ThirdwatchApi.CreateAccountApi* | [**createAccount**](docs/CreateAccountApi.md#createAccount) | **POST** /v1/create_account | Use create_account to pass user details at user registration.
*ThirdwatchApi.CreateOrderApi* | [**createOrder**](docs/CreateOrderApi.md#createOrder) | **POST** /v1/createOrder | Submit a new or existing order to Thirdwatch for review. This API should contain order item info, the payment info, and user identity info.
*ThirdwatchApi.CustomEventApi* | [**customEvent**](docs/CustomEventApi.md#customEvent) | **POST** /v1/custom_event | Use order_status to track the order processing workflow of a previously submitted order.
*ThirdwatchApi.LinkSessionToUserApi* | [**linkSessionToUser**](docs/LinkSessionToUserApi.md#linkSessionToUser) | **POST** /v1/link_session_to_user | Use link_session_to_user to associate specific session to a user. Generally used only in anonymous checkout workflows.
*ThirdwatchApi.LoginApi* | [**login**](docs/LoginApi.md#login) | **POST** /v1/login | Use login to record when a user attempts to log in.
*ThirdwatchApi.LogoutApi* | [**logout**](docs/LogoutApi.md#logout) | **POST** /v1/logout | Use logout to record when a user logs out.
*ThirdwatchApi.OrderStatusApi* | [**orderStatus**](docs/OrderStatusApi.md#orderStatus) | **POST** /v1/order_status | Use order_status to track the order processing workflow of a previously submitted order.
*ThirdwatchApi.RemoveFromCartApi* | [**removeFromCart**](docs/RemoveFromCartApi.md#removeFromCart) | **POST** /v1/remove_from_cart | Use remove_from_cart when a user removes an item from their shopping cart or list.
*ThirdwatchApi.ReportItemApi* | [**reportItem**](docs/ReportItemApi.md#reportItem) | **POST** /v1/report_item | Use report_item to let us know when another user reports that this item may violate your company’s policies.
*ThirdwatchApi.SendMessageApi* | [**sendMessage**](docs/SendMessageApi.md#sendMessage) | **POST** /v1/send_message | Use send_message to record when a user sends a message to other i.e. seller, support.
*ThirdwatchApi.SubmitReviewApi* | [**submitReview**](docs/SubmitReviewApi.md#submitReview) | **POST** /v1/submit_review | Use submit_review when a user-submitted review of a product or seller.
*ThirdwatchApi.TagAPIApi* | [**tagUser**](docs/TagAPIApi.md#tagUser) | **POST** /v1/tag | The Tag API enables you to tell Thirdwatch which of your users are bad and which are good.
*ThirdwatchApi.TransactionApi* | [**transaction**](docs/TransactionApi.md#transaction) | **POST** /v1/transaction | Use transaction to record attempts results to Pay, Transfer money, Refund or other transactions.
*ThirdwatchApi.UntagAPIApi* | [**unTagUser**](docs/UntagAPIApi.md#unTagUser) | **POST** /v1/untag | If you are unsure whether a user is bad or good, you can always remove tag and leave the user in a neutral state.
*ThirdwatchApi.UpdateAccountApi* | [**updateAccount**](docs/UpdateAccountApi.md#updateAccount) | **POST** /v1/update_account | Use update_account to record changes to the user&#39;s account information.
*ThirdwatchApi.UpdateOrderApi* | [**updateOrder**](docs/UpdateOrderApi.md#updateOrder) | **POST** /v1/update_order | Update details of an existing order.


## Documentation for Models

 - [ThirdwatchApi.AddPromotion](docs/AddPromotion.md)
 - [ThirdwatchApi.AddToCart](docs/AddToCart.md)
 - [ThirdwatchApi.BillingAddress](docs/BillingAddress.md)
 - [ThirdwatchApi.Chargeback](docs/Chargeback.md)
 - [ThirdwatchApi.CreateAccount](docs/CreateAccount.md)
 - [ThirdwatchApi.CreateOrder](docs/CreateOrder.md)
 - [ThirdwatchApi.Custom](docs/Custom.md)
 - [ThirdwatchApi.CustomInfo](docs/CustomInfo.md)
 - [ThirdwatchApi.ErrorResponse](docs/ErrorResponse.md)
 - [ThirdwatchApi.EventResponse](docs/EventResponse.md)
 - [ThirdwatchApi.Item](docs/Item.md)
 - [ThirdwatchApi.LinkSessionToUser](docs/LinkSessionToUser.md)
 - [ThirdwatchApi.Login](docs/Login.md)
 - [ThirdwatchApi.Logout](docs/Logout.md)
 - [ThirdwatchApi.OrderStatus](docs/OrderStatus.md)
 - [ThirdwatchApi.PaymentMethod](docs/PaymentMethod.md)
 - [ThirdwatchApi.Promotion](docs/Promotion.md)
 - [ThirdwatchApi.RemoveFromCart](docs/RemoveFromCart.md)
 - [ThirdwatchApi.ReportItem](docs/ReportItem.md)
 - [ThirdwatchApi.Seller](docs/Seller.md)
 - [ThirdwatchApi.SendMessage](docs/SendMessage.md)
 - [ThirdwatchApi.ShippingAddress](docs/ShippingAddress.md)
 - [ThirdwatchApi.SubmitReview](docs/SubmitReview.md)
 - [ThirdwatchApi.Tag](docs/Tag.md)
 - [ThirdwatchApi.Transaction](docs/Transaction.md)
 - [ThirdwatchApi.UnTag](docs/UnTag.md)
 - [ThirdwatchApi.UpdateAccount](docs/UpdateAccount.md)
 - [ThirdwatchApi.UpdateOrder](docs/UpdateOrder.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: X-THIRDWATCH-API-KEY
- **Location**: HTTP header

