---
layout: "page.njk"
title: "Validation and Verification"
style: "home"
templateEngineOverride: njk, md
previousText: 'x-ua-compatible'
previousLink: '/x-ua-compatible'
nextText: 'apple touch icons'
nextLink: '/apple-touch-icons/'
---

  # Verification


  Some online tools like `Google Search Console` and `Bing Webmaster Tools` require you to prove that you're the owner of your website.
  
  One way of doing this is by adding a `<meta>` tag to your site with a code specific to you.

  :::

  <figcaption>Bing Validation from bbc.com</figcaption>

  ```html
  <meta name="msvalidate.01" content="A09EF0BF1FC5CDBB37D921CBC3776943">
  ```

  :::

  Bing offers three other ways to verify websites.
  
  - `DNS` Record
  - a file in your root directory
  - Import from `Google Search Console`