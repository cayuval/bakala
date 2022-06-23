fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        console.log(response);
         return response.json()})
    .then(json => {
        console.log(json);
    })

function getMyData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            document.getElementById('the-div').innerHTML = response
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })

}

document.getElementById('the-button').addEventListener('click', getMyData)