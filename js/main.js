const calcInputButton = document.querySelector(".calculator__key--clear")
const keyButtons = document.querySelectorAll(".calculator__key");
const calcInput = document.querySelector(".calculator__input");

keyButtons.forEach(key => {
    key.addEventListener("click", () => {
        calcInput.value += key.textContent;
    });
});

calcInputButton.addEventListener("click", () => {
    calcInput.value = "";
});


