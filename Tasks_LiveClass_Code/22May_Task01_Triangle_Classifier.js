
let a = 5;
let b= 5;
let c = 5;

switch (true)
{
  case (a === b && b === c):
    
      console.log("This is Equilateral ");
      break;
    

    case (a === b || b === c || c === a):
    
     console.log(" This is Isosceles");
     break;
    

  default:
     console.log("This is Scalene");

}

