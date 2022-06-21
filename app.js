function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('price isnt valid')
    }

    const vat = 1.17 //maam
    const total = (price * vat).toFixed(2)
    return Number(total);
}

// function generateId() {
//     const time = new Date().getTime()
//     return Math.floor(Math.random() * time)
// }

class Product {
    constructor(price, name, image, description) {
        this.price = price
        this.name = name
        this.image = `https://cdn.pixabay.com/photo${image}`
        this.description = description
        this.id = this.generateId()
    }
    generateId() {
        const time = new Date().getTime()
        return Math.floor(Math.random() * time)
    }

    getPrice() {
        return `$${addTax(this.price)}`
    }

    getName() {
        return this.name
    }
    getImg() {
        const IMG_PATH = 'https://cdn.pixabay.com/photo'
        return `${this.image}`
    }
    getDescription() {
        return this.description
    }
    getId() {
        return this.id
    }
}

const products = [
    new Product(
        15,
        'yellow cheese',
        '/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        'great product really!'
    ),
    new Product(
        3,
        'ice cream',
        '/2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        'be carefull - very cold!'
    ),
    new Product(
        5,
        'aaaa',
        '/2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        'aaaaaaaaaaaa'
    ),
]


function searchProduct() {
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
                console.log(product.getImg());
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
console.log(products);
