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
        return `$${this.price}`
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

export {products}