
let input = document.getElementById("calculator-input");
let inputBtns = document.querySelectorAll("[data-input-btn]");
let equalBtn = document.querySelector("[data-btn='equal']");
let inputVal = "";
let numbers = /[0-9]/gm;
let firstVal = "";
let secondVal = "";

for (const btn of inputBtns) {
    btn?.addEventListener("click", e => {
        inputVal += btn.textContent;
        input.value = inputVal;
        switch (btn.textContent) {
            case "/":
                // firstVal = inputVal.slice(0, inputVal.indexOf(/[+/*-]/gm));
                // secondVal = inputVal.slice(inputVal.indexOf(/[+/*-]/gm));
                if (Array.from(inputVal).includes(btn.textContent)) {
                    btn.setAttribute("disabled", "disabled");
                }
                console.log(firstVal, secondVal);
                break;
            case "*":
                // firstVal = inputVal.slice(0, inputVal.indexOf(/[+/*-]/gm));
                // secondVal = inputVal.slice(inputVal.indexOf(/[+/*-]/gm));
                if (Array.from(inputVal).includes(btn.textContent)) {
                    btn.setAttribute("disabled", "disabled");
                }
                console.log(firstVal, secondVal);
                break;
            case "-":
                // firstVal = inputVal.slice(0, inputVal.indexOf(/[+/*-]/gm));
                // secondVal = inputVal.slice(inputVal.indexOf(/[+/*-]/gm));
                if (Array.from(inputVal).includes(btn.textContent)) {
                    btn.setAttribute("disabled", "disabled");
                }
                console.log(firstVal, secondVal);
                break;
            case "+":
                // firstVal = inputVal.slice(0, inputVal.indexOf(/[+/*-]/gm));
                // secondVal = inputVal.slice(inputVal.indexOf(/[+/*-]/gm));
                if (Array.from(inputVal).includes(btn.textContent)) {
                    btn.setAttribute("disabled", "disabled");
                }
                console.log(firstVal, secondVal);
                break;

            default:
                break;
        }
    });
}