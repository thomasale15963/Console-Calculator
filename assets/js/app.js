(function init() {
  var selectedOperation = prompt(
    "Please Select Your Operation. \n 1 = Addition \n 2 = Subtraction \n  3 = Multiplication \n  4 = Division \n  5 = Min and Max \n  6 = Square \n  7 = Average"
  );

  switch (selectedOperation) {
    case "1":
      add();
      break;
    case "2":
      subtract();
      break;
    case "3":
      multiply();
      break;
    case "4":
      divide();
      break;
    case "5":
      minAndMax();
      break;
    case "6":
      square();
      break;
    case "7":
      average();
      break;
  }
})();

function add() {
  const userInput = prompt("Enter The Numbers Separated By Space");
  let userValues;
  let sum = 0;
  userValues = userInput.split(" ");

  userValues.forEach(function (value) {
    sum += Number(value);
  });
  console.log("Sum is " + sum);
}
function subtract() {
  const userInput = prompt("Enter The Numbers Separated By Space");
  let userValues;
  userValues = userInput.split(" ");
  let difference = Number(userValues[0]);

  userValues.forEach(function (value, index) {
    if (index === 0) {
    } else {
      difference -= Number(value);
    }
  });
  console.log("Difference is " + difference);
}
function multiply() {
  const userInput = prompt("Enter The Numbers Separated By Space");
  let userValues;
  userValues = userInput.split(" ");
  let product = 1;

  userValues.forEach(function (value) {
    product *= value;
  });
  console.log("Product is " + product);
}
function divide() {
  const userInput = prompt("Enter The Numbers Separated By Space");
  let userValues;
  userValues = userInput.split(" ");
  let dividend = Number(userValues[0]);

  for (let i = 1; i < userValues.length; i++) {
    if (userValues[i] == 0) {
      dividend = "Invalid Input";
      break;
    } else {
      dividend = dividend / Number(userValues[i]);
    }
  }
  console.log("Result is " + dividend);
}
function minAndMax() {
  const userInput = prompt("Enter The Numbers Separated By Space");
  let userValues = userInput.split(" ");
  let min = userValues[0];
  let max = userValues[0];

  userValues.forEach(function (value) {
    //   Check Max
    if (value > max) {
      max = value;
    }
    // Check Min
    if (value < min) {
      min = value;
    }
  });
  console.log("Max : " + max + " and " + "Min : " + min);
}
function square() {
  const userInput = prompt("Enter a number to square");
  let result = userInput ** 2;
  console.log("Square is : " + result);
}
function average() {
  const userInput = prompt("Enter The Numbers Separated By Space");
  let userValues = userInput.split(" ");
  let sum = 0;
  let average;
  userValues.forEach(function (value) {
    sum += Number(value);
  });
  average = sum / userValues.length;
  console.log("Average is : " + average);
}
