# thirdwatch_api.ShippingAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Provide the full name associated with the address here. Concatenate first name and last name together if you collect them separately in your system. | [optional] 
**phone** | **String** | The phone number associated with this address. Provide the phone number as a string starting with the country code. Use E.164 format or send in the standard national format of number&#39;s origin. | [optional] 
**address1** | **String** | Address first line, e.g., \&quot;C802 Nirvana Courtyard\&quot;. | [optional] 
**address2** | **String** | Address second line, e.g., \&quot;Nirvana Country, Sector 50\&quot;. | [optional] 
**city** | **String** | The city or town name, e.g., \&quot;Gurgaon\&quot; . | [optional] 
**region** | **String** | The region portion of the address. In the India, this corresponds to the state. | [optional] 
**country** | **String** | The [ISO-3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code for the billing address, e.g., \&quot;IN\&quot; in case of India. | [optional] 
**zipcode** | **String** | The postal code associated with the address, e.g., \&quot;122002\&quot;. | [optional] 
**isOfficeAddress** | **Boolean** | Is user chosen this address as office address. | [optional] 
**isHomeAddress** | **Boolean** | Is user chosen this address as home address. | [optional] 


