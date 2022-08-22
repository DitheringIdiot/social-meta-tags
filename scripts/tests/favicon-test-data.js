
const faviconTestData = () => {

    return {
        "png-favicon":    {

            "label": "PNG Favicon",
            "image": "/icons/favicon-png.ico",
            "markup":`

            <!-- PNG Favicons -->
            <link rel='icon' href='/icons/favicon-png.ico'>
            
            `
            
        },
        "svg-favicon": {
            "label" : "SVG Favicon",
            "image" : "/icons/favicon.svg",
            "markup": `

            <!-- SVG Favicon -->
            <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml'>

            `
        }
    }


}

export default faviconTestData