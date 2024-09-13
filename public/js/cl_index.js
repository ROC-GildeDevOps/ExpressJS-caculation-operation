const baseUrl = "http://127.0.0.1:5000";
const advancedUrl = baseUrl + "/";

let continueCalculation = true;

while (continueCalculation) {
  const num1 = getNumber("Enter first number: ");
  const operation = getOperation();
  const num2 = getNumber("Enter second number: ");
  const result = calculate(num1, num2, operation);
  console.log(`Result: ${result}`);

  continueCalculation = confirm("Do you want to perform another calculation?");
}

function getNumber(text) {
  const number = parseFloat(prompt(text));
  if (isNaN(number)) {
    console.error("Invalid number. Please enter a valid number.");
    getNumber(text);
  } else {
    return number;
  }
}

function getOperation() {
  const validOperations = ["+", "-", "*", "/"];
  var operation = prompt(`Please choose your operation ${validOperations}`);

  if (validOperations.includes(operation)) {
    return operation;
  } else {
    console.error(`Invalid operation. Please enter one of ${validOperations}.`);
    return getOperation();
  }
}

function calculate(num1, num2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.error("Cannot divide by zero.");
        return "undefined";
      }
      result = num1 / num2;
      break;
    default:
      console.error("Invalid operation.");
      return null;
  }
  console.log(`${num1} ${operation} ${num2} = ${result}`);
  return result;
}
