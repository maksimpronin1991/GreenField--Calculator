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
        console.log(calcInput.value)
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
        const result = Function('"use strict";return (' + calcInput.value + ')')();
        calcInput.value = result;
        isResultDisplayed = true;
    } catch (error) {
        calcInput.value = result;
        isResultDisplayed = true;
    }
});






