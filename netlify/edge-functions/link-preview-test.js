import base from '../../scripts/test-base.js'
import socialPreviewTestMarkup from '../../scripts/tests/social-preview-test.js'

// const base = require('../../scripts/test-base.js')
// const socialPreviewTestMarkup = require('../../scripts/tests/social-preview-test.js')

export default (request, context) => {

    const url = new URL(request.url)

    const pathname = url.pathname

    const options = pathname.split('/')

    const randomNumber = Math.random().toString(36).substr(2, 8)

    // Get query string and create options object

    const urlBeforeRedirect = 'https://getoutofmyhead.dev/link-preview-test/' + randomNumber + '/' + options.join('/')

    // pass options object to function that generates <head></head> markup

    // pass options to a function that generates the markup for the page, just to add MicroData to the html tag

    // create body with the head markup in a code block

    const stylesheet = '/css/test.css'


    const trimWhitespace = (content) => {
        //return content
        return content.split('\n').map(line => line.trim()).join('\n').replace(/(\r\n|\r|\n){2,}/g, '$1\n')
    }

    const markup = trimWhitespace(socialPreviewTestMarkup(options, urlBeforeRedirect, stylesheet))

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
            <figure>
            <figcaption>Use this url to test this page</figcaption>
            <textarea readonly onclick="this.select()">${urlBeforeRedirect}</textarea>
            </figure>
            <figure>
                <figcaption>This page's &lt;head&gt;</figcaption>
                <pre><code>${escapedMarkupForCodeBlock}</code></pre>
            </figure>
        </main>
        <footer>
            
        </footer>
    `

    const content = base(`${markup}`, bodyMarkup)


    return new Response(content, {
        status:200,
        headers:{
            'Content-Type':'text/html; charset=UTF-8'
        }
    });



}