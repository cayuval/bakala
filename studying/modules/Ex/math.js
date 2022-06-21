function sum(num1,num2){
    return num1+num2
}
function random(num1,num2){
    return Math.random()
}
function prcentage(number1,number2){
    const divide = number1/number2
    return `${divide*100}%`
}

export{
    sum,
    random,
    prcentage
}