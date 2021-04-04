const socialPreviewTestmarkupObj = (optionsArray, url, stylesheet) => {


    let markupObj = {}

    markupObj.metadescription = () => `
    <!-- Meta Description -->
    <meta name="description" content="Test Description | Meta Description — This description came from the meta description tag"/>`

    markupObj.microdata = () => `
    <!-- Microdata Schema.org -->
    <meta itemprop="name" content="Test Title | Schema.org Microdata Title"/>
    <meta itemprop="description" content="Test Description | Schema.org Microdata — This description came from Microdata using Schema.org Schema"/>
    <meta itemprop="image" content="/previews/microdata.png"/>`

    markupObj.jsonld = (url) => `
    <!-- JSON-LD Schema.org -->
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "Test Title | JSON-LD Schema.org",
            "image": "/json-ld.png",
            "description": "Test Description | JSON-LD Schema.org — This text came from JSON-LD formatted Schema",
            "url": "${url}"
        }
    </script>
    `

    markupObj.oembed_link_json = () => `
    <!-- oEmbed JSON Link -->
    <link rel="alternate" type="application/json+oembed" href="https://getoutofmyhead.dev/oembed_link.json" title="Test Title | oEmbed JSON Title Attribute"/>
    `

    markupObj.oembed_photo_json = () => `
    <!-- oEmbed JSON Photo -->
    <link rel="alternate" type="application/json+oembed" href="https://getoutofmyhead.dev/oembed_photo.json" title="Test Title | oEmbed JSON Title Attribute"/>
    `

    markupObj.oembed_rich_json = () => `
    <!-- oEmbed JSON Rich -->
    <link rel="alternate" type="application/json+oembed" href="https://getoutofmyhead.dev/oembed_rich.json" title="Test Title | oEmbed JSON Title Attribute"/>
    `

    markupObj.oembed_video_json = () => `
    <!-- oEmbed JSON Video -->
    <link rel="alternate" type="application/json+oembed" href="https://getoutofmyhead.dev/oembed_video.json" title="Test Title | oEmbed JSON Title Attribute"/>
    `

    markupObj.oembed_link_xml = () => `
    <!-- oEmbed XML Link -->
    <link rel="alternate" type="text/xml+oembed" href="https://getoutofmyhead.dev/oembed_link.xml" title="Test Title | oEmbed XML Title Attribute"/>
    `

    markupObj.oembed_photo_xml = () => `
    <!-- oEmbed XML Photo -->
    <link rel="alternate" type="text/xml+oembed" href="https://getoutofmyhead.dev/oembed_photo.xml" title="Test Title | oEmbed XML Title Attribute"/>
    `

    markupObj.oembed_rich_xml = () => `
    <!-- oEmbed XML Rich -->
    <link rel="alternate" type="text/xml+oembed" href="https://getoutofmyhead.dev/oembed_rich.xml" title="Test Title | oEmbed XML Title Attribute"/>
    `

    markupObj.oembed_video_xml = () => `
    <!-- oEmbed XML Video -->
    <link rel="alternate" type="text/xml+oembed" href="https://getoutofmyhead.dev/oembed_video.xml" title="Test Title | oEmbed XML Title Attribute"/>
    `

    markupObj.opengraph = (url) => `
    <!-- Facebook Open Graph -->
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Test Title | Facebook Open Graph">
    <meta property="og:image" content="/previews/opengraph.png">
    <meta property="og:image:alt" content="test image alt text from Facebook open graph tags">
    <meta property="og:description" content="Test Description | Facebook Open Graph — This description came from facebook open graph">
    `

    markupObj.opengraph_pointer = () => `
    <!-- opengraph pointer -->
    <link rel="opengraph" href="https://getoutofmyhead.dev/test-opengraph-pointer.html"/>
    `

    let headMarkupInner = ''

    const headMarkupOuter = (content, usesMicrodata = false, stylesheet) => {
        const microdataHeadInfo = usesMicrodata ? ` itemscope itemtype="https://schema.org/WebPage"` : ''
        const stylesheetLink = `<link rel="stylesheet" href="${stylesheet}">`

        return `<head lang="en"${microdataHeadInfo}>
                <title>Link Preview Test | Title Tag</title>
                ${content}
                ${stylesheetLink}
                </head>`
    }

    optionsArray.forEach(item => {
        if (markupObj[item]) {
            headMarkupInner += markupObj[item](url)
        }
    })

    const usesMicrodata = optionsArray.includes('microdata')

    console.log(optionsArray)
    console.log(usesMicrodata)

    const headMarkup = headMarkupOuter(headMarkupInner, usesMicrodata, stylesheet)

    return headMarkup

}

module.exports = socialPreviewTestmarkupObj