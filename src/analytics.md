---
layout: "page.njk"
title: "Analytics"
style: "home"
templateEngineOverride: njk, md
previousText: 'Social'
previousLink: '/social'
nextText: 'apple touch icons'
nextLink: '/apple-touch-icons/'
---


::: header

# Analytics

<p class="lead"><span>You probably don't need all that data anyway.</span></p>

:::

`~55%` of all websites include `Google Analytics or Google Tag Manager`.[^1] The current, simplest implementation recommended by `google` is to place this code in your site's `<head>`:

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

This script downloads a `js` file that varies in size depending on the implementation — starting from `19kB` but can go all the way up to `137kB` (and maybe even bigger).

If you're using `google analytics` or any other tracking scripts on your site. Consider the following reasons to stop:

- It slows down your site.
- It uses up data.
- `Ad blockers` and new browser privacy settings are making it much easier to block tracking — making your analytics less accurate. (they also leave out people with javascript switched off)
- People don't like being tracked.
- You may need to add a `cookies consent` banner to your site. Creating more overhead.

If your main reason for using `google analytics` is to gather basic information (page views, unique visits, and sources) consider using one of these alternatives:

 ## Server-side anaytics

Server-side analytics don't require your users downloading any data, and don't slow your site down at all. 

It uses your server's logs to track how many users have visited your site. 

This site uses [netlify analytics](https://www.netlify.com/products/analytics/). It gives me a few useful stats without collecting any personal data.

The one downside of `server-side` analytics is that it registers bot traffic. So the number of `page views` can be inaccurate. The number of `unique visitors` is mostly unaffected.

## Smaller Client-side analytics

If you need to use `client-side` analytics, consider using something **privacy focused**, and **smaller** like…

- [plausible analytics](https://plausible.io/) `1.34kB`
- [fathom](https://usefathom.com/) `4.85kB`
- [simple analytics](https://simpleanalytics.com/) `5.69kB`


[^1]:[w3 Techs](https://w3techs.com/technologies/history_overview/traffic_analysis/all)