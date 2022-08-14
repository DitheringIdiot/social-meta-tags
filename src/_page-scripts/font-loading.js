if ("fonts" in document) {
    if (!navigator.connection || (navigator.connection.effectiveType !== "slow-2g" && navigator.connection.effectiveType !== "2g" && navigator.connection.saveData)) {
        const regular = new FontFace("space grotesk", "url(/spacegrotesk-regular.woff2) format('woff2'), url(/spacegrotesk-regular.woff) format('woff')")
        const bold = new FontFace("space grotesk", "url(/spacegrotesk-bold.woff2) format('woff2'), url(/spacegrotesk-bold.woff) format('woff')", { weight: 'bold'})
        const mono = new FontFace("space mono", "url(/spacemono-regular.woff2) format('woff2'), url(/spacemono-regular.woff) format('woff')")

        Promise.all([regular.load(), mono.load(), bold.load()]).then((fonts) => {
            
            fonts.forEach(function (font) {
                document.fonts.add(font)
            })

            document.body.classList.add("loaded-fonts")
        })
    }
}