---
layout: "page.njk"
title: "Favicons"
style: "home"
templateEngineOverride: njk, md
previousText: 'home'
previousLink: '/'
nextText: 'apple touch icons'
nextLink: '/apple-touch-icons/'
---

# Favicons

<p class="lead"><span>You can remove links to favicons from your markup — and still have a favicon.</span></p>

[`~75%` of websites](https://almanac.httparchive.org/en/2020/markup#favicons) have a tag in the `<head>` letting the browser know where to find the site's `favicon`:

:::

<figcaption>a basic favicon link</figcaption>

``` html 
<link rel="icon" href="/favicon.ico">
```

:::



## Why you don't need this

By default, all browsers look for a file `/favicon.ico` in a site's root directory.

So, you can avoid having any links in your `<head>` by hosting a `favicon` at the root of your site: 

*e.g. `https://example.com/favicon.ico`*

## What about different favicon sizes?

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

## How to make a `favicon` containing multiple icons

You can use the [free and open-source image editor **Gimp**](https://www.gimp.org/).

Create a layer for each icon, and select different dimensions for each layer.

When exporting your file, select the `.ico` format.

**Note**: You can optionally select `png` as the file format for individual images inside your `.ico` file. This will give your `favicon.ico` a smaller file size. 

*However* [`IE 10` and below do not support `png` favicons.](https://stackoverflow.com/questions/16943609/which-versions-of-ie-support-png-favicons#answer-17104488)
If you want to support `IE < 10` make sure any icon smaller than `48x48` are not `png`.
::: 
