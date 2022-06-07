function addTax(price){
    if(!price||price<=0||typeof(price)==='string'){
        throw Error('price isnt valid') 
    }
        const vat = 1.17 //maam
        const total = (price*vat).toFixed(2)
        return Number(total);
}

function generateId(){
    // const random = Math.random();
    // console.log(`rand: ${random}`)
    // const num = random*10000
    // console.log(`num: ${num}`)
    // const floor = Math.floor(num)
    // console.log(`final: ${floor}`)
    // return floor;

    const time = new Date().getTime()
    return Math.floor(Math.random()*time)
}