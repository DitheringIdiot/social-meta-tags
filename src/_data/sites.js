module.exports = [
    {
        name: "twitter",
        url: "https://twitter.com",
        tests: {
            metadescription: {
                works: false
            },
            microdata: {
                works: false
            },
            jsonld: {
                works: false
            }

        }

    },
    {
        name: "facebook",
        url: "https://facebook.com",
        tests: {
            metadescription: {
                status: "good"
            }
        }
    }
]