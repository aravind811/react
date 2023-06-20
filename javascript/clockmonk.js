var nam=String(document.getElementById("accna"))
var city=String(document.getElementById("city"))
city.toLowerCase;
var emp=new Map();
emp.set(nam,city);
mapToObject(new Map([nam, city]))
var trichy={
  head:"Dheena",
  message:function(){

    var element=document.getElementById("demo2")
    element.innerHTML="trichy branch doing well under guidance of"+ this.head;
  }
  
}
if(city=="trichy"){

}
function mainFunction(callback) {
   
    setTimeout(function() {
      callbackFunction("aravind");
    }, 2000);
  }function callbackFunction(nam) {
    prompt("hi "+nam )
    //console.log("name is  " + name);
  }

//function display2(nam) {
   // alert("welcome "+nam)
    
//}
const element= document.getElementById("checkIn")
element.addEventListener("click", mainFunction(callbackFunction(nam)));
 //var display=()=>{alert("hi "+ nam)}
var checkIn=()=>{
   var loginTime= new Date().getTime()
} 
var checkOut=()=>{var logoutTime=new Date().getTime()}
var workingHrs=()=>{
    var wh=logoutTime-loginTime}
var displayWorkingHrs=()=>{document.getElementById("demo").innerHTML = "wh";}