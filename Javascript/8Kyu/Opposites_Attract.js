function lovefunc(flower1, flower2){
    if((flower1%2==0 && flower2%2==0)||(flower1%2!=0 && flower2%2!=0))return false;
    else return true;
  }
  
  var flow1 = Math.floor((Math.random() * 5) + 1);
  var flow2 = Math.floor((Math.random() * 5) + 1);
  
  var res = "";
  
  res = lovefunc(flow1,flow2);
  
  console.log(res);