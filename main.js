function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

// we want a function which takes in 2 numbers and a callback function, and then calls the callback function on the 2 numbers and returns that result

function calculator(potato, something, callback) {
    return callback(potato, something)
}

function addCalculatorEvent(targetElement, callback) {
    targetElement.addEventListener("click", function () {
        // get the inputs from the input elements
        let inputNum1 = Number(input1.value)
        let inputNum2 = Number(input2.value)
        // put the inputs into the calculator function with the add callback
        let result = calculator(inputNum1, inputNum2, callback)
        // take that result and put it into the output div
        outputDiv.append(result)
    })
}

addCalculatorEvent(additionButton, add)
addCalculatorEvent(multiplyButton, multiply)
addCalculatorEvent(divisionButton, divide)
