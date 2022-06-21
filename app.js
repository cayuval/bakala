import { products } from './products.js'
console.log(products);

// option1 for search
// document.getElementById('searchButton').addEventListener('click', searchProduct)
// function searchProduct() {
//     const userSearch = document.getElementById('searchInput').value.trim();
//     const searchResult = products.filter(product => {
//         return product.name.toLowerCase().includes(userSearch.toLowerCase())
//     })//brings an Object from The array!!!
//     console.log(userSearch);
//     console.log(searchResult);
//     displayProduct(searchResult)
// }

// option2 for search
window.searchProduct = function(){
        const userSearch = document.getElementById('searchInput').value.trim();
    const searchResult = products.filter(product => {
        return product.name.toLowerCase().includes(userSearch.toLowerCase())
    })//brings an Object from The array!!!
    console.log(userSearch);
    console.log(searchResult);
    displayProduct(searchResult)
}
function getTotalProduct(productsData) {
    return productsData.length
}

function getProductsTemplate(productsData) {
    // at the beginning there was nothing
    let html = ''
    // same thing for all pictures...
    const IMG_PATH = 'https://cdn.pixabay.com/photo'//configuration

    // runs on the specific specified array and craeting an html for all products together
    productsData.forEach(product => {
        html += `<div class="card" style="margin:5px;width: 18rem;">
                    <img src="${product.getImg()}" class="card-img-top" alt="${product.getDescription()}">
                    <div class="card-body">
                        <h5 class="card-title">${product.getName()}</h5>
                        <p class="card-text">${product.getPrice()}</p>
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                </div>`;
    })
    // return the html block
    return html
}

function displayProduct(productsData = products) {
    // catch container
    const container = document.getElementById('products-container')
    // getting HTML template for the products
    const productHtml = getProductsTemplate(productsData)
    // inject the template to the container
    container.innerHTML = productHtml;
    // catch total products template and inject the number of object
    document.getElementById('toatal-products').innerHTML = `(${getTotalProduct(productsData)})`
}

displayProduct(products)

