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
    define(['ai_thirdwatch/ApiClient', 'ai_thirdwatch/model/Chargeback', 'ai_thirdwatch/model/ErrorResponse', 'ai_thirdwatch/model/EventResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Chargeback'), require('../model/ErrorResponse'), require('../model/EventResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.thirdwatch_api) {
      root.thirdwatch_api = {};
    }
    root.thirdwatch_api.ChargebackApi = factory(root.thirdwatch_api.ApiClient, root.thirdwatch_api.Chargeback, root.thirdwatch_api.ErrorResponse, root.thirdwatch_api.EventResponse);
  }
}(this, function(ApiClient, Chargeback, ErrorResponse, EventResponse) {
  'use strict';

  /**
   * Chargeback service.
   * @module ai_thirdwatch/api/ChargebackApi
   * @version 0.0.2
   */

  /**
   * Constructs a new ChargebackApi. 
   * @alias module:ai_thirdwatch/api/ChargebackApi
   * @class
   * @param {module:ai_thirdwatch/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ai_thirdwatch/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the chargeback operation.
     * @callback module:ai_thirdwatch/api/ChargebackApi~chargebackCallback
     * @param {String} error Error message, if any.
     * @param {module:ai_thirdwatch/model/EventResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Use chargeback to capture a chargeback reported on a transaction. This event can be called multiple times to record changes to the chargeback state.
     * Note - When you send a chargeback event you also need to send a label event if you want to prevent the user from making another purchase. 
     * @param {module:ai_thirdwatch/model/Chargeback} JSON Pass chargeback to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain chargeback info.
     * @param {module:ai_thirdwatch/api/ChargebackApi~chargebackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ai_thirdwatch/model/EventResponse}
     */
    this.chargeback = function(JSON, callback) {
      var postBody = JSON;

      // verify the required parameter 'JSON' is set
      if (JSON === undefined || JSON === null) {
        throw new Error("Missing the required parameter 'JSON' when calling chargeback");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EventResponse;

      return this.apiClient.callApi(
        '/v1/chargeback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
