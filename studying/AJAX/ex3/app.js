fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let strHtml = '<ul>'
        json.forEach(user => {
            strHtml += `<li>${user.title}</li>`
        });
        strHtml += `</ul>`
        document.querySelector('ul').innerHTML = strHtml
    })

