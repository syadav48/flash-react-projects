function greet(greeting){
    return function (name){
        return `${greeting} ${name}`
    }
}
const greetHello = greet('Welcome')
console.log(greetHello('Anil'));


