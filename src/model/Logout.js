/**
 * Thirdwatch API
 * The first version of the Thirdwatch API is an exciting step forward towards making it easier for developers to pass data to Thirdwatch.   # Introduction Once you've [registered your website/app](https://thirdwatch.ai) it's easy to start sending data to Thirdwatch.  All endpoints are only accessible via https and are located at `api.thirdwatch.ai`. For instance: you can send event at the moment by ```HTTP POST``` Request to the following URL with your API key in ```Header``` and ```JSON``` data in request body. ```   https://api.thirdwatch.ai/event/v1 ``` Every API request must contain ```API Key``` in header value ```X-THIRDWATCH-API-KEY```  Every event must contain your ```_userId``` (if this is not available, you can alternatively provide a ```_sessionId``` value also in ```_userId```).  # Score API The Score API is use to get an up to date cutomer trust score after you have sent transaction event and order successful. This API will provide the riskiness score of the order with reasons. Some examples of when you may want to check the score are before:    - Before Shippement of a package   - Finalizing a money transfer   - Giving access to a prearranged vacation rental   - Sending voucher on mail    ```   https://api.thirdwatch.ai/v1/get/score?api_key=<your api key>&order_id=<Order id> ```  According to Score you can decide to take action Approve or Reject. Orders with score more than 70 will consider as Riskey orders. We'll provide some reasons also in rules section.  ## Response score API  ``` {   \"order_id\": \"OCT45671\",   \"user_id\": \"ajay_245\",   \"score\": 82,   \"flag\": \"red\",     -\"reasons\": [     {         \"name\": \"_numOfFailedTransactions\",         \"display_name\": \"Number of failed transactions\",         \"flag\": \"green\",         \"value\": \"0\",         \"is_display\": true       },       {         \"name\": \"_accountAge\",         \"display_name\": \"Account age\",         \"flag\": \"red\",         \"value\": \"0\",         \"is_display\": true       },        {         \"name\": \"_numOfOrderSameIp\",         \"display_name\": \"Number of orders from same IP\",         \"flag\": \"red\",         \"value\": \"11\",         \"is_display\": true       }     ] } ```       
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CustomInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ThirdwatchApi) {
      root.ThirdwatchApi = {};
    }
    root.ThirdwatchApi.Logout = factory(root.ThirdwatchApi.ApiClient, root.ThirdwatchApi.CustomInfo);
  }
}(this, function(ApiClient, CustomInfo) {
  'use strict';




  /**
   * The Logout model module.
   * @module model/Logout
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Logout</code>.
   * @alias module:model/Logout
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Logout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Logout} obj Optional instance to populate.
   * @return {module:model/Logout} The populated <code>Logout</code> instance.
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
      if (data.hasOwnProperty('_deviceIp')) {
        obj['_deviceIp'] = ApiClient.convertToType(data['_deviceIp'], 'String');
      }
      if (data.hasOwnProperty('_originTimestamp')) {
        obj['_originTimestamp'] = ApiClient.convertToType(data['_originTimestamp'], 'String');
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
   * @member {module:model/CustomInfo} _customInfo
   */
  exports.prototype['_customInfo'] = undefined;



  return exports;
}));


