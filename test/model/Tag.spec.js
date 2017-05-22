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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ThirdwatchApi);
  }
}(this, function(expect, ThirdwatchApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ThirdwatchApi.Tag();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Tag', function() {
    it('should create an instance of Tag', function() {
      // uncomment below and update the code to test Tag
      //var instane = new ThirdwatchApi.Tag();
      //expect(instance).to.be.a(ThirdwatchApi.Tag);
    });

    it('should have the property userId (base name: "_userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new ThirdwatchApi.Tag();
      //expect(instance).to.be();
    });

    it('should have the property isBad (base name: "_isBad")', function() {
      // uncomment below and update the code to test the property isBad
      //var instane = new ThirdwatchApi.Tag();
      //expect(instance).to.be();
    });

    it('should have the property abuseType (base name: "_abuseType")', function() {
      // uncomment below and update the code to test the property abuseType
      //var instane = new ThirdwatchApi.Tag();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "_description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ThirdwatchApi.Tag();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "_source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new ThirdwatchApi.Tag();
      //expect(instance).to.be();
    });

    it('should have the property analyst (base name: "_analyst")', function() {
      // uncomment below and update the code to test the property analyst
      //var instane = new ThirdwatchApi.Tag();
      //expect(instance).to.be();
    });

    it('should have the property customInfo (base name: "_customInfo")', function() {
      // uncomment below and update the code to test the property customInfo
      //var instane = new ThirdwatchApi.Tag();
      //expect(instance).to.be();
    });

  });

}));
