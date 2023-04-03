
let input = document.getElementById("calculator-input");
let inputNumbers = document.querySelectorAll("[data-input-btn='number']");
let inputOperators = document.querySelectorAll("[data-input-btn='operator']");
let equalBtn = document.querySelector("[data-btn='equal']");
let inputVal = "";
let symbolsReg = /[-+*/]/gm;

console.log(inputNumbers, inputOperators);

for (const btn of inputNumbers) {
    btn?.addEventListener("click", e => {
        inputVal += btn.textContent;
        input.value = inputVal;
    })
}

for (const btn of inputOperators) {
    btn?.addEventListener("click", e => {
        inputVal += btn.textContent;
        input.value = inputVal;
    })
}

equalBtn?.addEventListener("click", e => {
    let operatorIndex = inputVal.search(symbolsReg);
    let firstVal = inputVal.substring(0, operatorIndex);
    let secondVal = inputVal.substring(operatorIndex + 1);
    let operator = inputVal[operatorIndex];
    console.log(inputVal, operatorIndex, firstVal, secondVal, operator);

    switch (operator) {
        case "*":
            input.value = Number(firstVal) * Number(secondVal);
            break;
        case "+":
            input.value = Number(firstVal) + Number(secondVal);
            break;
        case "-":
            input.value = Number(firstVal) - Number(secondVal);
            break;
        case "/":
            input.value = Number(firstVal) / Number(secondVal);
            break;
        default:
            break;
    }
});