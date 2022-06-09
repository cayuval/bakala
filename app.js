function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('price isnt valid')
    }

    const vat = 1.17 //maam
    const total = (price * vat).toFixed(2)
    return Number(total);
}

function generateId() {
    // const random = Math.random();
    // console.log(`rand: ${random}`)
    // const num = random*10000
    // console.log(`num: ${num}`)
    // const floor = Math.floor(num)
    // console.log(`final: ${floor}`)
    // return floor;

    const time = new Date().getTime()
    return Math.floor(Math.random() * time)
}

const products = [
    {
        id: 1,
        price: 15,
        name: 'Yellow Cheese',
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        description: 'great product really!'
    },
    {
        id: 2,
        price: 3,
        name: 'ice cream',
        image: 'https://cdn.pixabay.com/photo/2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        description: 'be carefull - very cold!'
    } 
]

function displayProduct(){
    const container = document.getElementById('products-container')

    products.forEach(product=>{
        container.innerHTML += `<div class="card" style=" margin:5px; width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.description}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}$</p>
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                </div>`
    })
}
displayProduct()
