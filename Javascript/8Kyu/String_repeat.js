function repeatStr(n,s){
    var s_n = "";
    for(let i = 0;i < n;i++){
        s_n += s;
    }
    return s_n;
}

var s = "a";
var n = 3;
var res = "";

res = repeatStr(n,s);

console.log(res);