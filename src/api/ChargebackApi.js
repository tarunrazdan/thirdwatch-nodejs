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
    define(['ApiClient', 'model/Chargeback', 'model/ErrorResponse', 'model/EventResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Chargeback'), require('../model/ErrorResponse'), require('../model/EventResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ThirdwatchApi) {
      root.ThirdwatchApi = {};
    }
    root.ThirdwatchApi.ChargebackApi = factory(root.ThirdwatchApi.ApiClient, root.ThirdwatchApi.Chargeback, root.ThirdwatchApi.ErrorResponse, root.ThirdwatchApi.EventResponse);
  }
}(this, function(ApiClient, Chargeback, ErrorResponse, EventResponse) {
  'use strict';

  /**
   * Chargeback service.
   * @module api/ChargebackApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ChargebackApi. 
   * @alias module:api/ChargebackApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Use chargeback to capture a chargeback reported on a transaction. This event can be called multiple times to record changes to the chargeback state.
     * Note - When you send a chargeback event you also need to send a label event if you want to prevent the user from making another purchase. 
     * @param {module:model/Chargeback} JSON Pass chargeback to thirdwatch. Only &#x60;_userID&#x60; is required field. But this should contain chargeback info.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventResponse}
     */
    this.chargeback = function(JSON) {
      var postBody = JSON;

      // verify the required parameter 'JSON' is set
      if (JSON == undefined || JSON == null) {
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
