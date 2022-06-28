const serverUrl = 'http://127.0.0.1:3000/customers/response'

//get all customers

function getAllCustomers() {
    fetch(`${serverUrl}/get-all-customers.json`,)
        .then(res => res.json())
        .then(customers => {
            let htmlStr = ''
            customers.forEach(customer => {
                htmlStr += `<tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                </tr>`
            });
            document.getElementById('customers-table').innerHTML = htmlStr
        })
        .catch(error => {
            throw Error(error)
        })
    }
    
    document.getElementById('get-all-customers-button').addEventListener('click', getAllCustomers)
    
    //get customer by id
    
    function getCustomerById() {
        const searchTerm = document.getElementById('get-customer-id-field').value
        console.log();
        fetch(`${serverUrl}/get-customer.json?${searchTerm}`)
        .then(res => res.json())
        
        .then(customers => {
            console.log(customers);
            let htmlStr = ''
            customers.forEach(customer => {
                htmlStr += `<tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                </tr>`
            });
            document.getElementById('get-customers-table').innerHTML = htmlStr
        })
        .catch(error => {
            throw Error(error)
        })

}
document.getElementById('get-customers-button').addEventListener('click',getCustomerById)

//Add Customer
function addCustomer(){
    const name = document.getElementById('add-customer-name').value
    const email = document.getElementById('add-customer-email').value
    const data = {name:name.trim(),email:email.trim()}

    fetch(`${serverUrl}/add-customer.json`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    .then(res=>{
        document.getElementById('add-Customer-result').innerHTML = `new customer added ${JSON.stringify(data)}`
    })
    .catch(error=>{
        throw Error(error)
    })
}

document.getElementById('add-customer-button').addEventListener('click',addCustomer)