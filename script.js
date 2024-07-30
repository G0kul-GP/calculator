let val="";
function out(a){
    val+=a;
    document.querySelector(".output").value=val;

}
function outp(){
    document.querySelector(".output").value=eval(val);
    val=eval(val);

}
function clear(){
    val='';
    document.querySelector(".output").value=val;
 

}