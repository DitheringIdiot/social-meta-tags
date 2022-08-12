---
layout: "page.njk"
title: "HandHeldFriendly"
style: "home"
templateEngineOverride: njk, md
previousText: 'Social'
previousLink: '/social'
nextText: 'apple touch icons'
nextLink: '/apple-touch-icons/'
---

::: header

# Handheld Friendly

<p class="lead"><span>A mysterious meta tag from the distant past.</span></p>

:::


The handheld friendly `<meta>` tag was created by `AvantGo`. If it wasn't present the browser would remove `JavaScript`, `<table>`, and "certain image tags" from the page.[^1]

::: 

<figcaption>HandheldFriendly Meta Tag</figcaption>

```html
<meta name="HandheldFriendly" content="True">
```
:::

`AvantGo` was used on `Palm Pilots` between 2000-2009.[^2] It was more of an `RSS` feed than a browser. 

By using the `HandheldFriendly` tag you're telling the 1 person in the world that still uses `AvantGo` that you made your website compatible with their palm pilot. Which would be a lie!

The only other browser that I could find uses it was the BlackBerry Browser. Before `Blackberry OS 4.5` released in `2008`[^3] The browser would render a page in `Column View` if `<meta name="HandheldFriendly" content="true">` wasn't present. 

However, **Blackberry Browser also supported `<meta name="viewport" content="width=device-width">` which had the same effect![^4]**

If anyone is still using these browsers, let their devices render your content in the default way.

[^1]:[avantgo.com — developer reference](https://web.archive.org/web/20000903162014/http://avantgo.com/developer/reference/tutorials/jumpstart/jumpstart2.html#TOC3)
[^2]:[Palm info center — AvantGo going away](https://web.archive.org/web/20180614094913/http://www.palminfocenter.com/news/6884/avantgo-going-away/)
[^3]:[pcmag.com — blackberry OS 4.5](https://uk.pcmag.com/operating-systems/6564/blackberry-os-45)
[^4]:[Manuals Lib — Blackberry Browser Fundamentals Guide](https://www.manualslib.com/manual/368374/Blackberry-Browser-Version-4-7-0-Fundamentals-Guide.html?page=18#manual)
