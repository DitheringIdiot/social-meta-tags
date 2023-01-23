---
layout: "page.njk"
title: "HandheldFriendly"
style: "home"
templateEngineOverride: njk, md
previousText: 'Home'
previousLink: '/'
---

::: header

<h1><span class="highlight">HandheldFriendly</span></h1>

<p><span class="highlight">Why do so many websites have this mystery tag?</span></p>

:::

When I first started this project to `Marie Kondo` HTML — I wrote some code that looked at the `<meta>` tags used by the `10000` most popular websites.

Of that `10000` only `6560` returned a result — and of those `460` had the `HandheldFriendly` `<meta>` tag.

::: 

<figcaption>HandheldFriendly meta&nbsp;tag</figcaption>

```html
<meta name="HandheldFriendly" content="True">
```
:::

If we unscientifically extrapolate from those numbers — that's around `7%` of websites using this tag — which is quite a lot, considering that it took days to work out what it does.

## What is the HandheldFriendly `<meta>` tag?

The `HandheldFriendly` `<meta>` tag was invented for the `AvantGo` web browser.


`AvantGo` was used on `Palm Pilots` between 2000-2009.[^2]

::: 

<figcaption>This is a Palm Pilot</figcaption>

<img src="/images/palm-pilot.png" alt="Retro looking device with a stylus." />

:::

It was more of an `RSS` feed than a browser. 

If the `HandheldFriendly` tag wasn't present `AvantGo` would remove `<table>` elements, "certain image tags" and `JavaScript` from from the page.[^1]

By using the `HandheldFriendly` tag you're telling the `1` person in the world that still uses `AvantGo` that you made your website compatible with their Palm Pilot — **which would be a lie!**

While backwards compatibility is important to consider — it is extremely unlikely that your website is compatible with an old Palm Pilot.

Palm Pilots — and other devices from that time — cannot view websites that use basic security practices like `https` and `tls`.

So, to access your website a Palm Pilot user would need make extremely nerdy modifications to their device, or use a proxy server.

These people do exist.

However, even if you want your website to work for the small number of hobbyists who will access it using a Palm Pilot — you still don't need this tag — the Palm Pilot will simply load your website as best as it can without the tag.

**For anyone is still using these browsers, let their devices render your content in the default way.**

:::

<figcaption>

<h3>Blackberry Browser</h3>

</figcaption>

<aside>

The only other browser I could find that uses `HandheldFriendly` is the BlackBerry Browser. 

Before `Blackberry OS 4.5` released in `2008`[^3] The browser would render a page in `Column View` if `<meta name="HandheldFriendly" content="true">` wasn't present. 

However, **Blackberry Browser also supported `<meta name="viewport" content="width=device-width">` which had the same effect![^4]**

</aside>

:::

::: section

## Why is it still around?

I think we can safely say that the `HandheldFriendly` `<meta>` tag does not spark joy.

It sparks fear — fear of the unknown.

Nobody wants to be the person who deletes it and then breaks everything.

But now that you know what it is, and what it does, you can thank it for it's service, and let it go.

:::

[^1]:[avantgo.com — developer reference](https://web.archive.org/web/20000903162014/http://avantgo.com/developer/reference/tutorials/jumpstart/jumpstart2.html#TOC3)
[^2]:[Palm info center — AvantGo going away](https://web.archive.org/web/20180614094913/http://www.palminfocenter.com/news/6884/avantgo-going-away/)
[^3]:[pcmag.com — blackberry OS 4.5](https://uk.pcmag.com/operating-systems/6564/blackberry-os-45)
[^4]:[Manuals Lib — Blackberry Browser Fundamentals Guide](https://www.manualslib.com/manual/368374/Blackberry-Browser-Version-4-7-0-Fundamentals-Guide.html?page=18#manual)
