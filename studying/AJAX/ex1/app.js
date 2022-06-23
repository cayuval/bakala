fetch('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
fetch(`https://picsum.photos/500/300?random=1`
)
    .then(function (response) {
        console.log(response);
        document.getElementById('my-img').src = response.url
    })
    .catch(function (error) {
        console.log(error);
    })