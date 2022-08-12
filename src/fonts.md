---
layout: "page.njk"
title: "Fonts"
style: "home"
templateEngineOverride: njk, md
previousText: 'analytics'
previousLink: '/analytics'
nextText: 'apple touch icons'
nextLink: '/apple-touch-icons/'
---


::: header

# Fonts

<p class="lead"><span>Self-hosting fonts is lighter and faster.</span></p>

:::

`Google Fonts` is by far the most popular source of fonts on the web. These fonts are free and most sites use google's `cdn` to host them:


:::
<figcaption>Typical Google Font Usage</figcaption>

``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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

## Self-hosting fonts

Self-hosted fonts have big advantages over `Google Fonts:`

- **Speed** - [Self-hosting is much faster](https://www.tunetheweb.com/blog/should-you-self-host-google-fonts/#conclusion).

- **Privacy** - Stops font providers from snooping on your visitors.

- **Reliability** - If `Google Fonts` is down (or blocked), your fonts will still load fine.

- **Data** - Your users will download less data.

On top of this, you can still benefit from `subsetting` and `woff2`.

Plus, removing those three lines from the `<head>` just feels great.

*if you self-host fonts make sure you optimize them as much as possible. Use [Zach Leathermans's Font Loading Checklist](https://www.zachleat.com/web/font-checklist/).*


## System Fonts

`System Fonts` are fonts already installed on the user's device. Meaning **visitors don't download a single byte of font data.**

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

The downside of system fonts is that they're often ugly and they differ between devices. 

The upside of using the `OS` default fonts, is your users are already used to it, and they tend to be readable. So they make good no-frills body text.

## Combining system fonts and web fonts.

This site does it's best to check your network speed and data preferences, and either server a nice web font or a set of default system fonts.