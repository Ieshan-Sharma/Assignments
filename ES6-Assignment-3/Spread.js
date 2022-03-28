//1-Program

let array1=[9,8,7,6,5];
let array2=[4,3,2,1,0];
let array3=[...array1 , ...array2];
console.log(array3)

//2-Program

let position =['Major','Captain','Colonel'];
const getPosition=(p1,p2,p3)=>{
    console.log(`Positions:${p1},${p2},${p3}`);
}
getPosition(...position);

//3-Program

    
var object1 ={id:1,name:'Ieshan Sharma'};
var object2 ={age:23,country:"India"};
var employee = {...object1,...object2};
console.log(employee);

//4-Program

let players=["Dhoni","Virat","Rohit"];
let oldPlayers =["Sachin",...players];
console.log(oldPlayers);