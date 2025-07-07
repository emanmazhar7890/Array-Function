const userName = prompt("Enter Your Name");
const userPassword = prompt("Enter Password");
function login(name, Password) {
  if (userName == name && userPassword == Password) {
    console.log("true");
  } else {
    console.log("false");
  }
}
login("zeeshan@gmail.com", "test123");

let EnterNumber = prompt("Enter a number 1 to 6");
function addition(num1, num2) {
  num1 = Number(prompt("Enter number one"));
  num2 = Number(prompt("Enter number two"));
  let result = num1 + num2;
  return result;
}

function multiplication(num1, num2) {
  num1 = Number(prompt("Enter number one"));
  num2 = Number(prompt("Enter number two"));
  let result = num1 * num2;
  return result;
}
function substract(num1, num2) {
  num1 = Number(prompt("Enter number one"));
  num2 = Number(prompt("Enter number two"));
  let result = num1 - num2;
  return result;
}
function power(num1, num2) {
  num1 = Number(prompt("Enter number one"));
  num2 = Number(prompt("Enter number two"));
  let result = num1 ** num2;
  return result;
}
while (EnterNumber != "7") {
  if (EnterNumber == "1") {
    alert(addition());
  } else if (EnterNumber == "2") {
    alert(multiplication());
  } else if (EnterNumber == "3") {
    alert(substract());
  } else if (EnterNumber == "4") {
    alert(power());
  } else {
    alert("Enter 1 for addition and 2 for multiplication");
  }
  EnterNumber = prompt("Enter a number 1 to 6 (7 to terminate loop)");
}
