// variables that cant be changed
//create a program to calculate a circumference of a circle give  radius

const pi = 3.14159;
let radius;
let circumference;
//pi = 66; results to an error coz the pi cant be changed

//radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);
circumference = 2*pi*radius;

document.getElementById("MySubmit").onclick = function(){
   radius = document.getElementById("MyText").value;
   radius = Number(radius);
   circumference = 2*pi*radius;
   console.log(circumference);
   //document.getElementById("MyH3").textContent = `The circumference of your circle  is ${circumference} cm`; alt 2
  // document.getElementById("MyH3").textContent = circumference +'cm'; alt 2
    
}