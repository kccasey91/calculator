function userInput() {
    let num1 = null;
    let num2 = null;
    let op = '';
    let inputArr = [];
    const operators = /[+\-*/%&|<>!^~?:]/g; 
    const outPut = document.querySelector('.output');
    const inputBtns = document.querySelectorAll('.button');

    inputBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            let cpuInput = event.target.textContent;

            if (cpuInput === 'CLEAR') {
                inputArr = [];
                outPut.textContent = '';
                num1 = num2 = null;
                op = '';
                return;
            }

            if (operators.test(cpuInput)) {
                if (num1 === null) {  
                    num1 = parseInt(inputArr.join(''));  
                } else {
                    num2 = parseInt(inputArr.join(''));
                    if (!isNaN(num2)) { 
                        let result = operate(num1, num2, op);
                        num1 = result; // Store result as next num1
                        outPut.textContent = result; 
                    }
                    num2 = null;
                }

                op = cpuInput;  
                outPut.textContent = `${num1} ${op}`;  
                inputArr = [];
                return;
            }

            if (cpuInput === '=') {
                num2 = parseInt(inputArr.join(''));
                if (!isNaN(num2)) {
                    let result = operate(num1, num2, op);
                    num1 = result;
                    outPut.textContent = result; 
                }
                inputArr = [];
                return;
            }

            inputArr.push(cpuInput);
            outPut.textContent = inputArr.join('');
        });
    });
}



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

userInput();
