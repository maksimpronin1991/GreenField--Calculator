const calcInputButton = document.querySelector(".calculator__key--clear")
const keyButtons = document.querySelectorAll(".calculator__key");
const calcInput = document.querySelector(".calculator__input");
const backButton = document.querySelector(".calculator__key--backspace");
const equalButton = document.querySelector(".calculator__key--equal");

keyButtons.forEach(key => {
    key.addEventListener("click", () => {
        calcInput.value += key.textContent;
        console.log(calcInput.value)
    });
});

calcInputButton.addEventListener("click", () => {
    calcInput.value = "";
});

backButton.addEventListener("click", () => {
    calcInput.value = calcInput.value.slice(0, -2);
});

equalButton.addEventListener("click", () => {
  
    try {
        const result = eval(calcInput.value);
        calcInput.value = result;
    } catch (error) {
        calcInput.value = result;
    }
 
});






