const htmlmin = require("html-minifier")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const socialImages = require("@11tyrocks/eleventy-plugin-social-images")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
let markdownIt = require("markdown-it")
// const Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')
const mia = require('markdown-it-attrs')
const mid = require('markdown-it-div')
const markdownItAnchor = require("markdown-it-anchor")

const jsdom = require("jsdom")
const { JSDOM } = jsdom

module.exports = (eleventyConfig) => {

    eleventyConfig.addPassthroughCopy("./src/css")
    eleventyConfig.addPassthroughCopy("./src/favicon.ico")
    eleventyConfig.addPassthroughCopy("./src/oembed.xml")
    eleventyConfig.addPassthroughCopy("./src/oembed_rich.json")
    eleventyConfig.addPassthroughCopy("./src/oembed_link.json")
    eleventyConfig.addPassthroughCopy("./src/oembed_photo.json")
    eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png")
    eleventyConfig.addWatchTarget("./src/css/")

    eleventyConfig.addPlugin(pluginRss)
    eleventyConfig.addPlugin(socialImages)
    eleventyConfig.addPlugin(syntaxHighlight, {
        trim: true
    })

    eleventyConfig.addShortcode("renderjs", (path) => {
        const renderFunction = require('./_includes/' + path)
        return renderFunction(process.baseUrl)
    })

    eleventyConfig.addPairedShortcode("trimwhitespace", (content) => {
        //return content
        return content.split('<br>').map(line => line.trim()).join('\n')
    })

    eleventyConfig.addShortcode("dynamicUrl", (tags) => {
        return `<pre class="dynamic-url">https://getoutofmyhead.dev/tests/` + tags.map(tag => {
            return `<span class="${tag.name}-url">${tag.name}</span>`
        }).join('<span class="dash">-</span>') + `</pre>`
    })

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeOptionalTags: false
            })
            return minified
        }

        return content
    })



    let tag = '' // Important part of the markdown tag bits


    let markdownLibrary = markdownIt({
        html: true,
    }).use(mia).use(markdownItAnchor, {
        permalink: true,
        permalinkClass: "anchor",
        permalinkSymbol: "&nbsp;#",
        permalinkSpace: false,
        permalinkBefore: false,
        level: [2, 3],
        slugify: (s) =>
            s
                .trim()
                .toLowerCase()
                .replace(/[\s+~\/]/g, "-")
                .replace(/[().`,%·'"!?¿:@*]/g, ""),
    }).use(mid, {

        render: function (tokens, idx) {
            var m = tokens[idx].info.trim()
            if (tokens[idx].nesting === 1) {

                // opening tag
                if (m) {
                    tag = m.split(' ')[0]
                    let classes = m.split(' ').length > 1 ? ` class="${m.split(' ').slice(1).join(' ')}"` : ''
                    return `<${tag}${classes}>\n`
                }

                return '<figure>\n'

            } else {
                // closing tag
                if (tag) {
                    let closing = `</${tag}>\n`
                    tag = ''
                    return closing
                }

                return '</figure>\n'
            }

        }

    })


    eleventyConfig.setLibrary("md", markdownLibrary)


    eleventyConfig.addTransform("bytes", (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
            const dom = new JSDOM(content)
            const document = dom.window.document
            const codeblocks = document.querySelectorAll('pre > code')

            const insertAfter = (referenceNode, newNode) => {
                referenceNode.parentNode.parentNode.children[0].append(newNode)
            }

            const formatBytes = (bytes) => {
                if (bytes < 1000) {
                    return `${bytes} bytes`
                }

                return `${bytes / 1000} kB`
            }

            codeblocks.forEach(block => {
                const text = block.textContent
                const textEncoder = new TextEncoder()
                const bytes = textEncoder.encode(text).length
                const el = document.createElement('span')
                el.innerHTML = formatBytes(bytes)
                insertAfter(block, el)
            })


            content = dom.serialize()


        }

        return content
    })


    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "public",
            markdownTemplateEngine: "njk"
        }
    }
}