const powerCurried = (base) => (exponent) => Math.pow(base, exponent)

const square = powerCurried(5)
const cube = powerCurried(10)

console.log(square(2))
console.log(cube(3))

function powerCurried2(base, exponent){
    return Math.pow(base, exponent)
}

console.log(powerCurried2(5, 3));
