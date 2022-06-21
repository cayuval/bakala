class Cat{
    constructor(colorOfCat,age){
        this.color = colorOfCat;
        this.age = age
    }

    printColor(){
        return `Hello My Cat is ${this.color}.`
    }

    sayMeyaho(){
        return `meyahu`
    }
}

const brownCat = new Cat(`brown`,2)
console.log(brownCat.printColor());
console.log(brownCat.age);


const blueCat = new Cat(`blue`,2)
console.log(blueCat.printColor());
console.log(blueCat.age);