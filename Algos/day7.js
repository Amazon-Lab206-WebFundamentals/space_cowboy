// Get digits

function GetDigits(str){
final = "";
    for(var i=0; i < str.length; i++){
        if(typeof(str[i]) == "number"){
         final = final+str[i];
}
return final;
}
console.log(GetDigits("0s1a3y5w7h9a2t4?6!8>0"));


// Remove Blanks 

function RemoveBlanks(){
    myname ="Jayme"
    sayit=""
    for(var i=0; i<myname.length; i++){
        if(" " == myname[i]){
            sayit += myname[i];        }
    }
    return sayit;
}