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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.thirdwatch_api);
  }
}(this, function(expect, thirdwatch_api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new thirdwatch_api.Item();
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

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be.a(thirdwatch_api.Item);
    });

    it('should have the property itemId (base name: "_itemId")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property productTitle (base name: "_productTitle")', function() {
      // uncomment below and update the code to test the property productTitle
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "_price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "_currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property upc (base name: "_upc")', function() {
      // uncomment below and update the code to test the property upc
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property sku (base name: "_sku")', function() {
      // uncomment below and update the code to test the property sku
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property isbn (base name: "_isbn")', function() {
      // uncomment below and update the code to test the property isbn
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property brand (base name: "_brand")', function() {
      // uncomment below and update the code to test the property brand
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property manufacturer (base name: "_manufacturer")', function() {
      // uncomment below and update the code to test the property manufacturer
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "_category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "_tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "_color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "_quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property isOnSale (base name: "_isOnSale")', function() {
      // uncomment below and update the code to test the property isOnSale
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property maxQuantity (base name: "_maxQuantity")', function() {
      // uncomment below and update the code to test the property maxQuantity
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property discountPrice (base name: "_discountPrice")', function() {
      // uncomment below and update the code to test the property discountPrice
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property productWeight (base name: "_productWeight")', function() {
      // uncomment below and update the code to test the property productWeight
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "_country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property descriptionShort (base name: "_descriptionShort")', function() {
      // uncomment below and update the code to test the property descriptionShort
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "_description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

    it('should have the property seller (base name: "_seller")', function() {
      // uncomment below and update the code to test the property seller
      //var instane = new thirdwatch_api.Item();
      //expect(instance).to.be();
    });

  });

}));
