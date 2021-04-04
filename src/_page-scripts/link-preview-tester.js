const checkboxEls = document.querySelectorAll("input[type='checkbox']")
const urlEl = document.getElementById('url')

let baseUrl = 'https://getoutofmyhead.dev/link-preview-test/'
let url = ''
let randomNumber = Math.random().toString(36).substr(2, 8)
let checkedValues = []


const updateUrl = () => {
    url = baseUrl + randomNumber + '/' + checkedValues.join('/')
    urlEl.innerText = url
}


const toggleValue = (event) => {
    let value = event.target.id
    if (event.target.checked && !checkedValues.includes(value)) {
        checkedValues.push(value)
    } else if (!event.target.checked && checkedValues.includes(value)) {
        checkedValues.indexOf(value)
        if (index !== -1) {
            checkedValues.splice(index, 1)
        }
    }

    updateUrl()
}


for (var i = 0; i < checkboxEls.length; i++) {
    checkboxEls[i].addEventListener("change", toggleValue)
}