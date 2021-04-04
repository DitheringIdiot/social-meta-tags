const tags = [
    { name: "metadescription", title: "Meta Description" },
    { name: "microdata", title: "Schema.org Microdata" },
    { name: "jsonld", title: "Schema.org JSON-ld" },
    { name: "opengraph", title: "Facebook Open Graph" },
    { name: "opengraph_pointer", title: "Open Graph Pointer" },
    { name: "twitter", title: "Twitter Card" },
    { name: "oembed_rich_xml", title: "oEmbed Rich XML Format" },
    { name: "oembed_photo_xml", title: "oEmbed Photo XML Format" },
    { name: "oembed_video_xml", title: "oEmbed Video XML Format" },
    { name: "oembed_link_xml", title: "oEmbed Link XML Format" },
    { name: "oembed_rich_json", title: "oEmbed Rich JSON format" },
    { name: "oembed_photo_json", title: "oEmbed Photo JSON format" },
    { name: "oembed_video_json", title: "oEmbed Video JSON format" },
    { name: "oembed_link_json", title: "oEmbed Link JSON format" }
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