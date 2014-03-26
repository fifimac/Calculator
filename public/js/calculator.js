var Calculator = (function() {
    return {
        calculate: function(x,y,operator) {
             var x = parseInt(x);
             var y = parseInt(y);
             var operator = operator;
             if (isNaN(x) == true) {
                throw new Error ("Not a number");
            }

            console.log(x);
            console.log(y);
            console.log(operator);
            
            if (operator === "x"){
              number = x * y;
            } 
            else if (operator === "+"){
              number = x + y;
            } 
            else if (operator === "-"){
               number = x - y;
            } else if (operator === "/"){
              number = x/y;
            }  
            console.log(number);
             return number;
            
        }
    }
}())