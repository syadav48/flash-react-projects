function cycle(...values) {
  let arr = values
  let count = 0
  return function () {
    count = count === arr.length ? 0 : count
    return arr[count++]
  };
}
function cycle2(...values) {
  let index = 0
  return function () {
    const value = values[index]
    index = (index + 1) % values.length
    return value
  };
}
const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOff = cycle("on", "off");
console.log(onOff()); //on 0
console.log(onOff()); // off 1
console.log(onOff()); // pause 2
console.log(onOff()); // on 0

const onOff2 = cycle2("on", "off");
console.log(onOff2()); //on 0
console.log(onOff2()); // off 1
console.log(onOff2()); // pause 2
console.log(onOff2()); // on 0

