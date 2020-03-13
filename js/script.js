var calculator = {
    displayVal: 0,
    firstO: 0,
    canBeO: false,
    operator: ""
};


function performOperation(x)
{
    clearDisplay();
    
    if (calculator.operator == "+")
    {
        calculator.displayVal = calculator.firstO.valueOf() + x.valueOf();
        document.getElementsByClassName('inputNumber')[0].value = calculator.displayVal.valueOf();
    }
    
}

function clearDisplay()
{   
    document.getElementsByClassName('inputNumber')[0].value = "";
}

function onReset()
{
    clearDisplay();
}

function onEquals()
{    
    /*
    console.log(calculator.firstO);
    document.getElementsByClassName('inputNumber')[0].value = calculator.displayVal;
    //performOperation(document.getElementsByClassName('inputNumber')[0].value.valueOf());
    */
var input = document.getElementsByClassName("inputNumber")[0].value;
    if (operator == "+")
    {
        calculator.displayVal = calculator.firstO + input;
        input.value = calculator.displayVal;
    }
    else if (operator == "-")
    {
        calculator.displayVal = calculator.firstO - input;
        input.value = calculator.displayVal;
    }
    else if (operator == "*")
    {
        calculator.displayVal = calculator.firstO * input;
        input.value = calculator.displayVal;
    }
    else if (operator == "/")
    {
        calculator.displayVal = calculator.firstO / input;
        input.value = calculator.displayVal;
    }
    document.getElementsByClassName("inputNumber")[0] = calculator.displayVal.value;
}

function onSum()
{
    clearDisplay();

    var input = document.getElementsByClassName("inputNumber")[0].value;
    calculator.firstO = input.value;
    calculator.operator = "+";
}

function onSub()
{
    clearDisplay();

    var input = document.getElementsByClassName("inputNumber")[0].value;
    calculator.firstO = input.value;
    calculator.operator = "-";
}

function onMult()
{
    clearDisplay();

    var input = document.getElementsByClassName("inputNumber")[0].value;
    calculator.firstO = input.value;
    calculator.operator = "*";
}

function onDiv()
{
    clearDisplay();

    var input = document.getElementsByClassName("inputNumber")[0].value;
    calculator.firstO = input.value;
    calculator.operator = "/";
}