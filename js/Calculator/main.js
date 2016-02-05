var buttons = document.getElementsByClassName("btn");
var operators = ["+","-","x","÷"];
var decimalAdded = false;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function(e) {
    var input = document.querySelector(".screen");
    var inputValue = input.innerHTML;
    var btnValue = this.innerHTML;

    if(btnValue === "C") {
      input.innerHTML = "";
      decimalAdded = false;
    }
    else if(btnValue === "=") {
      if(inputValue !== "") {
        var equation = inputValue;
        var lastCharInput = equation[equation.length-1];
        if(operators.indexOf(lastCharInput) !== -1 || lastCharInput === ".") {
          equation = equation.replace(/.$/,"");
        }
        equation = equation.replace(/x/g,"*").replace(/÷/g, "/");
        input.innerHTML = eval(equation);
      }
    }
    else if (operators.indexOf(btnValue) !== -1) {
      if( (inputValue !== "" && operators.indexOf(inputValue[inputValue.length-1]) === -1)
           || (inputValue === "" && btnValue === "-") ) {
        input.innerHTML += btnValue;
      }
    }
    else if (btnValue === ".") {
      if(!decimalAdded) {
        input.innerHTML += btnValue;
        decimalAdded = true;
      }
    }
    else {
      if (inputValue !== "" && operators.indexOf(inputValue[inputValue.length-1]) !== -1) {
        decimalAdded = false;
      }
      input.innerHTML += btnValue;
    }
  }
}
