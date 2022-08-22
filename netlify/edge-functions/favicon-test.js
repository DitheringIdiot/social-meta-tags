import base from '../../scripts/test-base.js'
import faviconTestData from '../../scripts/tests/favicon-test-data.js'


export default (request, context) => {

    const url = new URL(request.url)

    const pathname = url.pathname

    const options = pathname.split('/')

    const randomNumber = Math.random().toString(36).substr(2, 8)

    const stylesheet = '/css/test.css'

    const trimWhitespace = (content) => {
        return content.split('\n').map(line => line.trim()).join('\n').replace(/(\r\n|\r|\n){2,}/g, '$1\n')
    }

    const faviconData = faviconTestData()

    let headMarkup = ``

    let newURL = 'https://getoutofmyhead.dev/favicon-test/' + randomNumber + '/'


    options.forEach(item => {
        if(faviconData[item]){
            headMarkup += faviconData[item].markup
            newURL += (item + '/')
        }
    })

    const markup = `<head>

            <!-- Website has a favicon.ico file in the root directory containing 16x16, 32x32, and 48x48 .bmp favicons -->

            <!-- Title -->
            <title>Favicon tester</title>

            ${headMarkup}

            <!-- Link to style sheet -->
            <link rel="stylesheet" href="${stylesheet}">

        </head>`

    const trimmedMarkup = trimWhitespace(markup)


    const escapeMarkup = (content) => {
        return content.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
    }

    const escapedMarkupForCodeBlock = escapeMarkup(trimmedMarkup)

    const bodyMarkup = `
        <main>
            <h1>Link Preview H1</h1>
            <p>This page is for testing favicons and other icons on different browsers. <a href="/favicon-tester">Learn More</a></p>
            <figure>
            <figcaption>Use this url to test this page</figcaption>
            <textarea readonly onclick="this.select()">${newURL}</textarea>
            </figure>
            <figure>
                <figcaption>This page's &lt;head&gt;</figcaption>
                <pre><code>${escapedMarkupForCodeBlock}</code></pre>
            </figure>
        </main>
        <footer>
            
        </footer>
    `

    const content = base(`${trimmedMarkup}`, bodyMarkup)


    return new Response(content, {
        status:200,
        headers:{
            'Content-Type':'text/html; charset=UTF-8'
        }
    });


}
