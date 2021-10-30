function boolToWord(bool){
    //Primera manera
    /*if(bool == true) return "Yes";
    else return "No";*/

    //Segunda manera
    return bool == true ? "Yes" : "No";
}

var bool = true;
var res = "";

res = boolToWord(bool);

console.log(res);