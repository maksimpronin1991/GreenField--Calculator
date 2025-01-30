const calcInputButton = document.querySelector(".calculator__key--clear")
const operationsButtons = document.querySelectorAll(".calculator__key--operator");
const keyButtons = document.querySelectorAll(".calculator__key");
const calcInput = document.querySelector(".calculator__input");
const backButton = document.querySelector(".calculator__key--backspace");
const equalButton = document.querySelector(".calculator__key--equal");

let isResultDisplayed = false;

keyButtons.forEach(key => {
    key.addEventListener("click", () => {
        if (isResultDisplayed && key.classList.contains("calculator__key--numbers")) {
            calcInput.value = "";
            isResultDisplayed = false;
        }
        calcInput.value += key.textContent;
    });
});

operationsButtons.forEach(operation => {
    operation.addEventListener("click", () => {
        isResultDisplayed = false
    });
});


calcInputButton.addEventListener("click", () => {
    calcInput.value = "";
    isResultDisplayed = false;
});

backButton.addEventListener("click", () => {
    calcInput.value = calcInput.value.slice(0, -2);
});

equalButton.addEventListener("click", () => {
    try {
        if (calcInput.value.includes("%")) {
            let expression = calcInput.value;
            let operator = expression.match(/[-+*/]/)[0];
            let [firstNumber, secondNumber] = expression.split(operator);

            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);

            let result;
            if (operator === '+') {
                result = firstNumber + (firstNumber * (secondNumber / 100));
            } else if (operator === '*') {
                result = firstNumber * (secondNumber / 100);
            } else if (operator === '/') {
                result = firstNumber / (100 / secondNumber);
            } else if (operator === '-') {
                result = firstNumber - (firstNumber * (secondNumber / 100));
            }

            calcInput.value = result;
        } else {
            const result = Function('"use strict";return (' + calcInput.value + ')')();
            calcInput.value = result;
        }
        isResultDisplayed = true;
    } catch (error) {
        calcInput.value = "Error";
        isResultDisplayed = true;
    }
});






