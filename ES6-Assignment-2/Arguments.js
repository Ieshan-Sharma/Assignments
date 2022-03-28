//1-Program

function friends(p1,p2,p3) {
    console.log(arguments[2]);
  
  
    console.log(arguments[0]);
  
  
    console.log(arguments[1]);
  
  }
  
  friends("Ieshan", "Abhishek", "Sudhanshu");
  
  //2-Program
  function myConcat(combine) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(combine);
  }
  console.log(myConcat(', ', 'captain', 'major', 'colonel'));
  
  
  console.log(myConcat('; ', 'Sachin', 'Rohit', 'Dhoni', 'Virat'));
  
  
  console.log(myConcat('. ', 'Messi', 'Ronaldo', 'Neymar', 'Chettri', 'Ramos'));