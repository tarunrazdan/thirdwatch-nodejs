/**
 * Thirdwatch API
 * The first version of the Thirdwatch API is an exciting step forward towards making it easier for developers to pass data to Thirdwatch.  Once you've [registered your website/app](https://thirdwatch.ai) it's easy to start sending data to Thirdwatch.  All endpoints are only accessible via https and are located at `api.thirdwatch.ai`. For instance: you can send event at the moment by ```HTTP POST``` Request to the following URL with your API key in ```Header``` and ```JSON``` data in request body. ```   https://api.thirdwatch.ai/event/v1 ``` Every API request must contain ```API Key``` in header value ```X-THIRDWATCH-API-KEY```  Every event must contain your ```_userId``` (if this is not available, you can alternatively provide a ```_sessionId``` value also in ```_userId```).  JavaScript Fingerprinting module for capturing unique devices and tracking user interaction.  This script will identify unique devices with respect to the browser. For e.g., if chrome is opened in normal mode a unique device id is generated and this will be same if chrome is opened in incognito mode or reinstalled.  Paste the below script onto your webpage, just after the opening `<body>` tag. This script should be added to the page which is accessed externally by the user of your website. For e.g., If you want to track three different webpages then paste the below script onto each webpage, just after the opening `<body>` tag. This script should not be added onto internal tools or admin panels. ```   &lt;script id=\"thirdwatch\"     data-session-cookie-name=\"&lt;cookie_name&gt;\"     data-session-id-value=\"&lt;session_id&gt;\"     data-user-id=\"&lt;user_id&gt;\"     data-app-secret=\"&lt;app_secret&gt;\"     data-is-track-pageview=\"true\"&gt; (function() {         var loadDeviceJs = function() {         var element = document.createElement(\"script\");         element.async = 1;         element.src = \"https://cdn.thirdwatch.ai/tw.min.js\";         document.body.appendChild(element);         };         if (window.addEventListener) {              window.addEventListener(\"load\", loadDeviceJs, false);         } else if (window.attachEvent) {         window.attachEvent(\"onload\", loadDeviceJs);         }     })();   &lt;/script&gt; ``` * `data-session-cookie-name` -- The cookie name where you are saving the unique session id. We will pick the session id by reading its value from the cookie name. (Optional) * `data-session-id-value` -- In case you are not passing `data-session-cookie-name` than you can put session id directly in this parameter. In absence of both `data-session-cookie-name` and `data-session-id-value`, our system will generate a session Id. (Optional) * `data-user-id` -- Unique user id at your end. This can be email id or primary key in the database. In case of guest user, you can insert session Id here. * `data-app-secret` -- Unique App secret generated for you by Thirdwatch. * `data-is-track-pageview` -- If this is set to true, then the url on which this script is running will be sent to Thirdwatch, else the url will not be captured.   The Score API is use to get an up to date cutomer trust score after you have sent transaction event and order successful. This API will provide the riskiness score of the order with reasons. Some examples of when you may want to check the score are before:    - Before Shippement of a package   - Finalizing a money transfer   - Giving access to a prearranged vacation rental   - Sending voucher on mail  ```   https://api.thirdwatch.ai/neo/v1/score?api_key=<your api key>&order_id=<Order id> ```  According to Score you can decide to take action Approve or Reject. Orders with score more than 70 will consider as Riskey orders. We'll provide some reasons also in rules section.   ``` {   \"order_id\": \"OCT45671\",   \"user_id\": \"ajay_245\",   \"order_timestamp\": \"2017-05-09T09:40:45.717Z\",   \"score\": 82,   \"flag\": \"red\",     -\"reasons\": [     {         \"name\": \"_numOfFailedTransactions\",         \"display_name\": \"Number of failed transactions\",         \"flag\": \"green\",         \"value\": \"0\",         \"is_display\": true       },       {         \"name\": \"_accountAge\",         \"display_name\": \"Account age\",         \"flag\": \"red\",         \"value\": \"0\",         \"is_display\": true       },       {         \"name\": \"_numOfOrderSameIp\",         \"display_name\": \"Number of orders from same IP\",         \"flag\": \"red\",         \"value\": \"11\",         \"is_display\": true       }     ] } ``` 
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ai_thirdwatch/ApiClient', 'ai_thirdwatch/model/BillingAddress', 'ai_thirdwatch/model/CustomInfo', 'ai_thirdwatch/model/Item', 'ai_thirdwatch/model/PaymentMethod', 'ai_thirdwatch/model/Promotion', 'ai_thirdwatch/model/ShippingAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BillingAddress'), require('./CustomInfo'), require('./Item'), require('./PaymentMethod'), require('./Promotion'), require('./ShippingAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.thirdwatch_api) {
      root.thirdwatch_api = {};
    }
    root.thirdwatch_api.UpdateOrder = factory(root.thirdwatch_api.ApiClient, root.thirdwatch_api.BillingAddress, root.thirdwatch_api.CustomInfo, root.thirdwatch_api.Item, root.thirdwatch_api.PaymentMethod, root.thirdwatch_api.Promotion, root.thirdwatch_api.ShippingAddress);
  }
}(this, function(ApiClient, BillingAddress, CustomInfo, Item, PaymentMethod, Promotion, ShippingAddress) {
  'use strict';




  /**
   * The UpdateOrder model module.
   * @module ai_thirdwatch/model/UpdateOrder
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>UpdateOrder</code>.
   * @alias module:ai_thirdwatch/model/UpdateOrder
   * @class
   * @param orderId {String} The ID for tracking this order in your system.
   */
  var exports = function(orderId) {
    var _this = this;



    _this['_orderId'] = orderId;


















  };

  /**
   * Constructs a <code>UpdateOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ai_thirdwatch/model/UpdateOrder} obj Optional instance to populate.
   * @return {module:ai_thirdwatch/model/UpdateOrder} The populated <code>UpdateOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_userId')) {
        obj['_userId'] = ApiClient.convertToType(data['_userId'], 'String');
      }
      if (data.hasOwnProperty('_sessionId')) {
        obj['_sessionId'] = ApiClient.convertToType(data['_sessionId'], 'String');
      }
      if (data.hasOwnProperty('_orderId')) {
        obj['_orderId'] = ApiClient.convertToType(data['_orderId'], 'String');
      }
      if (data.hasOwnProperty('_deviceIp')) {
        obj['_deviceIp'] = ApiClient.convertToType(data['_deviceIp'], 'String');
      }
      if (data.hasOwnProperty('_originTimestamp')) {
        obj['_originTimestamp'] = ApiClient.convertToType(data['_originTimestamp'], 'String');
      }
      if (data.hasOwnProperty('_userEmail')) {
        obj['_userEmail'] = ApiClient.convertToType(data['_userEmail'], 'String');
      }
      if (data.hasOwnProperty('_amount')) {
        obj['_amount'] = ApiClient.convertToType(data['_amount'], 'String');
      }
      if (data.hasOwnProperty('_currencyCode')) {
        obj['_currencyCode'] = ApiClient.convertToType(data['_currencyCode'], 'String');
      }
      if (data.hasOwnProperty('_hasExpeditedShipping')) {
        obj['_hasExpeditedShipping'] = ApiClient.convertToType(data['_hasExpeditedShipping'], 'Boolean');
      }
      if (data.hasOwnProperty('_shippingMethod')) {
        obj['_shippingMethod'] = ApiClient.convertToType(data['_shippingMethod'], 'String');
      }
      if (data.hasOwnProperty('_orderReferrer')) {
        obj['_orderReferrer'] = ApiClient.convertToType(data['_orderReferrer'], 'String');
      }
      if (data.hasOwnProperty('_isPrePaid')) {
        obj['_isPrePaid'] = ApiClient.convertToType(data['_isPrePaid'], 'Boolean');
      }
      if (data.hasOwnProperty('_isGift')) {
        obj['_isGift'] = ApiClient.convertToType(data['_isGift'], 'Boolean');
      }
      if (data.hasOwnProperty('_isReturn')) {
        obj['_isReturn'] = ApiClient.convertToType(data['_isReturn'], 'Boolean');
      }
      if (data.hasOwnProperty('_isFirstTimeBuyer')) {
        obj['_isFirstTimeBuyer'] = ApiClient.convertToType(data['_isFirstTimeBuyer'], 'Boolean');
      }
      if (data.hasOwnProperty('_billingAddress')) {
        obj['_billingAddress'] = BillingAddress.constructFromObject(data['_billingAddress']);
      }
      if (data.hasOwnProperty('_shippingAddress')) {
        obj['_shippingAddress'] = ShippingAddress.constructFromObject(data['_shippingAddress']);
      }
      if (data.hasOwnProperty('_paymentMethods')) {
        obj['_paymentMethods'] = ApiClient.convertToType(data['_paymentMethods'], [PaymentMethod]);
      }
      if (data.hasOwnProperty('_promotions')) {
        obj['_promotions'] = ApiClient.convertToType(data['_promotions'], [Promotion]);
      }
      if (data.hasOwnProperty('_items')) {
        obj['_items'] = ApiClient.convertToType(data['_items'], [Item]);
      }
      if (data.hasOwnProperty('_customInfo')) {
        obj['_customInfo'] = CustomInfo.constructFromObject(data['_customInfo']);
      }
    }
    return obj;
  }

  /**
   * The user's account ID according to your systems. Note that user IDs are case sensitive.
   * @member {String} _userId
   */
  exports.prototype['_userId'] = undefined;
  /**
   * The user's current session ID, used to tie a user's action before and after login or account creation. Required if no user_id values is provided.
   * @member {String} _sessionId
   */
  exports.prototype['_sessionId'] = undefined;
  /**
   * The ID for tracking this order in your system.
   * @member {String} _orderId
   */
  exports.prototype['_orderId'] = undefined;
  /**
   * IP address of the request made by the user. Recommended for historical backfills and customers with mobile apps.
   * @member {String} _deviceIp
   */
  exports.prototype['_deviceIp'] = undefined;
  /**
   * Represents the time the event occured in your system. Send as a UNIX timestamp in milliseconds in string.
   * @member {String} _originTimestamp
   */
  exports.prototype['_originTimestamp'] = undefined;
  /**
   * Email of the user creating this order. Note - If the user's email is also their account ID in your system, set both the userId and userEmail fields to their email address.
   * @member {String} _userEmail
   */
  exports.prototype['_userEmail'] = undefined;
  /**
   * The item unit price in numbers, in the base unit of the currency_code.e.g. \"2500\"
   * @member {String} _amount
   */
  exports.prototype['_amount'] = undefined;
  /**
   * The [ISO-4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for the amount. e.g., USD, INR alternative currencies, like bitcoin or points systems.
   * @member {String} _currencyCode
   */
  exports.prototype['_currencyCode'] = undefined;
  /**
   * Whether the user requested priority/expedited shipping on their order.
   * @member {Boolean} _hasExpeditedShipping
   */
  exports.prototype['_hasExpeditedShipping'] = undefined;
  /**
   * Indicates the method of delivery to the user. e.g. _electronic, _physical
   * @member {String} _shippingMethod
   */
  exports.prototype['_shippingMethod'] = undefined;
  /**
   * Referer website or user name.
   * @member {String} _orderReferrer
   */
  exports.prototype['_orderReferrer'] = undefined;
  /**
   * is order is prepaid.
   * @member {Boolean} _isPrePaid
   */
  exports.prototype['_isPrePaid'] = undefined;
  /**
   * Is user chosen gift pack.
   * @member {Boolean} _isGift
   */
  exports.prototype['_isGift'] = undefined;
  /**
   * Is this return order.
   * @member {Boolean} _isReturn
   */
  exports.prototype['_isReturn'] = undefined;
  /**
   * Is user first time buyer.
   * @member {Boolean} _isFirstTimeBuyer
   */
  exports.prototype['_isFirstTimeBuyer'] = undefined;
  /**
   * @member {module:ai_thirdwatch/model/BillingAddress} _billingAddress
   */
  exports.prototype['_billingAddress'] = undefined;
  /**
   * @member {module:ai_thirdwatch/model/ShippingAddress} _shippingAddress
   */
  exports.prototype['_shippingAddress'] = undefined;
  /**
   * The payment information associated with this order. Represented as an array of nested payment_method objects containing payment type, payment gateway, credit card bin, etc.
   * @member {Array.<module:ai_thirdwatch/model/PaymentMethod>} _paymentMethods
   */
  exports.prototype['_paymentMethods'] = undefined;
  /**
   * The list of promotions that apply to this order. You can add one or more promotions when creating or updating an order. Represented as a JSON array of promotion objects. You can also separately add promotions to the account via the addPromotion event.
   * @member {Array.<module:ai_thirdwatch/model/Promotion>} _promotions
   */
  exports.prototype['_promotions'] = undefined;
  /**
   * The list of items ordered. Represented as a JSON array of item
   * @member {Array.<module:ai_thirdwatch/model/Item>} _items
   */
  exports.prototype['_items'] = undefined;
  /**
   * @member {module:ai_thirdwatch/model/CustomInfo} _customInfo
   */
  exports.prototype['_customInfo'] = undefined;



  return exports;
}));


