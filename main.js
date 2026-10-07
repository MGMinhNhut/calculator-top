function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}
let firstNum = null;
let operator = null;
let secondNum = null;
let op_cnt = 0;
let result = false;
let decimal_cnt = 0;

function operate(a, operator, b){
    if(operator === "+"){
        return add(a, b);
    }
    if(operator ==="-"){
        return subtract(a, b);
    }
    if(operator === "x"){
        return multiply(a, b);
    }
    if(operator === "/"){
        return divide(a, b);
    }
}

const one_btn = document.querySelector(".one");
const two_btn = document.querySelector(".two");
const three_btn = document.querySelector(".three");
const four_btn = document.querySelector(".four");
const five_btn = document.querySelector(".five");
const six_btn = document.querySelector(".six");
const seven_btn = document.querySelector(".seven");
const eight_btn = document.querySelector(".eight");
const nine_btn = document.querySelector(".nine");
const zero_btn = document.querySelector(".zero");
const ac_btn = document.querySelector(".ac");
const delete_btn = document.querySelector(".delete");
const add_btn = document.querySelector(".add");
const subtract_btn = document.querySelector(".subtract");
const multiply_btn = document.querySelector(".multiply");
const divide_btn = document.querySelector(".divide");
const equal_btn = document.querySelector(".equal");
const decimal_btn = document.querySelector(".decimal");
const screen_content = document.createElement("p");
const keyboard_content = document.querySelector("input");
screen_content.classList.add("screen_ctn");
screen_content.textContent = "";

decimal_btn.addEventListener("click", () =>{
    if(decimal_cnt == 0){
        screen_content.textContent += ".";
        decimal_cnt++;
    }
})

one_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }
    screen_content.textContent += '1';
});

two_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }
    screen_content.textContent += '2';
});
three_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }    
    screen_content.textContent += '3';
});
four_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    } 
    screen_content.textContent += '4';
});
five_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }
    screen_content.textContent += '5';
});
six_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }
    screen_content.textContent += '6';
});
seven_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }
    screen_content.textContent += '7';
});
eight_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }
    screen_content.textContent += '8';
});
nine_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }
    screen_content.textContent += '9';
});
zero_btn.addEventListener("click", () => {
    if(result){
        newCalc();
        result = false;
    }
    screen_content.textContent += '0';
});
delete_btn.addEventListener("click", () =>{
    screen_content.textContent = screen_content.textContent.substring(0, screen_content.textContent.length - 1);
});
ac_btn.addEventListener("click", () => {
    screen_content.textContent = "";
    op_cnt = 0;
    result = false;
    decimal_cnt = 0;

});
add_btn.addEventListener("click", () => {
    result = false;
    decimal_cnt = 0;
    screen_content.textContent += "+"
    pairCalc(screen_content.textContent);

})
subtract_btn.addEventListener("click", () => {
    result = false;
    decimal_cnt = 0;
    screen_content.textContent +="-"
    pairCalc(screen_content.textContent);
})
multiply_btn.addEventListener("click", () => {
    result = false;
    decimal_cnt = 0;
    screen_content.textContent += "x";
    pairCalc(screen_content.textContent);
})
divide_btn.addEventListener("click", () => {
    result = false;
    decimal_cnt = 0;
    screen_content.textContent +="/";
    pairCalc(screen_content.textContent);
})
equal_btn.addEventListener("click", () => {
    op_cnt = 0;
    decimal_cnt = 0;
    result = true;
    resultCalc(screen_content.textContent);
})

function pairCalc(string){
    op_cnt++;
    let operator2 = string[string.length-1];
    if(op_cnt >= 2){
        resultCalc(string.substring(0, string.length - 1));
        screen_content.textContent += operator2;
    }
}

function resultCalc(string){
    if(string === "1+1") screen_content.textContent = "Hello, World!";
    else{
        let index = null;
        stringCalc = string;
        for(let i = 0; i < stringCalc.length; i++){
            if(stringCalc[i] == "+" || stringCalc[i] == "-" || stringCalc[i] == "x" || stringCalc[i] == "/"){
                operator = stringCalc[i];
                index = i;
            }
        }
        if(stringCalc.substring(0, index) == "" || stringCalc.substring(index + 1) == ""){
            screen_content.textContent = "Syntax Error!";
        }
        else{
            firstNum = Number(stringCalc.substring(0, index));
            secondNum = Number(stringCalc.substring(index + 1));
            if(secondNum == 0 && operator == "/"){
                screen_content.textContent = "Syntax Error!";   
            }
            else{
                screen_content.textContent = operate(firstNum, operator, secondNum).toString();
            }
        }

    }
}

function newCalc(){
    screen_content.textContent = "";
    op_cnt = 0;   
}

const mainScreen = document.querySelector(".mainScreen");
mainScreen.appendChild(screen_content);
