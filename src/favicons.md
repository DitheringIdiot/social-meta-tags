---
layout: "page.njk"
title: "Favicons"
style: "home"
templateEngineOverride: njk, md
previousText: 'home'
previousLink: '/'
nextText: 'apple touch icons'
nextLink: '/apple-touch-icon/'
---

::: header

# favicons

<p class="lead"><span>Lose links to favicons in your markup<br>without losing the favicons</i></span></p>

:::

`Favicons` are the small icons that appear in browser tabs, usually next to the title of a website.

Every website should have a `favicon` to help differentiate it from websites in other tabs.

`~75%` of websites have a tag in the `<head>` letting the browser know where to find the site's `favicon`.[^1]

:::

<figcaption>a basic favicon link</figcaption>

``` html 
<link rel="icon" href="/favicon.ico">
```

:::

## You don't need this code!

By default, all browsers look for a file `/favicon.ico` in a site's root directory.

So, you can avoid having any links in your `<head>` by hosting a `favicon` at the root of your site: 

*e.g. `https://example.com/favicon.ico`*

So, if your `favicon` is already hosted at your site's root, and is in the `.ico` format — you can go ahead and delete that link from your&nbsp;`<head>`. 


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


::: aside aside-main

### How to make a `favicon` containing multiple&nbsp;icons using `gimp`

You can use the [free and open-source image editor `Gimp`](https://www.gimp.org/).

Here's how you do it: 

1. Create a new file with the dimensions of your largest icon size.

2. Create a new layer with the dimensions of the other sizes.

3. In each layer paste your icon and resize it to fit that layer.

4. Export your file and select the `.ico` file extension.

5. A dialogue box will appear, prompting you to select options for your icons. Select `Compressed (png)` for a smaller file size.

6. Click `Export`

Note that `IE 10` and below do not support `png` favicons.[^2] To support `IE <= 10` make sure any icon smaller than `48x48` are not exported as `.png`.

Icons larger that `48x48` can still benefit from compression without effecting `IE <= 10`.

::: 



[^1]: [http archive Almanac 2020](https://almanac.httparchive.org/en/2020/markup#favicons)
[^2]: [Can I Use | png favicons](https://caniuse.com/link-icon-png)