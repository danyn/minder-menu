## Meta Objects can have a page that Shopify generates for it.

### In the theme liquid you would want to:

- Show a link to each page.
- generate an index to show the pages
- [reference](https://www.shopify.com/ca/partners/blog/how-to-create-an-index-list-for-metaobject-pages)

#### for the index page the user would need to:
- create a new page
- create a new template for that page
- drop in an app block provided by the app

### for each metaobject powered page:
- create the metaobject page templage
- drop in an app blocks provided by the app

The merchant needs to take the above button clicking actions because apps need special permission to write theme template files:
- [exemption](https://shopify.dev/docs/apps/build/online-store/asset-legacy)
- [resource](https://shopify.dev/docs/api/admin-rest/2024-07/resources/asset)

it will be a pain to use this resource unless the app has serious potential because it will likely change again in the future, and you need an exemption to use it in the first place. Basically, they are saying try not to use it. Find another way if you can.

