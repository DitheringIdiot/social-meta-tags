const tags = [
    { name: "metadescription", title: "Meta Description", shortName: "meta description" },
    { name: "opengraph", title: "Facebook Open Graph", shortName: "Open Graph" },
    { name: "opengraph_pointer", title: "Open Graph Pointer", shortName: "Open Graph Pointer" },
    { name: "twitter", title: "Twitter Card", shortName: "Twitter Card" },
    { name: "microdata", title: "Schema.org Microdata", shortName: "microdata" },
    { name: "jsonld", title: "Schema.org JSON-ld", shortName: "JSON-ld" },
    { name: "oembed_xml_rich", title: "oEmbed Rich XML Format", shortName: "Rich" },
    { name: "oembed_xml_photo", title: "oEmbed Photo XML Format", shortName: "Photo" },
    { name: "oembed_xml_video", title: "oEmbed Video XML Format", shortName: "Video" },
    { name: "oembed_xml_link", title: "oEmbed Link XML Format", shortName: "Link" },
    { name: "oembed_json_rich", title: "oEmbed Rich JSON format", shortName: "Rich" },
    { name: "oembed_json_photo", title: "oEmbed Photo JSON format", shortName: "Photo" },
    { name: "oembed_json_video", title: "oEmbed Video JSON format", shortName: "Video" },
    { name: "oembed_json_link", title: "oEmbed Link JSON format", shortName: "Link" }
]

// findCombinations() Code Taken from here:
// https://js-algorithms.tutorialhorizon.com/2015/10/23/combinations-of-an-array/

// const findCombinations = (arr) => {

//     let i, j, temp
//     let result = []
//     let arrLen = arr.length
//     let power = Math.pow
//     let combinations = power(2, arrLen)

//     for (i = 0; i < combinations; i++) {
//         temp = []

//         for (j = 0; j < arrLen; j++) {
//             // & is bitwise AND
//             if ((i & power(2, j))) {
//                 temp.push(arr[j])
//             }
//         }

//         result.push(temp)
//     }

//     return result
// }

// const combos = findCombinations(tags)


// let combinations = []

// combos.forEach(combo => {
//     let obj = {}

//     combo.forEach(item => {
//         obj[item.name] = true
//     })

//     obj.text = combo.map(item => item.title).join(', ')
//     obj.slug = combo.map(item => item.name).join('-')

//     if (!combo.length) {
//         obj.text = 'nothing'
//         obj.slug = 'nothing'
//     }

//     if (combo.some(item => item.oembed)) {
//         oEmbedTypes.forEach(type => {
//             let newObj = JSON.parse(JSON.stringify(obj))
//             newObj.oembedType = type
//             newObj.text += `| ${type}`
//             newObj.slug += `-${type}`
//             combinations.push(newObj)
//         })
//     } else {
//         combinations.push(obj)
//     }
// })

// Creates a list of just the tag names
// const types = tags.map(tag => tag.name)

// const resultsTable = [
//     { name: 'title', title: '<title>' },
//     { name: 'metadescription', title: 'meta desc.' },
//     { name: 'microdata', title: 'microdata' },
//     { name: 'jsonld', title: 'json-ld' },
//     { name: 'oembed_xml_link', title: 'Link' },
//     { name: 'oembed_xml_photo', title: 'Photo' },
//     { name: 'oembed_xml_video', title: 'Video' },
//     { name: 'oembed_xml_rich', title: 'Rich' },
//     { name: 'oembed_json_link', title: 'Link' },
//     { name: 'oembed_json_photo', title: 'Photo' },
//     { name: 'oembed_json_video', title: 'Video' },
//     { name: 'oembed_json_rich', title: 'Rich' },
//     { name: 'twitter', title: 'Twitter Card' },
//     { name: 'opengraph', title: 'Open Graph' },
//     { name: 'opengraph_pointer', title: 'Open Graph Pointer' }
// ]



module.exports = tags