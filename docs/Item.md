# ThirdwatchApi.Item

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **String** | The item&#39;s unique identifier according to your systems. Use the same ID that you would use to look up items on your website&#39;s database. | [optional] 
**productTitle** | **String** | The item&#39;s name, e.g., \&quot;WD 2 TB External Hard Drive\&quot;. | [optional] 
**price** | **String** | The item unit price in numbers, in the base unit of the currency_code.e.g. \&quot;2500\&quot; | [optional] 
**currencyCode** | **String** | The [ISO-4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for the amount. e.g., USD, INR alternative currencies, like bitcoin or points systems. | [optional] 
**upc** | **String** | If the item has a Universal Product Code (UPC), provide it here. | [optional] 
**sku** | **String** | If the item has a Stock-keeping Unit ID (SKU), provide it here. | [optional] 
**isbn** | **String** | If the item is a book with an International Standard Book Number (ISBN), provide it here. | [optional] 
**brand** | **String** | The brand name of the item. | [optional] 
**manufacturer** | **String** | Name of the item&#39;s manufacturer. | [optional] 
**category** | **String** | The category this item is listed under in your business. e.g., \&quot;travel\&quot;, \&quot;man &gt; bags\&quot;. | [optional] 
**tags** | **String** | The tags used to describe this item in your business. e.g., \&quot;man\&quot;, \&quot;summer\&quot;. | [optional] 
**color** | **String** | The color of the item. | [optional] 
**quantity** | **Number** | The quantity of the item. | [optional] 
**isOnSale** | **Boolean** | Is item on sale or running offers on this item . | [optional] 
**maxQuantity** | **Number** | The max quantity per user for this item. | [optional] 
**discountPrice** | **String** | Price of the product after discount. | [optional] 
**productWeight** | **String** | Weight of the product in Kilo Gram, e.g. \&quot;3\&quot; , \&quot;0.5\&quot; | [optional] 
**country** | **String** | The [ISO-3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the item, e.g., \&quot;IN\&quot; in case of India. | [optional] 
**descriptionShort** | **String** | Short description of the item. | [optional] 
**description** | **String** | Detail description of the item. | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 


