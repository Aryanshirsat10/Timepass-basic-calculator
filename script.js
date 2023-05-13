function updateDisplay(buttonValue) {
    const displayElement = document.getElementById("screen-value"); // Replace "display" with the ID of your div element
    const currentText = displayElement.textContent;
    const newText = currentText + buttonValue;
    displayElement.textContent = newText;
  }

  function clearDisplay() {
    const displayElement = document.getElementById("screen-value"); // Replace "display" with the ID of your div element
    displayElement.textContent = "";
  }

  function backspace() {
    const displayElement = document.getElementById("screen-value"); // Replace "display" with the ID of your div element
    let currentValue = displayElement.textContent;
    displayElement.textContent = currentValue.slice(0, -1);
  }
  
  function calculate() {
    const displayElement = document.getElementById("screen-value");
    const expression = displayElement.textContent;
    const result = eval(expression);
    displayElement.textContent = result;
  }
  
  const equalsButton = document.getElementById("equals");
  equalsButton.addEventListener("click", calculate);




