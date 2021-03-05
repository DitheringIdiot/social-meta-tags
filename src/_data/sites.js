module.exports = [
    {
        name: "twitter",
        url: "https://twitter.com",
        tests: {
            title: false,
            metadescription: false,
            microdata: false,
            jsonld: false,
            oembedxml: false,
            oembedjson: false,
            twitter: {
                works: true,
                note: "must use absolute urls"
            },
            opengraph: {
                works: true,
                note: "must use absolute urls"
            }

        }

    },
    {
        name: "slack",
        url: "",
        title: {
            works: true,
            note: "only in conjunction with metadescription"
        },
        metadescription: true,
        microdata: false,
        jsonld: false,
        oembedxml: false,
        oembedjson: {
            works: false,
            note: "double check this"
        },
        twitter: true,
        opengraph: true
    },
    {
        name: "facebook",
        url: "https://facebook.com",
        tests: {
            metadescription: {
                works: true
            }
        }
    },

]