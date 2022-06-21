class Vegetable {
    constructor(nameOfVegetable,fresh) {
        this.kind = nameOfVegetable;
        this.fresh = fresh
    }

    printName() {
        let freshHtml = ``
        if(this.fresh){
             freshHtml = `fresh`
        }else{
             freshHtml = `not so fresh...`
        }
        return `Hello I'm ${this.kind} and I'm ${freshHtml}`
    }
}

const carrot = new Vegetable(`carrot`,true)
console.log(carrot.printName());


class Color {
    constructor(nameOfColor) {
        this.nameOfColor = nameOfColor
    }

    printColor() {
        return `I'm ${this.nameOfColor}`
    }
}

const blue = new Color(`blue`)
console.log(blue.printColor());