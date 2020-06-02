
const URL = 'https://jsonplaceholder.typicode.com/users'

let btn = document.getElementById("load-data")
let p = document.getElementById("output")

btn.addEventListener('click', function () {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
       p.innerHTML = xhr.response
    }

    xhr.open('GET', URL)

    xhr.send()
})