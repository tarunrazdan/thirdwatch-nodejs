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
    define(['ApiClient', 'model/Seller'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Seller'));
  } else {
    // Browser globals (root is window)
    if (!root.thirdwatch_api) {
      root.thirdwatch_api = {};
    }
    root.thirdwatch_api.Item = factory(root.thirdwatch_api.ApiClient, root.thirdwatch_api.Seller);
  }
}(this, function(ApiClient, Seller) {
  'use strict';




  /**
   * The Item model module.
   * @module model/Item
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>Item</code>.
   * The Item field type represents a product or service for sale in your business. The value must be a nested object with the appropriate item subfields. Generally used in the add_to_cart and remove_from_cart events. 
   * @alias module:model/Item
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item} obj Optional instance to populate.
   * @return {module:model/Item} The populated <code>Item</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_itemId')) {
        obj['_itemId'] = ApiClient.convertToType(data['_itemId'], 'String');
      }
      if (data.hasOwnProperty('_productTitle')) {
        obj['_productTitle'] = ApiClient.convertToType(data['_productTitle'], 'String');
      }
      if (data.hasOwnProperty('_price')) {
        obj['_price'] = ApiClient.convertToType(data['_price'], 'String');
      }
      if (data.hasOwnProperty('_currencyCode')) {
        obj['_currencyCode'] = ApiClient.convertToType(data['_currencyCode'], 'String');
      }
      if (data.hasOwnProperty('_upc')) {
        obj['_upc'] = ApiClient.convertToType(data['_upc'], 'String');
      }
      if (data.hasOwnProperty('_sku')) {
        obj['_sku'] = ApiClient.convertToType(data['_sku'], 'String');
      }
      if (data.hasOwnProperty('_isbn')) {
        obj['_isbn'] = ApiClient.convertToType(data['_isbn'], 'String');
      }
      if (data.hasOwnProperty('_brand')) {
        obj['_brand'] = ApiClient.convertToType(data['_brand'], 'String');
      }
      if (data.hasOwnProperty('_manufacturer')) {
        obj['_manufacturer'] = ApiClient.convertToType(data['_manufacturer'], 'String');
      }
      if (data.hasOwnProperty('_category')) {
        obj['_category'] = ApiClient.convertToType(data['_category'], 'String');
      }
      if (data.hasOwnProperty('_tags')) {
        obj['_tags'] = ApiClient.convertToType(data['_tags'], 'String');
      }
      if (data.hasOwnProperty('_color')) {
        obj['_color'] = ApiClient.convertToType(data['_color'], 'String');
      }
      if (data.hasOwnProperty('_quantity')) {
        obj['_quantity'] = ApiClient.convertToType(data['_quantity'], 'Number');
      }
      if (data.hasOwnProperty('_isOnSale')) {
        obj['_isOnSale'] = ApiClient.convertToType(data['_isOnSale'], 'Boolean');
      }
      if (data.hasOwnProperty('_maxQuantity')) {
        obj['_maxQuantity'] = ApiClient.convertToType(data['_maxQuantity'], 'Number');
      }
      if (data.hasOwnProperty('_discountPrice')) {
        obj['_discountPrice'] = ApiClient.convertToType(data['_discountPrice'], 'String');
      }
      if (data.hasOwnProperty('_productWeight')) {
        obj['_productWeight'] = ApiClient.convertToType(data['_productWeight'], 'String');
      }
      if (data.hasOwnProperty('_country')) {
        obj['_country'] = ApiClient.convertToType(data['_country'], 'String');
      }
      if (data.hasOwnProperty('_descriptionShort')) {
        obj['_descriptionShort'] = ApiClient.convertToType(data['_descriptionShort'], 'String');
      }
      if (data.hasOwnProperty('_description')) {
        obj['_description'] = ApiClient.convertToType(data['_description'], 'String');
      }
      if (data.hasOwnProperty('_seller')) {
        obj['_seller'] = Seller.constructFromObject(data['_seller']);
      }
    }
    return obj;
  }

  /**
   * The item's unique identifier according to your systems. Use the same ID that you would use to look up items on your website's database.
   * @member {String} _itemId
   */
  exports.prototype['_itemId'] = undefined;
  /**
   * The item's name, e.g., \"WD 2 TB External Hard Drive\".
   * @member {String} _productTitle
   */
  exports.prototype['_productTitle'] = undefined;
  /**
   * The item unit price in numbers, in the base unit of the currency_code.e.g. \"2500\"
   * @member {String} _price
   */
  exports.prototype['_price'] = undefined;
  /**
   * The [ISO-4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for the amount. e.g., USD, INR alternative currencies, like bitcoin or points systems.
   * @member {String} _currencyCode
   */
  exports.prototype['_currencyCode'] = undefined;
  /**
   * If the item has a Universal Product Code (UPC), provide it here.
   * @member {String} _upc
   */
  exports.prototype['_upc'] = undefined;
  /**
   * If the item has a Stock-keeping Unit ID (SKU), provide it here.
   * @member {String} _sku
   */
  exports.prototype['_sku'] = undefined;
  /**
   * If the item is a book with an International Standard Book Number (ISBN), provide it here.
   * @member {String} _isbn
   */
  exports.prototype['_isbn'] = undefined;
  /**
   * The brand name of the item.
   * @member {String} _brand
   */
  exports.prototype['_brand'] = undefined;
  /**
   * Name of the item's manufacturer.
   * @member {String} _manufacturer
   */
  exports.prototype['_manufacturer'] = undefined;
  /**
   * The category this item is listed under in your business. e.g., \"travel\", \"man > bags\".
   * @member {String} _category
   */
  exports.prototype['_category'] = undefined;
  /**
   * The tags used to describe this item in your business. e.g., \"man\", \"summer\".
   * @member {String} _tags
   */
  exports.prototype['_tags'] = undefined;
  /**
   * The color of the item.
   * @member {String} _color
   */
  exports.prototype['_color'] = undefined;
  /**
   * The quantity of the item.
   * @member {Number} _quantity
   */
  exports.prototype['_quantity'] = undefined;
  /**
   * Is item on sale or running offers on this item .
   * @member {Boolean} _isOnSale
   */
  exports.prototype['_isOnSale'] = undefined;
  /**
   * The max quantity per user for this item.
   * @member {Number} _maxQuantity
   */
  exports.prototype['_maxQuantity'] = undefined;
  /**
   * Price of the product after discount.
   * @member {String} _discountPrice
   */
  exports.prototype['_discountPrice'] = undefined;
  /**
   * Weight of the product in Kilo Gram, e.g. \"3\" , \"0.5\"
   * @member {String} _productWeight
   */
  exports.prototype['_productWeight'] = undefined;
  /**
   * The [ISO-3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the item, e.g., \"IN\" in case of India.
   * @member {String} _country
   */
  exports.prototype['_country'] = undefined;
  /**
   * Short description of the item.
   * @member {String} _descriptionShort
   */
  exports.prototype['_descriptionShort'] = undefined;
  /**
   * Detail description of the item.
   * @member {String} _description
   */
  exports.prototype['_description'] = undefined;
  /**
   * @member {module:model/Seller} _seller
   */
  exports.prototype['_seller'] = undefined;



  return exports;
}));

