const output = document.querySelector(".screen");
const buttons = document.querySelector(".buttons");

let firstNumber = "";
let secondNumber = "";
let sign = "";
let over = false;
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const signs = ["/", "x", "+", "-", "+/-", "%"];
buttons.addEventListener("click", (e) => {
  const pushedButton = e.target.textContent;

  if (pushedButton === "AC") clear();

  if (digit.includes(pushedButton)) {
    if (secondNumber === "" && !sign) {
      firstNumber += pushedButton;
      output.textContent = firstNumber;
    } else if (firstNumber !== "" && secondNumber !== "" && over) {
      secondNumber = pushedButton;
      over = false;
      output.textContent = secondNumber;
    } else {
      secondNumber += pushedButton;
      output.textContent = secondNumber;
    }
  }

  if (signs.includes(pushedButton)) {
    sign = pushedButton;
    output.textContent = sign;
  }

  if (pushedButton === "=") {
    if (secondNumber === "") secondNumber = firstNumber;
    switch (sign) {
      case "+":
        firstNumber = Number(firstNumber) + Number(secondNumber);
        break;
      case "-":
        firstNumber = firstNumber - secondNumber;
        break;
      case "x":
        firstNumber = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === "0") {
          output.textContent = "Ошибка";
          firstNumber = "";
          secondNumber = "";
          sign = "";
          return;
        }
        firstNumber = firstNumber / secondNumber;
        break;
    }
    output.textContent = firstNumber;
    over = true;
  }
});
function clear() {
  firstNumber = "";
  secondNumber = "";
  sign = "";
  output.textContent = 0;
}
s;
