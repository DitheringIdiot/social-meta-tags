---
layout: "page.njk"
title: "Safari Mask Icon"
style: "home"
templateEngineOverride: njk, md
previousText: 'apple touch icons'
previousLink: '/apple-touch-icons/'
nextText: 'Windows Tiles'
nextLink: '/windows-tiles/'
---


# Safari mask icon

Apple introduced `pinned tabs` in `Safari 9` and with it a proprietary icon type — the `mask icon`. 

`Pinned Tabs` are similar to bookmarks — a convenient way of accessing your favourite websites.

The `mask icon` was a silhouette `svg` replacement for the standard `favicon`. Unlike a favicon it required a link in your site's `<head>`.

:::
<figcaption>Safari 9-11 pinned tabbed icon</figcaption>

``` html
<link rel="mask-icon" href="website_icon.svg" color="red">
```
:::

It seems the `mask icon` never caught on. So, as of `Safari 12` your site's standard `favicon` is used instead. 

If you're wondering if you should still use a `mask-icon` to support old versions of `safari`, consider first that:

- `Safari 9-11` will use the first letter of your domain name in a grey box if a `mask-icon` is not present.
- `Apple` don't use one on `apple.com`[^1]
- As of writing this (July 2021), `Safari 9-11` makes up `0.12%` of browser usage.[^2]

[^1]:[How to favicon in 2021](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs#safari-pinned-icon)
[^2]:[StatCounter via Can I Use](https://caniuse.com/usage-table)