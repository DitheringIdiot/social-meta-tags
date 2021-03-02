const htmlmin = require("html-minifier")
const pluginRss = require("@11ty/eleventy-plugin-rss")
const socialImages = require("@11tyrocks/eleventy-plugin-social-images")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')

module.exports = (eleventyConfig) => {

    eleventyConfig.addPassthroughCopy("./src/css")
    eleventyConfig.addPassthroughCopy("./src/favicon.ico")
    eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png")
    eleventyConfig.addWatchTarget("./src/css/")

    eleventyConfig.addPlugin(pluginRss)
    eleventyConfig.addPlugin(socialImages)
    eleventyConfig.addPlugin(syntaxHighlight, {
        trim: true
        // init: function ({ Prism }) {
        //     const nw = Prism.plugins.NormalizeWhitespace
        //     nw.normalize
        // }
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
        return `<pre class="dynamic-url">https://localhost:8080/tests/` + tags.map(tag => {
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

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "public",
            markdownTemplateEngine: "njk"
        }
    }
}