const screenContainer = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
  const value = button.textContent;

  if (value === "CLEAR") {
    calculation = [];
    screenContainer.textContent = "0";
  } else if (value === "=") {
    console.log(calculation);
    console.log(eval(accumulativeCalculation))
    screenContainer.textContent = (eval(accumulativeCalculation))
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screenContainer.textContent = accumulativeCalculation;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});
