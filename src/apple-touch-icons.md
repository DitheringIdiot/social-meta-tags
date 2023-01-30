---
layout: "page.njk"
title: "Apple Touch Icons"
style: "home"
templateEngineOverride: njk, md
previousText: 'Favicons'
previousLink: '/favicons'
---

::: header

<h1><span class="highlight">Zero byte<br>apple-touch-icons markup</span></h1>

<p><span class="highlight">Remove apple touch icons from your markup<br>without losing the icons</span></p>

:::

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

::: section

## You can remove all this code from your `<head>`!

Just like with [favicon.ico](/favicons) you can **remove these links** and place a single `apple-touch-icon.png` in your root directory.

*e.g. `https://example.com/apple-touch-icon.png`*

`180x180` is the largest icon size any `iOS` device requires.[^1] **Other devices will downscale the image to fit.** — and as of writing this — `Apple` use a single `152x152` icon on `apple.com`.

### What about other sizes?

If you'd still rather specify a different image for every possible icon size, you can still do that without adding any code to your `<head>`.

You can place multiple `apple-touch-icons` in your site's root directory.[^2] So long as they're named in the following way:

<dl>
<dt><p>default</p>                                          <dd><p><code>/apple-touch-icon.png</code></p>
<dt><p>specify size</p>                                <dd><p><code>/apple-touch-icon-72x72.png</code></p>
<dt><p>specify precomposed</p>                        <dd><p><code>/apple-touch-icon-precomposed.png</code></p>
<dt><p>specify size and precomposed</p>                   <dd><p><code>/apple-touch-icon-57x57-precomposed.png</code></p>
</dl>

:::

::: 

<figcaption>

### What does precomposed mean?

</figcaption>

<aside>

Older versions of `iOS` added lighting effects to icons on the homescreen. Adding the `precomposed` suffix removed these effects.

It was a way of telling `iOS` that you had already added an effect — which is probably not true.

</aside>

:::

::: section

### Android and `apple-touch-icons`

Older versions of `Chrome for Android` used `apple-touch-icons` for adding shortcuts to the homescreen. 
*But* only if a large enough non-apple icon wasn't found.

Some of older versions of `android` would look for `apple-touch-icons` at the site's root.[^3] But this practice ended as it was using `3-4%` of mobile users bandwith!

If `android` can't find a large icon to use. It will use the site's `favicon.`

:::

[^1]:[Apple — Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/#app-icon-sizes)
[^2]:[developer.apple.com](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
[^3]:[Matias Bynens Blog](https://mathiasbynens.be/notes/touch-icons)