---
layout: "page.njk"
title: "x-ua-compatible"
style: "home"
templateEngineOverride: njk, md
previousText: 'Home'
previousLink: '/'
---

::: header

<h1><span class="highlight">X-UA-compatible</span></h1>

<p><span class="highlight">What it is and why you don't need it in your website</span></p>

::: 


The `x-ua-compatible` is everywhere. It appears in the `<head>` of extremely popular websites — it may even be on your website. But what is it?

:::

<figcaption>
<p>X-UA-Compatible meta&nbsp;tag.</p>
<p>this real life example was captured in the wild on theguardian.com weighing…</p>
</figcaption>

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
```

:::

## What does x-ua-compatible do?

This tag is used to tell `Internet Explorer (IE)` to render your web page in specific, non-standard ways.

`IE` has different different `document modes` that allow you to view a webpage as if you we're using an older version of the browser.

`IE 6` and `7` (and other old browsers) did not properly implement `W3C` specifications. So, when `Microsoft` released the (mostly) spec compliant `IE 8` — sites built especially for `IE 6` and `7` didn't work as expected.

`Document modes` was the solution to this problem — and the `x-ua-compatible` meta tag was how you chose a `document mode`.

To understand why your site definitely does not need this tag, we'll have to dig a little deeper…

## What does `IE=Edge` mean?

`IE=edge` tells `IE` to use the latest available document mode. That sounds great — we want everone to get the best experience possible.

But, **this is already the default experience!** So long as you correctly declare your `<!doctype>` (which you will), `IE` will use the latest document mode.[^1] That means `IE 8` uses `IE 8` mode. `IE 9` uses `IE 9` mode, and so on.

All `IE=edge` does is tell `IE` to do something it already does. It's maddening.

### So, it does nothing. Then why is it everywhere?

My theory —  developers were afraid that `IE` would render their page in an older `document mode`. There was a lot of uncertainty surrounding `IE`  and the documentation for this tag is overly complicated —  it was better to be safe than sorry.

Using this tag would also stop a `compatibility mode` button from appearing in `IE 8-10`. If the button was present, it allowed users to toggle between a spec-compliant mode and older `document modes`[^2]  — which may have spooked some developers.

`x-ua-compatible` was added to templates and frameworks by clever developers — who probably know something you don't — and the more it appeared the more it seemed like it was necessary.

`Bootstrap`, a very popular UI framework made by `Twitter`, recommended using this tag up until 2018.[^3]

## Just delete the tag 

Just delete it. Both `Microsoft`[^4] and `Mozilla`[^5] now recommend correctly declaring your doctype to stop `IE` from entering `compatibility mode` (and other browsers from entering `quirks mode`).

Correctly declaring a `doctype` is important — it has nothing to do with old `ie` `compatibility modes` or `x-ua-compatible` — you should be doing it anyway.


:::
<figcaption>
make sure this code is the first thing in your document
</figcaption>

```html
<!doctype html>
```

:::

## `chrome=1` and some more weirdness.

Sometimes you'll see an additional value along side `IE=edge`:

:::

<figcaption>X-UA-Compatible meta tag found on cnn.com. Disgusting, isn't it?</figcaption>

```html
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
```

:::

This is used to tell `IE 6-8` to use `Chrome Frame` — a browser extension that runs the `Chromium` `JavaScript` and `rendering engine` inside `IE` — like a browser inside a browser.

This was a solution for legacy browsers to use `Google Wave`, a predecessor to `Google Docs`.

Users of `IE 6-8` with `Chrome Frame` installed, could potentially have a better experience if you add that tag…if they exist!


::: section

### Should your site support `IE 6-8` with `Chrome Frame` installed?

Should your site should support legacy browsers? It's a difficult question — I believe you should support as many as you can without sacrificing security.

`~0.04%` of web users still use `IE 6-8`.[^6] That's millions of people, and their access to your website shouldn't be dismissed without some thought.

There are some things that should be taken into account:

- Google dropped support for Chrome Frame in January 2014 and recommends it no longer be used.[^7]

- Your site may not be accessible to `IE 6-8` users at all — much of the web (including this website) is not. If your site forces the use of `https` and does not support `TLS 1.0`, then those users cannot access your content anyway[^8] — making  `x-ua-compatible` redundant.

- If you choose to support `IE 6-8` you should assume that those users will not have `Chrome Frame` installed — as it has long not been supported.

- Building your website using the principle of **progressive enhancement**[^9] will always be better than any browser specific hacks.

[^1]: [Microsoft Internet Explorer Standards](https://docs.microsoft.com/en-us/openspecs/ie_standards/ms-iedoco/3764531c-97c8-4bf2-bdc6-b3623738ea46)

[^2]: [IE8 and the X-UA-Compatible situation](https://web.archive.org/web/20180206103111/http://farukat.es/journal/2009/05/245-ie8-and-the-x-ua-compatible-situation)

[^3]: [bootlint on github](https://github.com/twbs/bootlint/wiki/W002)

[^4]: [Compatibility changes in IE11](https://docs.microsoft.com/en-gb/previous-versions/windows/internet-explorer/ie-developer/dev-guides/bg182625(v=vs.85)#document-mode-changes)

[^5]: [Quirks Mode and Standards Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode#how_does_mozilla_determine_which_mode_to_use.3f)

[^6]: [Information from StatCounter via caniuse.com](https://caniuse.com/usage-table)

[^7]: [Chromium Blog](https://blog.chromium.org/2013/06/retiring-chrome-frame.html)

[^8]: [Can I Use — TLS 1.1 browser support](https://caniuse.com/tls1-1)

[^9]: [Progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)

:::