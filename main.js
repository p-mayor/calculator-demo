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

function calculator(num1, num2, callback) {
    return callback(num1, num2)
}


function addCalculatorEvent(targetElement, callback) {
    targetElement.addEventListener("click", function () {
        // get the inputs from the input elements
        let inputArray1 = input1.value.split(",")
        let inputArray2 = input2.value.split(",")
        // put the inputs into the calculator function with the add callback
        let result = arrayCalculator(inputArray1, inputArray2, callback)
        // take that result and put it into the output div
        let resultDiv = document.createElement('div')
        if(callback === add){
            resultDiv.append("addition: ")
        }else if(callback === multiply){
            resultDiv.append("multiplication: ")
        }else if(callback === divide){
            resultDiv.append("division: ")
        }
        resultDiv.append(result)
        outputDiv.append(resultDiv)
    })
}

addCalculatorEvent(additionButton, add)
addCalculatorEvent(multiplyButton, multiply)
addCalculatorEvent(divisionButton, divide)

function arrayCalculator(array1, array2, callback) {
    let finalArray = []
    for (let i = 0; i < array1.length; i = i + 1) {
        let currentNumber1 = Number(array1[i].split(" ").join(""))
        let currentNumber2 = Number(array2[i].split(" ").join(""))
        let resultNumber = callback(currentNumber1, currentNumber2)
        finalArray.push(resultNumber)
    }
    return finalArray
}


// let testArray = [1,2,3,4,5,6, -1,-5,6]

// function addFive(a){
//     return a + 5
// }

// function isGreaterThan3(a){
//     if(a > 3){
//         return true
//     } else {
//         return false
//     }
// }

// // console.log(testArray.map(addFive))

// console.log(testArray.filter(isGreaterThan3))

// let finalArray = []
// for(let i = 0; i < testArray.length; i=i+1){
//     let currentItem = testArray[i]
//     if(isGreaterThan3(currentItem) === true){
//         finalArray.push(currentItem)
//     }
// }
// console.log(finalArray)