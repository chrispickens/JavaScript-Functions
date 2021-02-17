var wrapperEle = document.querySelector(".wrapper");
var mpg12Ele = document.querySelector(".mpg12");
var mpg17Ele = document.querySelector(".mpg17");
var mpg26Ele = document.querySelector(".mpg26");
var mpg29Ele = document.querySelector(".mpg29"); 
var submitEle = document.querySelector(".submit");

submitEle.addEventListener("click", function(){
 calculator();
});
                           


function calculator(){
  //this will accept input and output four lines in the document.
  var miles = Number(prompt('How many miles do you drive per year?'));
  var gasCost = Number(prompt('What is the current cost of gas per gallon?'));
  
  mpg12Ele.innerHTML = "To drive a car with an MPG rating of " + 12 + " for " + miles + " at $" + gasCost + " will cost " + ((miles/12) * gasCost) + "."; 

mpg17Ele.innerHTML = "To drive a car with an MPG rating of " + 17 + " for " + miles + " at $" + gasCost + " will cost " + ((miles/17) * gasCost) + "."; 

mpg26Ele.innerHTML = "To drive a car with an MPG rating of " + 26 + " for " + miles + " at $" + gasCost + " will cost " + ((miles/26) * gasCost) + "."; 

mpg29Ele.innerHTML = "To drive a car with an MPG rating of " + 29 + " for " + miles + " at $" + gasCost + " will cost " + ((miles/29) * gasCost) + "."; 
}

calculator();