//1-Program

const add = (x = 3, y = 5) => {


    return x + y;

}
const product = (z = 4, p = 5) => {
    return z * p;
}

console.log(add(5, 15), product(6, 10));
console.log(add(7), product(9, 5));
console.log(add(), product())

//2-Program

const callSomeone=(person = someone())=> {
    return person;
  }
  
  let numberOfTimesCalled = 0
  function someone() {
    numberOfTimesCalled += 1
    return numberOfTimesCalled
  }
  
  console.log(callSomeone())  
  console.log(callSomeone())  
 
//3-Program

function wishing(name, greeting, message = greeting + ' ' + name) {
    return [name, greeting, message]
  }
  
  console.log(wishing('Ieshan', 'Hi'))                    
  console.log(wishing('Ieshan', 'Hi', 'Happy Birthday!') )
