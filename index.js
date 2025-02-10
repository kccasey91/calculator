let num1, num2, operator;
let inputArr = [];
const operators = /[+\-*/%=&|<>!^~?:]/g; 

const input = document.querySelector('.input');

const digitBtns = document.querySelectorAll('.button');
digitBtns.forEach(button => {
    button.addEventListener('click', (event) =>{
        inputArr.push(event.target.textContent);
        input.textContent = inputArr.join('');
        if(event.target.textContent == operators){
            console.log(event.target.textContent);
        }
    })
})


function add(a, b){
    return a + b;
};

function sub(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
}

function operate(a, b, op){
    if(op === '+') return add(a, b);
    if(op === '-') return sub(a, b);
    if(op === '*') return multiply(a, b);
    if(op === '/') return divide(a, b);
}

