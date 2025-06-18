const btn_numbers = document.querySelectorAll(".number");
const btn_operator = document.querySelectorAll(".operator");
const btn_decimal = document.querySelector("#decimal_point");
const btn_clear = document.querySelector("#clear");
const btn_equal = document.querySelector("#equal");
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");

let currentInput = ''; //O número que o usuário está digitando no momento ou o resultado da última operação.
let previousInput = '';//O primeiro número de uma operação.
let operator = ''; //Qual operação matemática (+, -, x, ÷) foi selecionada pelo usuário.
let resultDisplayed = false; //indica se o número que está no display no momento é o resultado de um cálculo anterior.
let resultado = 0;

btn_clear.addEventListener("click",(event)=>{
    display.value = ''
    currentInput = ''
    previousInput = ''
})

btn_decimal.addEventListener("click",(event)=>{
    if(currentInput == ''){
        currentInput = '0.'
        display.value = currentInput
    }
    else if(currentInput !== '' && !currentInput.includes(".")){
        currentInput += '.'
        display.value = currentInput
    }
})

btn_numbers.forEach((element) => {
    element.addEventListener("click", (event) => {
        if(resultDisplayed === true){
            display.value = ''
            currentInput =''
            resultDisplayed = false
        }
        currentInput += event.target.textContent;
        if (previousInput !== '' && operator !== '') { //caso esteja digitando o segundo numero,após o operador
            display.value = `${previousInput} ${operator} ${currentInput}`;
        }
        else { //caso esteja digitando o primeiro numero
            display.value = currentInput;
        }
    });
});

btn_operator.forEach((element) =>{
    element.addEventListener("click",(event)=>{
        if(previousInput == '' && currentInput !== ''){
            previousInput = currentInput
            operator = event.target.textContent 
            currentInput = ''
            display.value = previousInput + ' ' + operator
        }
        
    })

})

btn_equal.addEventListener("click",(event)=>{
    if(previousInput !== '' && operator !== '' && currentInput !==''){
        if(operator == "+"){
            resultado = parseFloat(currentInput) + parseFloat(previousInput)
            display.value = resultado
            currentInput = resultado.toString()
            previousInput = ''
            operator = ''
        }
        if(operator == "-"){
            resultado = parseFloat(previousInput) - parseFloat(currentInput) 
            display.value = resultado
            currentInput = resultado.toString()
            previousInput = ''
            operator = ''
        }
        if(operator == "x"){
            resultado = parseFloat(currentInput) * parseFloat(previousInput)
            display.value = resultado
            currentInput = resultado.toString()
            previousInput = ''
            operator = ''
        }
        if(operator == "÷"){
            resultado = parseFloat(previousInput) / parseFloat(currentInput) 
            display.value = resultado
            currentInput = resultado.toString()
            previousInput = ''
            operator = ''
        }
        resultDisplayed = true;
    }
})
