//1-Program
var employee={
    'name':"Ieshan",
    'role':"ASE",
    'place':"Jaipur"
}
var name = employee.name;
var role = employee.role;
console.log(name,"-",role);

//2-Program
var employee={
    'name':"Ieshan",
    'role':"ASE",
    'place':"Jaipur"
}
var {name,role}= employee;
console.log(name,"-",role);

//3-Program

var employee={
    'firstName':"Ieshan",
    'lastName':"Sharma"
}
var {firstName,lastName,fullName=`${firstName} ${lastName}`}= employee;
console.log(fullName);

//4-Program

var employee={
    'name':"Ieshan",
    'role':"ASE",
    'place':"Jaipur"
}
var {place:home}= employee;
console.log(home);

//5-Program
var employee = { 
    'name': 'Ieshan',
    'address': 'Mahesh Nagar',
    'age': 22,
    'department':{
        'name': 'ASE',
        'Shift': 'Morning',
        'address': {
            'city': 'Rajasthan',
            'street': 'Roopnagar',
            'zip': 302015
        }
    }
}

let {department} = employee;
console.log(department);