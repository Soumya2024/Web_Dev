const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('equals');
const clear  = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = flase;
let sign = "";
let resultValue = 0;


for(let i =0; i< numbers.length; i++)
{
    numbers[i].addEventListener('click', (e) => 
    {
        let atr  = e.target.getAttribute('value');
        if(isFirstValue === flase){
            getFirstValue(atr)
        }
    })
}


function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}


function getSecondValue(el) {
    if(firstValue != "" & sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for(let i=0; i<signs.length; i++)
    {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSign();



equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign == "+") {
        resultValue = firstValue + secondValue;
    }
    else if(sign == "-") {
        resultValue = firstValue - secondValue;
    }
    else if(sign == "*") {
        resultValue = firstValue * secondValue;
    }
    else if(sign == "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML  = resultValue;
    firstValue = resultValue;
    secondValue = "";

    checkresults.length();

})

function checkresults() {
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML  = "";
    if(firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }

    result.innerHTML = resultValue;
})