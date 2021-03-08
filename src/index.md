---
layout: "home.njk"
title: "Home"
style: "home"
templateEngineOverride: njk, md
---

::: header

<h1> Get out of my <code><span>&lt;head&gt;</span></code></h1>

Make faster, more accessible, more environmentally friendly websites, by removing these tags from your `<head>`.

::: 

<div>

<nav>

* [Why clear your `<head>` ?](#why-clear-your-head)

* [Icons](#icons)
  - [favicon](#favicons)
  - [Apple Touch Icons](#apple-touch-icons)
  - [mask-icon](#mask-icon)
  - [msapplication-config](#msapplication-config)

* [Sharing](#sharing)
  - []

* [SEO](#seo)
  - [keywords](#keywords)
  - [rel=canonical](#canonical)

* [Third Party Resources](#third-party-resources)
  - [Analytics](#analytics)
  - [Fonts](#fonts)

* [Other](#other) 
  - [charset=utf-8](#charset-utf8)
  - [rel=preload](#rel-preload)
  - [http-equiv=X-UA-Compatible](#http-equiv=x-ua-compatible)
  - [verification](#verification)
  - [generator](#generator)


</nav>

</div>


<div>

## Why clear your `<head>` ?

Visit most popular website today and look at the source code. You'll see between two `<head>` tags a whole load of clutter.

Most of these tags do nothing to improve your visitors experience. Many aren't there for human visitors at all. They're in your `<head>` to help improve other websites.

You shouldn't send unnecessary data. Most head tags don't help the user of your site, or help specific users with specific use cases.

the environment

performance

accessibility

privacy

</div>

<div>

## Icons


</div>

<div>

### Favicons

[`~75%` of websites](https://almanac.httparchive.org/en/2020/markup#favicons) have a tag in the `<head>` letting the browser know where to find the site's `favicon`:

:::

<figcaption>a basic favicon link</figcaption>

``` html 
<link rel="icon" href="/favicon.ico">
```

:::

#### Why you don't need this

By default, all browsers look for a file `/favicon.ico` in a site's root directory.

So, you can avoid having any links in your `<head>` by hosting a `favicon` at the root of your site: 

*e.g. `https://example.com/favicon.ico`*

#### What about different favicon sizes?

Sometimes you'll see links to different `favicon` sizes in the `<head>`, like this:

:::

<figcaption>Favicons with different sizes</figcaption>

``` html 
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

:::

These links let the browser know the location of multiple `favicon` sizes. 
The browser then picks the size that best suits it, the device, or the context.

However, you don't need to do this to support multiple icon sizes.

**A single `.ico` file can contain multiple icons** with different dimensions. 

`.ico` isn't *really* an image format. It's a container for `.bmp` and `.png`.

 So you can remove all those seperate `<link>` tags, and replace them with a single `favicon.ico` in your site's root directory.

::: aside

#### How to make a `favicon` containing multiple icons

You can use the [free and open-source image editor **Gimp**](https://www.gimp.org/).

Create a layer for each icon, and select different dimensions for each layer.

When exporting your file, select the `.ico` format.

**Note**: You can optionally select `png` as the file format for individual images inside your `.ico` file. This will give your `favicon.ico` a smaller file size. 

*However* [`IE 10` and below do not support `png` favicons.](https://stackoverflow.com/questions/16943609/which-versions-of-ie-support-png-favicons#answer-17104488)
If you want to support `IE < 10` make sure any icon smaller than `48x48` are not `png`.
::: 

</div>

<div>

### Apple Touch Icons

An `apple-touch-icon` is an image used on `iOS` devices when a website is added to the homescreen. 

Different `iOS` devices display icons at different sizes, and so it's common to see something like this:

:::

<figcaption>Example from theguardian.co.uk</figcaption>

``` html
<link rel="apple-touch-icon" sizes="152x152" href="https://assets.guim.co.uk/images/favicons/fee5e2d638d1c35f6d501fa397e53329/152x152.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="https://assets.guim.co.uk/images/favicons/1fe70b29879674433702d5266abcb0d4/144x144.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="https://assets.guim.co.uk/images/favicons/c58143bd2a5b5426b6256cd90ba6eb47/120x120.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="https://assets.guim.co.uk/images/favicons/68cbd5cf267598abd6a026f229ef6b45/114x114.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="https://assets.guim.co.uk/images/favicons/873381bf11d58e20f551905d51575117/72x72.png"/>
<link rel="apple-touch-icon-precomposed" href="https://assets.guim.co.uk/images/favicons/6a2aa0ea5b4b6183e92d0eac49e2f58b/57x57.png"/>
```

:::

Just like with `favicon.ico` you can **remove these links** and place a single `apple-touch-icon.png` in your root directory.

*e.g. `https://example.com/apple-touch-icon.png`*



[`180x180` is the largest icon size any `iOS` device requires.](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/#app-icon-sizes) **Other devices will downscale the image to fit.** 

*Apple use a single `152x152` icon on apple.com*

If you'd still rather specify a different image for every possible icon size, you can still do that without adding any code to your `<head>`.

You can [place multiple `apple-touch-icons` in your site's root directory.](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) So long as they're named in the following way:

<dl>
<dt>default                                             <dd><code>/apple-touch-icon.png</code>
<dt>specify size                                        <dd><code>/apple-touch-icon-72x72.png</code>
<dt>specify precomposed                                 <dd><code>/apple-touch-icon-precomposed.png</code>
<dt>specify size and precomposed                        <dd><code>/apple-touch-icon-57x57-precomposed.png</code>
</dl>


::: aside 

#### Precomposed?

Older versions of `iOS` added lighting effects to icons on the homescreen. Adding the `precomposed` suffix removed these effects.

:::



#### Android and `apple-touch-icons`

Older versions of `Chrome for Android` used `apple-touch-icons` for adding shortcuts to the homescreen. 
*But* only if a large enough non-apple icon wasn't found.

Some of older versions of [`android` would look for `apple-touch-icons` at the site's root](https://mathiasbynens.be/notes/touch-icons). But this practice ended as it was using `3-4%` of of mobile users bandwith!

If `android` can't find a large icon to use. It will use the site's `favicon.`

</div>

<div>

### Safari Mask Icon

`Safari` versions `9`, `10`, and `11` required a `mask-icon` to display your site's logo in pinned tabs: 

:::
<figcaption>Safari 9-11 pinned tabbed icon</figcaption>

``` html
<link rel="mask-icon" href="website_icon.svg" color="red">
```
:::

As of `Safari 12` the site's standard `favicon` is used.

If you're wondering if you should still use a `mask-icon` to support old versions of `safari`, know that…

- [apple don't use one on apple.com](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs#safari-pinned-icon). 
- `Safari 9-11` will use the first letter of your domain name in a grey box if a `mask-icon` is not present.

</div>

<div>

### Windows Tiles

`Microsoft` introduced `tiles` on `Windows Phone 7`, `Windows 8` and `IE 11`. A website can have it's own `tile` on the homescreen. Of course, these tiles require their own tags!

:::
<figcaption>Windows Tile Meta Tags</figcaption>

``` html
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">
```
:::

One tag for the icon and one for the tile color.

However, if these tags aren't present `windows` looks for `browserconfig.xml` at the root of your site.

:::
<figcaption>browserconfig.xml example</figcaption>

``` xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="images/smalltile.png"/>
      <square150x150logo src="images/mediumtile.png"/>
      <wide310x150logo src="images/widetile.png"/>
      <square310x310logo src="images/largetile.png"/>
      <TileColor>#009900</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```
:::

If no special `<meta>` tags or `browesrconfig.xml` is present. The tile will still look perfectly acceptable, using the site's `favicon` and `title`.

</div>

<div>

## Sharing


{% set table %}

{% include 'results.njk' %}

{% endset %}

{% removewhitespace %}
{{ table | safe }}
{% endremovewhitespace %}


</div>

<div>

## Third Party Resources

https://almanac.httparchive.org/en/2020/privacy#third-party-trackers

</div>

<div>

### Tracking and Analytics

[`~55%` of all websites include `Google Analytics or Google Tag Manager`.](https://w3techs.com/technologies/history_overview/traffic_analysis/all) The current, simplest implementation recommended by `google` is to place this code in your site's `<head>`:

:::

<figcaption>Google Analytics</figcaption>

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-000000000-0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-000000000-0');
</script>
```
:::

This script downloads a `js` file that varies in size depending on the implementation. I've seen `19kB` to **`137kB`**.

If you're using `google analytics` or any other tracking scripts on your site. Consider the following reasons to stop:

- It slows down your site.
- It uses up data.
- `Ad blockers` and new browser privacy settings are making it much easier to block tracking — making your analytics less accurate. (they also leave out people with javascript switched off)
- People don't like being tracked.
- You may need to add a `cookies consent` banner to your site. Eww.

If your main reason for using `google analytics` is to **count site visits**, consider using either `server-side analytics` or a smaller `client-side` solution.

 #### Server-side anaytics

Server-side analytics don't require your users downloading any data, and don't slow your site down at all. It uses your server's logs to track how many users have visited your site. This site uses [netlify analytics](https://www.netlify.com/products/analytics/). It gives me a few useful stats without collecting any personal data.

The one downside of `server-side` analytics is that it registers bot traffic. So the number of `page views` can be inaccurate. The number of `unique visitors` is mostly unaffected.

#### Client-side analytics

If you need to use `client-side` analytics, consider using something **privacy focused**, and **smaller** like…

- [plausible analytics](https://plausible.io/) `1.34kB`
- [fathom](https://usefathom.com/) `4.85kB`
- [simple analytics](https://simpleanalytics.com/) `5.69kB`



</div>


<div>

### Fonts

`Google Fonts` is by far the most popular source of fonts on the web. These fonts are free and most sites use google's `cdn` to host them:


:::
<figcaption>Typical Google Font Usage</figcaption>

``` html
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> 
```
:::

Using the above tags would download the typeface `Roboto` in just one style.

However, rather than downloading the font directly, it first downloads a `stylesheet`: 

::: figure small
<figcaption>Google Fonts Stylesheet</figcaption>

``` css
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```
:::

*That's just the stylesheet for one style. Adding another will double it's size.*

There are [advantages to using `Google Fonts`](https://www.tunetheweb.com/blog/should-you-self-host-google-fonts/#google-fonts-css) but it is wasteful, and slower than other approaches. There are two more user-friendly solutions…

#### Self-hosting fonts

Self-hosted fonts have big advantages over `Google Fonts:`

- **Speed** - [Self-hosting is much faster](https://www.tunetheweb.com/blog/should-you-self-host-google-fonts/#conclusion)

- **Privacy** - Stops font providers from snooping on your visitors.

- **Reliability** - If `Google Fonts` is down (or blocked), your fonts will still load fine.

- **Data** - Your users will download less data.

On top of this, you can still benefit from `subsetting` and `woff2`.

Plus, removing those two lines from the `<head>` is great.

*if you self-host fonts make sure you optimize them as much as possible. Use [Zach Leat's Font Loading Checklist](https://www.zachleat.com/web/font-checklist/).*




#### System Fonts

This site uses `system fonts` — fonts already installed on the user's device. Meaning **visitors don't download a single byte of font data.**

`System Fonts` are much more popular than you might expect, used on websites like [`github`](https://markdotto.com/2018/02/07/github-system-fonts/), [`booking.com`](https://booking.design/implementing-system-fonts-on-booking-com-a-lesson-learned-bdc984df627f), and [`unsplash`](https://unsplash.com/).

You can replace all your font files with a few lines of `css`:

:::
<figcaption><a href="https://systemfontstack.com/">Recommended by systemfontstack.com</a></figcaption>

``` css
// Sans-serif
font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
// Serif
font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
// Mono
font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
```


:::



</div>

<div>

## SEO

</div>

<div>

### Meta Keywords

`Keywords` was once the [most popular `<meta>` tag around.](http://vancouver-webpages.com/META/bycount.shtml) Search engines used it to help rank pages.

:::

<figcaption><a href="http://qwerty.com/">Meta Keywords from qwerty.com</a></figcaption>

```html
<meta name="keywords" content="typing tutor, keyboarding, keyboard training, number keypad training, Ainsworth, KEYBOARDING, KEYBOARD TRAINING, NUMBER KEYPAD TRAINING, AINSWORTH, Keyboarding, Keyboard Training, typing games, typing tests, software reviews, TYPING GAMES, TYPING TESTS, SOFTWARE REVIEWS, Typing Games, Typing Tests, Software Reviews, Citrix, thin client, network">
```

:::

[Search engines do not use `keywords` as a ranking factor anymore.](https://ahrefs.com/blog/meta-keywords/)


</div>

<div>

### rel="canonical"

[`~50%` of web pages use a canonical link.](https://almanac.httparchive.org/en/2020/seo#canonicalization) Most of these are self-referencing, like this:

:::
<figcaption>Canonical Tag Example</figcaption>

```html
<link rel="canonical" href="https://getoutofmyhead.dev/"/>
```
:::

`Canonical` tags are very useful. Self-referencing `canonical` tags seem like they might be pointless, but they can be very important for `seo`.

In the above example they let search engines know that `http://getoutofmyhead.dev`, `https://www.getoutofmyhead.dev`, `getoutofmyhead.dev?ref=producthunt` are all the same page. That way `google` and `bing` will send traffic to my prefered url `https://getoutofmyhead.dev`.

There are good reasons to use this method, but most situations can be covered by one of these two methods:

#### 301 redirects

A `301 redirect` sends traffic and search engines to your preferred `url`. No need for `<link>` tags.

#### Sitemap

`Google` suggests using a `sitemap.xml`. [**All pages in the sitemap are considered canonical**](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls#sitemap-method). `Google` will work out which pages are duplicates based on the content, and assume the sitemap contains the canonical urls.


</div>



<div>

## Other

Some tags that just wormed their way in somehow.

</div>

<div>

### http-equiv="X-UA-Compatible"

This tag is used to tell `Internet Explorer` to use the latest rendering engine:

:::

<figcaption>X-UA-Compatible meta tag from cnn.com</figcaption>

```html
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
```

:::

Great, we want everyone to get the best experience possible. Except [`Internet Explorer` already uses the latest rendering engine — so long as you have correctly declared your `<!DOCTYPE>`.](https://docs.microsoft.com/en-us/openspecs/ie_standards/ms-iedoco/3764531c-97c8-4bf2-bdc6-b3623738ea46)



</div>


<div>

### HandheldFriendly


The handheld friendly `<meta>` tag was created by `AvantGo`. If it wasn't present the browser would [remove `JavaScript`, `<table>`, and "certain image tags".](https://web.archive.org/web/20000903162014/http://avantgo.com/developer/reference/tutorials/jumpstart/jumpstart2.html#TOC3) from the page:

::: 

<figcaption>HandheldFriendly Meta Tag</figcaption>

```html
<meta name="HandheldFriendly" content="True">
```
:::

`AvantGo` was used on `Palm Pilots` between [2000-2009](https://web.archive.org/web/20180614094913/http://www.palminfocenter.com/news/6884/avantgo-going-away/). It was more of an `RSS` feed than a browser. 

By using the `HandheldFriendly` tag you're telling the 1 person in the world that still uses `AvantGo` that you made your website compatible with their palm pilot. Which would be a lie!

The only other browser that I could find uses it was the BlackBerry Browser. Before [`Blackberry OS 4.5` released in `2008`](https://uk.pcmag.com/operating-systems/6564/blackberry-os-45). The browser would render a page in `Column View` if `<meta name="HandheldFriendly" content="true">` wasn't present. 

However, **Blackberry Browser also supported `<meta name="viewport" content="width=device-width">` [which had the same effect!](https://www.manualslib.com/manual/368374/Blackberry-Browser-Version-4-7-0-Fundamentals-Guide.html?page=18#manual)**

If anyone is still using these browsers, let their devices render your content in the default way.

</div>


<div>

  ### Validation & Verification


  Some online tools like `Google Search Console` and `Bing Webmaster Tools` require you to prove that you're the owner of your website before you can use them.
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

</div>