module.exports = [
    {
        name: "twitter",
        url: "https://twitter.com",
        tests: {
            title: false,
            metadescription: false,
            microdata: false,
            jsonld: false,
            oembed_xml: false,
            oembed_json_rich: false,
            oembed_json_photo: null,
            oembed_json_link: null,
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
        tests: {
            title: {
                works: true,
                note: "only in conjunction with metadescription"
            },
            metadescription: true,
            microdata: false,
            jsonld: false,
            oembedxml: false,
            oembed_json_rich: null,
            oembed_json_photo: null,
            oembed_json_link: null,
            twitter: true,
            opengraph: true
        }
    },
    {
        name: "iMessage",
        url: "",
        tests: {
            title: true,
            metadescription: false,
            microdata: true,
            jsonld: {
                works: false,
                note: "double check this | odd that the microdata format works"
            },
            oembed_xml_rich: null,
            oembed_json_rich: null,
            oembed_json_photo: null,
            oembed_json_link: null,
            opengraph: true,
            twitter: true
        },
        note: "Uses Apple Touch Icon if present at the root"
    },
    {
        name: "Discord",
        url: "",
        tests: {
            title: {
                works: true,
                note: "only in conjunction with a meta description"
            },
            metadescription: true,
            microdata: false,
            jsonld: false,
            oembed_xml_rich: null,
            oembed_json_rich: null,
            oembed_json_photo: null,
            oembed_json_link: null,
            opengraph: true,
            twitter: true,
        }
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

// {
//     name: "",
//     url: "",
// tests:{
//     title: -,
//     metadescription: -,
//     microdata: -,
//     jsonld: -,
//     oembedxml: -,
//     oembedjson: -,
//     twitter: -,
//     opengraph: -
// }
// },