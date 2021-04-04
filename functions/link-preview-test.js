const base = require('../scripts/test-base.js')
const socialPreviewTestMarkup = require('../scripts/tests/social-preview-test.js')


exports.handler = (event, context, callback) => {


    const options = event.queryStringParameters

    // Check if redirect method was used 
    const firstKey = Object.keys(options)[0] || ''
    const cameFromRedirect = firstKey.includes('/')
    let optionsArray = []
    let queryParamterString = ''
    if (cameFromRedirect) {
        optionsArray = firstKey.split('/')
        queryParamterString = firstKey
    } else {
        optionsArray = Object.keys(options)
        queryParamterString = optionsArray.join('/')
    }


    // Get query string and create options object

    const urlBeforeRedirect = 'https://getoutofmyhead.dev/link-preview-test/' + queryParamterString

    // pass options object to function that generates <head></head> markup

    // pass options to a function that generates the markup for the page, just to add MicroData to the html tag

    // create body with the head markup in a code block

    const stylesheet = '/css/critical.css'


    const trimWhitespace = (content) => {
        //return content
        return content.split('\n').map(line => line.trim()).join('\n').replace(/(\r\n|\r|\n){2,}/g, '$1\n')
    }

    const markup = trimWhitespace(socialPreviewTestMarkup(optionsArray, urlBeforeRedirect, stylesheet))

    const escapeMarkup = (content) => {
        return content.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
    }

    const escapedMarkupForCodeBlock = escapeMarkup(markup)

    const bodyMarkup = `
        <main>
            <h1>Link Preview H1</h1>
            <p>This page is for testing link previews on different platforms. <a href="/link-preview-tester">Learn More</a></p>
            <p>Use this url to test this page: <code>${urlBeforeRedirect}</code></p>
            <figure>
                <figcaption>This page's &lt;head&gt;</figcaption>
                <pre><code>${escapedMarkupForCodeBlock}</code></pre>
            </figure>
        </main>
    `

    const content = base(`${markup}`, bodyMarkup)


    callback(null, {
        statusCode: 200,
        body: content,
    })


}