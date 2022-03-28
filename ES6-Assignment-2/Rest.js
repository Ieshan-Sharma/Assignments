//1-Program

const myFruits = (good, best, ...betterFruitsArgs) => {
    console.log("good:", good);
    console.log("best:", best);
    console.log("betterFruits:", betterFruitsArgs);
}
myFruits("Papaya", "Orange", "Apple", "Mango", "DragonFruit");

//2-Program


const array = (...theArgs) => {
    let sortedArray = theArgs.sort();
    return sortedArray;
}
console.log(array(9, 4, 1, 0, 5, 7));

//3-Program

const multiply = (product, ...theArgs) => {
    return theArgs.map(number => {
        return product * number
    })
}
let sum = multiply(5, 13, 30, 60, 90);
console.log(sum);