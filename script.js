"use strict";

let inputVal = document.querySelector(".value");
let numButtons = document.querySelectorAll(".num");
let equalToButton = document.querySelector(".equal");

Array.from(numButtons).forEach((num) => {
    num.addEventListener("click", (event) => {
        let buttonValue = event.target.textContent
        inputVal.value  += buttonValue;
        if (buttonValue == 'C') {
            inputVal.value = ''
        }

        equalToButton.addEventListener("click", () => {
            try {
                if (eval(inputVal.value) === undefined) {
                    return inputVal.value = ''
                }

                inputVal.value = eval(inputVal.value);  

            } catch (error) {
                alert(`Can't Calculate of Ivalid Values:  ${inputVal.value}`)
                return inputVal.value = ''
                
            }
        });
        
    });
    
});

