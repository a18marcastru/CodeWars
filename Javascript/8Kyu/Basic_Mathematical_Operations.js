function basicOp(operation, value1, value2, res){
    switch(operation){
        case "+":
        return res = value1 + value2;
        
        case "-":
        return res = value1 - value2;
        
        case "*":
        return res = value1 * value2;
        
        case "/":
        return res = value1 / value2;
        
        default: return 0
    }
  }
  
var res = 0;
  
res = basicOp("+",4,7);
  
console.log(res);