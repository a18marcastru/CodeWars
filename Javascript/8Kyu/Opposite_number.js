function opposite(number) {
    //your code here
    return -number;
}
  
var number = Math.floor((Math.random() * 10) + 1);
var res = "";

res = opposite(number);
  
console.log(res);