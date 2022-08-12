---
layout: "page.njk"
title: "Canonical Links"
style: "home"
templateEngineOverride: njk, md
previousText: 'Social'
previousLink: '/social'
nextText: 'apple touch icons'
nextLink: '/apple-touch-icons/'
---

::: header

# Canonical Links

<p class="lead"><span>self-referencing canonical links are mostly not neccessary.</span></p>

:::

`~50%` of web pages use a canonical link.[^1] Most of these are self-referencing, like this:


:::
<figcaption>Canonical Link Example</figcaption>

```html
<link rel="canonical" href="https://getoutofmyhead.dev/canonical-links/"/>
```
:::

`Canonical links` are useful if you have multiple versions of the same page. 

A canonical link in the `<head>` of your document, tells `search engines` and `web crawlers` where to find the preferred version of the page.

A web page may have versions in different languages, a printer friendly version, or a text-only version. In these cases it's useful to tell search engines to use the `canonical` version.

In these instances it makes sense to have a link to the canonical version. But why then do so many pages reference themselves?

## Self-referencing canonical tags

Self-referencing `canonical` tags might seem pointless, but they do serve a function.

Since a page can have multiple versions of the same url pointing to it. 

A url could have a `trailing slash`, `http` and `https` versions, query parameters, `www` or `non-www`.

The following links all point to the homepage of this website:

- `http://getoutofmyhead.dev`
- `https://getoutofmyhead.dev/`
- `https://www.getoutofmyhead.dev`
- `getoutofmyhead.dev?query=parameter` 

All of these links will work, but I'd prefer `google` and `bing` to send traffic to `https://getoutofmyhead.dev/`.

 To do that I could use a canonical link, but there are two other methods that don't rely on adding markup to my page.

### 301 redirects

A `301 redirect` will redirect traffic and search engines to your preferred `url`. No need for `<link>` tags.

Setting up redirects will differ based on the setup of your site. It's the simplest way of dealing with similar urls like the ones above.


### Sitemap

`Google` suggests using a `sitemap.xml`. **All pages in the sitemap are considered canonical**.[^2] 

`Google` will work out which pages are duplicates based on the content, and assume the sitemap contains the canonical urls.

`Bing` webmaster guidelines also ask that sitemaps only include `canonical` urls.[^3] Which suggests that a sitemap is a reasonable alternative to using a canonical `<link>` tag.


[^1]:[http archive — 2020 Alamanac — SEO](https://almanac.httparchive.org/en/2020/seo#canonicalization)
[^2]:[Google Developers — consolidate duplicate urls](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls#sitemap-method)
[^3]:[Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a)