const tags = [
    { name: "metadescription", title: "Meta Description" },
    { name: "microdata", title: "Schema.org Microdata" },
    { name: "jsonld", title: "Schema.org JSON-ld" },
    { name: "opengraph", title: "Facebook Open Graph" },
    { name: "twitter", title: "Twitter Card" },
    { name: "oembed_xml", title: "oEmbed XML format", oembed: true },
    { name: "oembed_json", title: "oEmbed JSON format", oembed: true }
]

const oEmbedTypes = [
    "rich", "photo", "video", "link"
]

// findCombinations() Code Taken from here:
// https://js-algorithms.tutorialhorizon.com/2015/10/23/combinations-of-an-array/

const findCombinations = (arr) => {

    let i, j, temp
    let result = []
    let arrLen = arr.length
    let power = Math.pow
    let combinations = power(2, arrLen)

    for (i = 0; i < combinations; i++) {
        temp = []

        for (j = 0; j < arrLen; j++) {
            // & is bitwise AND
            if ((i & power(2, j))) {
                temp.push(arr[j])
            }
        }

        result.push(temp)
    }

    return result
}

const combos = findCombinations(tags)


let combinations = []

combos.forEach(combo => {
    let obj = {}

    combo.forEach(item => {
        obj[item.name] = true
    })

    obj.text = combo.map(item => item.title).join(', ')
    obj.slug = combo.map(item => item.name).join('-')

    if (!combo.length) {
        obj.text = 'nothing'
        obj.slug = 'nothing'
    }

    if (combo.some(item => item.oembed)) {
        oEmbedTypes.forEach(type => {
            let newObj = JSON.parse(JSON.stringify(obj))
            newObj.oembedType = type
            newObj.text += `| ${type}`
            newObj.slug += `-${type}`
            combinations.push(newObj)
        })
    } else {
        combinations.push(obj)
    }
})

// Creates a list of just the tag names
const types = tags.map(tag => tag.name)



const tagData = {
    combinations,
    types,
    tags
}



module.exports = tagData