"use strict"

const clr = () => {
    document.getElementById('textVal').value = "";
}

const calculate = () => {
    let inputVal = document.getElementById('textVal').value;
    let computeVal;
    computeVal = eval(inputVal);
    document.getElementById('textVal').value = computeVal;
}

const display = (val) => {
    document.getElementById('textVal').value += val;
}