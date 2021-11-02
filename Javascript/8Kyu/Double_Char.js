function doubleChar(str) {
    // Your code here
    let para = [];
    for (let i = 0; i < str.length; i++){
      para.push(str[i]+str[i]);
    }
  return para.join('');
  }
  
  var res = "";
  
  res = doubleChar("Primer");
  
  console.log(res);