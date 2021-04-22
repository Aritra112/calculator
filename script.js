function sin(){
    var x=document.getElementById("result").value;
    document.getElementById("result").value=Math.sin(x);
}
function cos(){
    var x=document.getElementById("result").value;
    document.getElementById("result").value=Math.cos(x);
}
function tan(){
    var x=document.getElementById("result").value;
    document.getElementById("result").value=Math.tan(x);
}
function BACKSPC(){
    var a= document.getElementById("result").value;
    document.getElementById("result").value= a.substr(0, a.length-1);
}
function square(){
    document.getElementById("result").value=Math.pow( document.getElementById("result").value, 2);
}
function qubbed(){
    document.getElementById("result").value=Math.pow( document.getElementById("result").value, 3);
}
function sqrt2(){
    document.getElementById("result").value=Math.pow( document.getElementById("result").value, 1/2);
}
function sqrt3(){
    document.getElementById("result").value=Math.pow( document.getElementById("result").value, 1/3);
}
function number(val){
    document.getElementById("result").value += val;
    console.log(val);
}
function clr(){
    document.getElementById("result").value = " ";
}
function solve(){
    var x=document.getElementById("result").value;
    var y=eval(x)
    document.getElementById("result").value = y;
}
function per(){
    var str=document.getElementById("result").value;
    var result=str.split("%");
    console.log(result);

    var p=result[0];
    var n=result[1];
    var rs=(n/100)*p;
    document.getElementById("result").value=rs;
}