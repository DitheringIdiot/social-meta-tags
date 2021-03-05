module.exports = [
    {
        name: "twitter",
        url: "https://twitter.com",
        tests: {
            title: false,
            metadescription: false,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
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
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
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
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
            oembed_json_rich: false,
            oembed_json_photo: false,
            oembed_json_link: false,
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
            oembed_xml_rich: false,
            oembed_json_rich: {
                works: true,
                note: "Does not show thumbnail."
            },
            oembed_json_photo: {
                works: true,
                note: "Does not show photo."
            },
            oembed_json_link: {
                works: true,
                note: "Does not show thumbnail."
            },
            opengraph: true,
            twitter: true,
        }
    },
    {
        name: "facebook",
        url: "https://facebook.com",
        tests: {
            title: null,
            metadescription: null,
            microdata: null,
            jsonld: null,
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
            oembed_json_link: null,
            oembed_json_photo: null,
            oembed_json_rich: null,
            twitter: null,
            opengraph: null
        }
    },
    {
        name: "Whatsapp",
        url: "",
        tests: {
            title: null,
            metadescription: null,
            microdata: null,
            jsonld: null,
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
            oembed_json_link: null,
            oembed_json_photo: null,
            oembed_json_rich: null,
            twitter: null,
            opengraph: null
        }
    },
    {
        name: "Signal",
        url: "",
        tests: {
            title: null,
            metadescription: null,
            microdata: null,
            jsonld: null,
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
            oembed_json_link: null,
            oembed_json_photo: null,
            oembed_json_rich: null,
            twitter: null,
            opengraph: null
        }
    },
    {
        name: "Signal",
        url: "https://www.signal.org/",
        tests: {
            title: true,
            metadescription: true,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            twitter: false,
            opengraph: true
        }
    },
    {
        name: "Telegram",
        url: "",
        tests: {
            title: {
                works: true,
                note: "in conjunction with a meta description"
            },
            metadescription: true,
            microdata: true,
            jsonld: false,
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            twitter: true,
            opengraph: true
        }
    },
    {
        name: "Discourse",
        url: "https://www.discourse.org/",
        tests: {
            title: true,
            metadescription: false,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
            oembed_json_link: true,
            oembed_json_photo: false,
            oembed_json_rich: true,
            twitter: true,
            opengraph: true
        }
    },
    {
        name: "reddit",
        url: "https://www.reddit.com/",
        tests: {
            title: null,
            metadescription: null,
            microdata: null,
            jsonld: null,
            oembed_xml_photo: null,
            oembed_xml_link: null,
            oembed_xml_rich: null,
            oembed_json_link: null,
            oembed_json_photo: null,
            oembed_json_rich: null,
            twitter: null,
            opengraph: null
        }
    }
]

var test = {
    name: "",
    url: "",
    tests: {
        title: null,
        metadescription: null,
        microdata: null,
        jsonld: null,
        oembed_xml_photo: null,
        oembed_xml_link: null,
        oembed_xml_rich: null,
        oembed_json_link: null,
        oembed_json_photo: null,
        oembed_json_rich: null,
        twitter: null,
        opengraph: null
    }
}