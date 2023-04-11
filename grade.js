//grade checker


function grade(){
  let grade = prompt("Enter your grade");
  if (grade >= 90 && grade <= 100) {
    confirm("A");
    } else if (grade >= 80 && grade <= 89) {
      confirm("B");
    } else if (grade >= 70 && grade <= 79) {
    confirm("C");
    } else if (grade >= 60 && grade <= 69) {
      confirm("D");
    } else {
      confirm("E");
    }
    
}


//leap year checker


function Leap(){

  let year = prompt("Enter a year");
  if(year%4==0){
  confirm("This is leap year")}
  else if (year%4!=0){
    confirm("This is not a leap year")
  }
  else{
  confirm("invalid input");
  }

}

//integer checker

function number(){
  let number = prompt("Enter tour number");
  if(number>0){
  confirm("This is a positive number")}
  else if (number<0){
  confirm("This is a negative number")}
  else{
    confirm("this is zero")
  }

}
// length checker

function length(){
  let string = prompt("Enter the string");
  if(string.length<5){
    confirm("Short string")}
  else if (string.length>=5 && string.length <=10){
    confirm("Medium string")
  }
  else if (string.length>10){
    confirm("Long string")
  }

  
}

//login access
function login(){
  let username = prompt("Enter your Username");
  let password = prompt("Enter your password");

  if(username== "nelson" && password== 1111){
    confirm("Access granted");
  }
  else{
    confirm("Access denied");
  }
}