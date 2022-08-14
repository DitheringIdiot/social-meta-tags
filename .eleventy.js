const htmlmin = require("html-minifier")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const socialImages = require("@11tyrocks/eleventy-plugin-social-images")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
let markdownIt = require("markdown-it")
// const Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')
const markdownItAttr = require('markdown-it-attrs')
const markdownItDiv = require('markdown-it-div')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItAnchor = require("markdown-it-anchor")

const jsdom = require("jsdom")
const { JSDOM } = jsdom

module.exports = (eleventyConfig) => {

    eleventyConfig.addWatchTarget("./src/sass/")

    eleventyConfig.addPassthroughCopy({ "./src/_includes/css/*": "/css/" })

    eleventyConfig.addPassthroughCopy("./src/favicon.ico")
    eleventyConfig.addPassthroughCopy({ "./src/fonts/*": "/" })

    eleventyConfig.addPassthroughCopy({ "./src/social-testing-files/*": "/" })


    eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png")
    eleventyConfig.addPassthroughCopy("./src/robots.txt")
    eleventyConfig.addPassthroughCopy("./src/_redirects")
    eleventyConfig.addPassthroughCopy("./src/images/*")

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
        return content.split('<br>').map(line => line.trim()).join('\n').replace(/(\r\n|\r|\n){2,}/g, '$1\n')
    })

    eleventyConfig.addPairedShortcode("removewhitespace", (content) => {
        return content.replace(/\s+/g, ' ').trim()
    })

    eleventyConfig.addShortcode("dynamicUrl", (tags) => {
        return `<pre class="dynamic-url">https://getoutofmyhead.dev/tests/` + tags.map(tag => {
            return `<span class="${tag.name}-url">${tag.name}</span>`
        }).join('<span class="dash">-</span>') + `<span class="rich-url">-rich</span><span class="video-url">-video</span><span class="link-url">-link</span><span class="photo-url">-photo</span></pre>`
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




    const markdownItConfig = {
        html: true,
        breaks: false
    }



    const markdownEngine = markdownIt(markdownItConfig).disable('code')

    markdownEngine.use(markdownItAttr)


    markdownEngine.use(markdownItAnchor, {
        level: [2, 3],
        permalink: markdownItAnchor.permalink.headerLink(),
        slugify: (s) =>
            s
                .trim()
                .toLowerCase()
                .replace(/[\s+~\/]/g, "-")
                .replace(/[().`,%·'"!?¿:@*]/g, ""),
    })



    let tag = '' // Important part of the markdown tag bits

    markdownEngine.use(markdownItDiv, {

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


    markdownEngine.use(markdownItFootnote)

    markdownEngine.renderer.rules.footnote_caption = (tokens, idx) => {
        const n = Number(tokens[idx].meta.id + 1).toString()

        if (tokens[idx].meta.subId > 0) {
            n += ':' + tokens[idx].meta.subId
        }

        return n
    }


    eleventyConfig.setLibrary("md", markdownEngine)


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
                const el = document.createElement('p')
                el.classList.add("bytes")
                el.innerHTML = formatBytes(bytes)
                insertAfter(block, el)
            })


            content = dom.serialize()


        }

        return content
    })



    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public"
        }
    }
}