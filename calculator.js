function add(number1, number2) {
  return number1 + number2;
}
function subtraction(number1, number2) {
  return number1 - number2;
}
function multiplication(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  if (number2 === 0) {
    return "Error: not divisible";
  }
  return number1 / number2;
}
function handleCalc(opFunction) {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;

  const result = opFunction(number1, number2);

  document.getElementById("calculation-result").textContent = result;
}


document.getElementById("add").addEventListener("click", function () {
  handleCalc(add);
});

document.getElementById("subtract").addEventListener("click", function () {
  handleCalc(subtraction);
});

document.getElementById("divide").addEventListener("click", function () {
  handleCalc(divide);
});
document.getElementById("multiply").addEventListener("click", function () {
  handleCalc(multiplication);
});
