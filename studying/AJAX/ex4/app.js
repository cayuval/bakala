fetch('http://127.0.0.1:5500/studying/AJAX/ex4/users.json')
.then(response=>response.json())
.then(json=>{
    let table = document.getElementById('the-table')
    json.forEach(user => {
        table.innerHTML+=
        `<tr>
        <td>${user.userName}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.Email}</td>
        </tr>`
    });
})