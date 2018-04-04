# thirdwatch_api

ThirdwatchApi - JavaScript client for thirdwatch_api

The first version of the Thirdwatch API is an exciting step forward towards making it easier for developers to pass data to Thirdwatch.  

# Introduction 

Once you've [registered your website/app](https://thirdwatch.ai) it's easy to start sending data to Thirdwatch.  All endpoints are only accessible via https and are located at `api.thirdwatch.ai`. 
For instance: you can send event at the moment by ```HTTP POST``` Request to the following URL with your API key in ```Header``` and ```JSON``` data in request body. 

```   https://api.thirdwatch.ai/event/v1 ``` 

Every API request must contain ```API Key``` in header value ```X-THIRDWATCH-API-KEY```  Every event must contain your ```_userId``` (if this is not available, you can alternatively provide a ```_sessionId``` value also in ```_userId```). 

- API version: 0.0.1
- Package version: 0.0.2
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install thirdwatch_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your thirdwatch_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('thirdwatch_api')` in javascript files from the directory you ran the last 
command above from.

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
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var thirdwatch_api = require('thirdwatch_api');

var defaultClient = thirdwatch_api.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['X-THIRDWATCH-API-KEY'] = "Token"

var api = new thirdwatch_api.AddPromotionApi()

var JSON = new thirdwatch_api.AddPromotion(); // {AddPromotion} Pass added promotion info to thirdwatch. Only `_userID` is required field. But this should contain promotion info.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addPromotion(JSON, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.thirdwatch.ai/event*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*thirdwatch_api.AddPromotionApi* | [**addPromotion**](docs/AddPromotionApi.md#addPromotion) | **POST** /v1/add_promotion | Use add_promotion to record when a user adds one or more promotions to their account.
*thirdwatch_api.AddToCartApi* | [**addToCart**](docs/AddToCartApi.md#addToCart) | **POST** /v1/add_to_cart | Use add_to_cart when a user adds an item to their shopping cart or list.
*thirdwatch_api.ChargebackApi* | [**chargeback**](docs/ChargebackApi.md#chargeback) | **POST** /v1/chargeback | Use chargeback to capture a chargeback reported on a transaction. This event can be called multiple times to record changes to the chargeback state.
*thirdwatch_api.CreateAccountApi* | [**createAccount**](docs/CreateAccountApi.md#createAccount) | **POST** /v1/create_account | Use create_account to pass user details at user registration.
*thirdwatch_api.CreateOrderApi* | [**createOrder**](docs/CreateOrderApi.md#createOrder) | **POST** /v1/createOrder | Submit a new or existing order to Thirdwatch for review. This API should contain order item info, the payment info, and user identity info.
*thirdwatch_api.CustomEventApi* | [**customEvent**](docs/CustomEventApi.md#customEvent) | **POST** /v1/custom_event | Use order_status to track the order processing workflow of a previously submitted order.
*thirdwatch_api.ItemStatusApi* | [**itemStatus**](docs/ItemStatusApi.md#itemStatus) | **POST** /v1/item_status | Use item_status to update the status of item that you’ve already pass to Thirdwatch.
*thirdwatch_api.LinkSessionToUserApi* | [**linkSessionToUser**](docs/LinkSessionToUserApi.md#linkSessionToUser) | **POST** /v1/link_session_to_user | Use link_session_to_user to associate specific session to a user. Generally used only in anonymous checkout workflows.
*thirdwatch_api.LoginApi* | [**login**](docs/LoginApi.md#login) | **POST** /v1/login | Use login to record when a user attempts to log in.
*thirdwatch_api.LogoutApi* | [**logout**](docs/LogoutApi.md#logout) | **POST** /v1/logout | Use logout to record when a user logs out.
*thirdwatch_api.OrderStatusApi* | [**orderStatus**](docs/OrderStatusApi.md#orderStatus) | **POST** /v1/order_status | Use order_status to track the order processing workflow of a previously submitted order.
*thirdwatch_api.RemoveFromCartApi* | [**removeFromCart**](docs/RemoveFromCartApi.md#removeFromCart) | **POST** /v1/remove_from_cart | Use remove_from_cart when a user removes an item from their shopping cart or list.
*thirdwatch_api.ReportItemApi* | [**reportItem**](docs/ReportItemApi.md#reportItem) | **POST** /v1/report_item | Use report_item to let us know when another user reports that this item may violate your company’s policies.
*thirdwatch_api.SendMessageApi* | [**sendMessage**](docs/SendMessageApi.md#sendMessage) | **POST** /v1/send_message | Use send_message to record when a user sends a message to other i.e. seller, support.
*thirdwatch_api.SubmitReviewApi* | [**submitReview**](docs/SubmitReviewApi.md#submitReview) | **POST** /v1/submit_review | Use submit_review when a user-submitted review of a product or seller.
*thirdwatch_api.TagAPIApi* | [**tagUser**](docs/TagAPIApi.md#tagUser) | **POST** /v1/tag | The Tag API enables you to tell Thirdwatch which of your users are bad and which are good.
*thirdwatch_api.TransactionApi* | [**transaction**](docs/TransactionApi.md#transaction) | **POST** /v1/transaction | Use transaction to record attempts results to Pay, Transfer money, Refund or other transactions.
*thirdwatch_api.UntagAPIApi* | [**unTagUser**](docs/UntagAPIApi.md#unTagUser) | **POST** /v1/untag | If you are unsure whether a user is bad or good, you can always remove tag and leave the user in a neutral state.
*thirdwatch_api.UpdateAccountApi* | [**updateAccount**](docs/UpdateAccountApi.md#updateAccount) | **POST** /v1/update_account | Use update_account to record changes to the user&#39;s account information.
*thirdwatch_api.UpdateOrderApi* | [**updateOrder**](docs/UpdateOrderApi.md#updateOrder) | **POST** /v1/update_order | Update details of an existing order.


## Documentation for Models

 - [thirdwatch_api.AddPromotion](docs/AddPromotion.md)
 - [thirdwatch_api.AddToCart](docs/AddToCart.md)
 - [thirdwatch_api.BillingAddress](docs/BillingAddress.md)
 - [thirdwatch_api.Chargeback](docs/Chargeback.md)
 - [thirdwatch_api.CreateAccount](docs/CreateAccount.md)
 - [thirdwatch_api.CreateOrder](docs/CreateOrder.md)
 - [thirdwatch_api.Custom](docs/Custom.md)
 - [thirdwatch_api.CustomInfo](docs/CustomInfo.md)
 - [thirdwatch_api.ErrorResponse](docs/ErrorResponse.md)
 - [thirdwatch_api.EventResponse](docs/EventResponse.md)
 - [thirdwatch_api.Item](docs/Item.md)
 - [thirdwatch_api.ItemStatus](docs/ItemStatus.md)
 - [thirdwatch_api.LinkSessionToUser](docs/LinkSessionToUser.md)
 - [thirdwatch_api.Login](docs/Login.md)
 - [thirdwatch_api.Logout](docs/Logout.md)
 - [thirdwatch_api.OrderStatus](docs/OrderStatus.md)
 - [thirdwatch_api.PaymentMethod](docs/PaymentMethod.md)
 - [thirdwatch_api.Promotion](docs/Promotion.md)
 - [thirdwatch_api.RemoveFromCart](docs/RemoveFromCart.md)
 - [thirdwatch_api.ReportItem](docs/ReportItem.md)
 - [thirdwatch_api.Seller](docs/Seller.md)
 - [thirdwatch_api.SendMessage](docs/SendMessage.md)
 - [thirdwatch_api.ShippingAddress](docs/ShippingAddress.md)
 - [thirdwatch_api.SubmitReview](docs/SubmitReview.md)
 - [thirdwatch_api.Tag](docs/Tag.md)
 - [thirdwatch_api.Transaction](docs/Transaction.md)
 - [thirdwatch_api.UnTag](docs/UnTag.md)
 - [thirdwatch_api.UpdateAccount](docs/UpdateAccount.md)
 - [thirdwatch_api.UpdateOrder](docs/UpdateOrder.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: X-THIRDWATCH-API-KEY
- **Location**: HTTP header

