---
layout: "page.njk"
title: "Charset"
style: "home"
templateEngineOverride: njk, md
previousText: 'Fonts'
previousLink: '/fonts/'
nextText: 'x-ua-compatible'
nextLink: '/x-ua-compatible/'
---

# Charset

<p class="lead"><span>You must declare a character encoding.<br>But you don't need a meta tag to do it.</span></p>

Declaring your character encoding is very important — but there's more than one way to do it.

Having an undeclared character encodings can cause performance issues,[^1] garbled text, and broken websites.

A common way of declaring a character encoding in html is with a `<meta>` tag. 

:::

<figcaption>Typical html5 character encoding meta&nbsp;tag</figcaption>

```html
<meta charset="utf-8">
```

:::

or

:::

<figcaption>Older way of declaring character encoding in html</figcaption>

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```

:::


## So what's the best way to declare a character encoding?

Before a browser can begin rendering your web page, it needs to know the character encoding of your document.

So, the earlier in your document you declare your encoding, the sooner the browser can begin rendering.

The earliest we can declare an encoding is in the `http headers`. Using this header:

:::

<figcaption>declaring character encoding in http&nbsp;header</figcaption>

```http
content-type: text/html; charset=utf-8
```

:::

This is best practice — so most servers will handle the content type for you.

If your server is sending this header (which it probably is), that’s great. You can delete the charset tag from your `<head>`, your website will still work fine…so long as the http header stays put. 


## What about when there are no http headers?

There are times when people download a webpage for later viewing. In those cases there are no http headers and our character encoding will be lost, right?

Well, it's a bit more complicated than that. The browsers have ways of handling this case.

If you save a webpage from `Firefox` or `Chrome` it will insert a meta tag with the encoding you've declared in your `http headers`.

If you save a web page in `Safari` the default file type is a `web archive`. It will save the content of the `http headers`.

### But what if you save the page source, without the character encoding?

Even then your website will *probably* render completely fine. 

Browsers typically, in the absense of a certain character encoding, will detect the encoding by analyzing the content of your document. 

`utf-8` is the only valid character encoding for `html5`[^2] — and according to a note in the `html5` specification: 
> The UTF-8 encoding has a highly detectable bit pattern.[^3] 

So, `utf-8` is unlikely to be confused with a different encoding. So your page is likely to be rendered successfully anyway.


It is still possible, that in this circumstance, your page may render incorrectly. If that's something you're worried about then you should also use the `<meta>` tag.

## Meta tag best practices

If you have decided to play it safe and use a `<meta>` tag anyway. Keep in mind that…

- The entire `<meta>` tag **must** be within the first `1024 bytes` of your document.[^4]
- Use the short version: `<meta charset="utf-8">`







<!-- 
::: aside aside-main

## What is a character encoding? 

All the data sent or received by your computer is a stream of binary — `1s` and `0s`.

In order for the characters I'm writing on my computer to be rendered correctly on your computer — our devices need to agree on which set of binary numbers match each character.

A `character encoding` is a set of characters and their corresponding `1s` and `0s`.

Declaring a `character encoding` in your web page ensures that the user's device knows which characters to render for which numbers.

:::
 -->


[^1]:[web.dev — Charset declaration is missing or occurs too late in the HTML](https://web.dev/charset/)
[^2]:[MDN meta charset attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset)
[^3]:[HTML5 specification — determining the character encoding](https://www.w3.org/TR/html52/syntax.html#determining-the-character-encoding)
[^4]:[HTML5 specification — charset](https://html.spec.whatwg.org/multipage/semantics.html#charset)