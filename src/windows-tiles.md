---
layout: "page.njk"
title: "Apple Touch Icons"
style: "home"
templateEngineOverride: njk, md
previousText: 'Safari Mask Icon'
previousLink: '/safari-mask-icon/'
nextText: 'Social Media'
nextLink: '/social-media/'
---

# Windows Tiles

Microsoft introduced `tiles` on `Windows Phone 7`, `Windows 8` and `IE 11`. 

A `tile` is a shortcut to a website or app. `Tiles` appear on the homescreen of windows phones and tablets, and in the start menu on desktop.

Giving your website a `tile` requires some Microsoft specific code — and so you'll often see something like this in a site's `<head>`:

:::
<figcaption>Windows Tile Meta Tags</figcaption>

``` html
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">
```
:::

The first tag describes a color for the `tile`. The seconds tag is a link to an image.

We want `Windows` users to have a good experience on our website, but sending every visitor to our site *vendor specific* code wasteful.

## zero waste solution

Luckily, `Windows` gives us an alternative.

If these tags aren't present `windows` looks for `browserconfig.xml` at the root of your site.

e.g. `https://example.com/browserconfig.xml`

It's a small `xml` file that describes how we want our tile to look. There's tags for each possible `tile` size, and a tag for the color.

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


## Also, the default is fine!

If no special `<meta>` tags or `browesrconfig.xml` is present. The tile will still look perfectly acceptable, using the site's `favicon` and `title`.
