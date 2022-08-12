if ("fonts" in document) {
    if (!navigator.connection || (navigator.connection.effectiveType !== "slow-2g" && navigator.connection.effectiveType !== "2g" && navigator.connection.saveData)) {
        const regular = new FontFace("IBM Plex", "url(/IBMPlexSans-Regular.woff2) format('woff2'), url(/IBMPlexSans-Regular.woff) format('woff')")
        const italic = new FontFace("IBM Plex", "url(/IBMPlexSerif-Italic-Latin1.woff2) format('woff2'), url(/IBMPlexSerif-Italic-Latin1.woff) format('woff')", { style: "italic" })
        const mono = new FontFace("IBM Plex Mono", "url(/IBMPlexMono-Regular-Latin1.woff2) format('woff2'), url(/IBMPlexMono-Regular-Latin1.woff) format('woff')")
        const space = new FontFace("Space Grotesk", "url(/SpaceGrotesk.woff2) format('woff2'), url(/SpaceGrotesk.woff) format('woff')")

        Promise.all([italic.load(), regular.load(), mono.load(), space.load()]).then((fonts) => {
            fonts.forEach(function (font) {
                document.fonts.add(font)
            })

            document.body.classList.add("loaded-fonts")
        })
    }
}