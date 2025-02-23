function userInput(){
    let num1, num2, op = '';
    let inputArr = [];
    const operators = /[+\-*/%&|<>!^~?:]/g; 
    const outPut = document.querySelector('.output');
    const inputBtns = document.querySelectorAll('.button');

    inputBtns.forEach(button => {
        button.addEventListener('click', (event) =>{
            let cpuInput = event.target.textContent;
            if(cpuInput === 'CLEAR'){
                inputArr = [];
                outPut.textContent = '';
                num1 = num2 = op = '';
                return;
            }
            if(operators.test(cpuInput)){
                op = cpuInput;
                num1 = parseInt(inputArr.join(''));
                outPut.textContent = `${num1} ${op}`;
                inputArr = [];
                console.log(num1);
                console.log(op);
                return;
            }
            if(cpuInput === '=' ){
                num2 = parseInt(inputArr.join(''));
                let result = operate(num1, num2, op);
                inputArr = [];
                cpuInput = result;
                num1 = result;
            }
            inputArr.push(cpuInput);
            outPut.textContent = inputArr.join('');
        });
    });
};



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
