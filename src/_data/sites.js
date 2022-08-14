module.exports = [
    {
        name: "Twitter",
        url: "https://twitter.com",
        tests: {
            title: false,
            metadescription: false,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_rich: false,
            oembed_json_photo: false,
            oembed_json_link: false,
            oembed_json_video: false,
            twitter: true,
            opengraph: true,
            opengraph_pointer: false

        }

    },
    {
        name: "Slack",
        url: "",
        tests: {
            title: {
                works: true,
                note: "1"
            },
            metadescription: true,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_rich: false,
            oembed_json_photo: true,
            oembed_json_video: true,
            oembed_json_link: {
                works: true,
                note: "3"
            },
            twitter: true,
            opengraph: true,
            opengraph_pointer: false
        }
    },
    {
        name: "iMessage",
        url: "",
        tests: {
            title: true,
            metadescription: false,
            microdata: true,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_rich: false,
            oembed_json_photo: false,
            oembed_json_link: false,
            oembed_json_video: false,
            opengraph: true,
            opengraph_pointer: false,
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
                note: "1"
            },
            metadescription: true,
            microdata: false,
            jsonld: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_xml_link: false,
            oembed_xml_photo: false,
            oembed_json_rich: {
                works: true,
                note: "2"
            },
            oembed_json_photo: {
                works: true,
                note: "2"
            },
            oembed_json_link: {
                works: true,
                note: "2"
            },
            oembed_json_video: {
                works: true,
                note: "2"
            },
            opengraph: true,
            opengraph_pointer: false,
            twitter: true,
        }
    },
    {
        name: "Facebook",
        url: "https://facebook.com",
        tests: {
            title: true,
            metadescription: true,
            microdata: true,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            oembed_json_video: false,
            opengraph_pointer: false,
            twitter: false,
            opengraph: true
        }
    },
    {
        name: "Whatsapp",
        url: "",
        tests: {
            title: true,
            metadescription: true,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            oembed_json_video: false,
            twitter: false,
            opengraph: true,
            opengraph_pointer: false,
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
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            twitter: false,
            opengraph: true,
            opengraph_pointer: false
        }
    },
    {
        name: "Telegram",
        url: "",
        tests: {
            title: {
                works: true,
                note: "1"
            },
            metadescription: true,
            microdata: true,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            oembed_json_video: false,
            twitter: true,
            opengraph: true,
            opengraph_pointer: false
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
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: true,
            oembed_json_photo: true,
            oembed_json_rich: true,
            oembed_json_video: true,
            twitter: true,
            opengraph: true,
            opengraph_pointer: false
        }
    },
    {
        name: "Reddit",
        url: "https://www.reddit.com/",
        tests: {
            title: true,
            metadescription: false,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            twitter: false,
            opengraph: {
                works: true,
                note: "4"
            },
            opengraph_pointer: false
        }
    },
    {
        name: "tumblr",
        url: "",
        tests: {
            title: true,
            metadescription: true,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            oembed_json_video: false,
            twitter: false,
            opengraph: true,
            opengraph_pointer: null
        }
    },
    {
        name: "pinterest",
        url: "",
        tests: {
            title: false,
            metadescription: false,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            oembed_json_video: false,
            twitter: false,
            opengraph: true,
            opengraph_pointer: false
        }
    },
    {
        name: "linkedin",
        url: "",
        tests: {
            title: true,
            metadescription: true,
            microdata: true,
            jsonld: true,
            oembed_xml_photo: {
                works: true,
                note: "2"
            },
            oembed_xml_link: true,
            oembed_xml_rich: true,
            oembed_xml_video: true,
            oembed_json_link: true,
            oembed_json_photo: {
                works: true,
                note: "2"
            },
            oembed_json_rich: true,
            oembed_json_video: true,
            twitter: {
                works: true,
                note: "2"
            },
            opengraph: true,
            opengraph_pointer: null
        }
    },
    {
        name: "viber",
        url: "",
        tests: {
            title: true,
            metadescription: false,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            oembed_json_video: false,
            twitter: true,
            opengraph: true,
            opengraph_pointer: null
        }
    },
    {
        name: "line",
        url: "",
        tests: {
            title: true,
            metadescription: true,
            microdata: false,
            jsonld: false,
            oembed_xml_photo: false,
            oembed_xml_link: false,
            oembed_xml_rich: false,
            oembed_xml_video: false,
            oembed_json_link: false,
            oembed_json_photo: false,
            oembed_json_rich: false,
            oembed_json_video: false,
            twitter: true,
            opengraph: true,
            opengraph_pointer: false
        }
    }
]

// var test = {
//     name: "",
//     url: "",
//     tests: {
//         title: null,
//         metadescription: null,
//         microdata: null,
//         jsonld: null,
//         oembed_xml_photo: null,
//         oembed_xml_link: null,
//         oembed_xml_rich: null,
// oembed_xml_video: null,
    //         oembed_json_link: null,
    //         oembed_json_photo: null,
    //         oembed_json_rich: null,
    //oembed_json_video: null,
//         twitter: null,
//         opengraph: null
//     }
// }