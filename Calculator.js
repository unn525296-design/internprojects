function calculate(operator){

    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let result;
    if(isNaN(num1)||isNaN(num2)){

        alert("Please enter the valid number !!!!");
        return result;
    }
    if(operator==="+"){

        result=num1+num2;

    }else if (operator==="-"){

        result=num1-num2;

    }
    else  if(operator==="."){

        result=num1*num2;

    }
    else  if(operator==="/"){

        result=num1/num2;

    }
    else if(operator==="/"){
        if(num2===0){
            alert("cannot divide by 0")
            return;
        }
        result=num1/num2;
    }

    else{

        alert("Invalid Operator!");
        return;
    }
    document.getElementById("result").innerText="Result "+result;


}