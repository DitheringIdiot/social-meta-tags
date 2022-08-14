const checkboxEls = document.querySelectorAll("input[type='checkbox']")
const urlEl = document.getElementById('url')

let baseUrl = 'https://getoutofmyhead.dev/link-preview-test/'
let randomNumber = Math.random().toString(36).substr(2, 8)


function updateURL () {

    const values = []

    for (var i = 0; i < checkboxEls.length; i++) {
        if(checkboxEls[i].checked){
            values.push(checkboxEls[i].id)
        }
    }

    urlEl.innerText = baseUrl + randomNumber + '/' + values.join('/')
}


for (var i = 0; i < checkboxEls.length; i++) {
    checkboxEls[i].addEventListener("change", updateURL)
}