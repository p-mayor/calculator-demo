// 2 number input elements
let input1 = document.createElement("input")
input1.type = "number"

let input2 = document.createElement("input")
input2.type = "number"

let bodyElement = document.querySelector("body")
bodyElement.append(input1, input2)

// 3 button elements (1 for addition, multiplication, and division)

let additionButton = document.createElement("button")
additionButton.append("add")
bodyElement.append(additionButton)

let multiplyButton = document.createElement("button")
multiplyButton.append("multiply")
bodyElement.append(multiplyButton)

let divisionButton = document.createElement("button")
divisionButton.append("divide")
bodyElement.append(divisionButton)

// an output div
let outputDiv = document.createElement('div')
bodyElement.append(outputDiv)