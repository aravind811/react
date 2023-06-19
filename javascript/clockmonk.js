var nam=document.getElementById("accna")

function mainFunction(callback) {
   
    setTimeout(function() {
      callbackFunction("aravind");
    }, 1000);
  }function callbackFunction(nam) {
    alert("hi "+nam )
    //console.log("name is  " + name);
  }

function display2(nam) {
    alert("welcome "+NamedNodeMap)
    
}
const element= document.getElementById("checkIn")
element.addEventListener("click", mainFunction(callbackFunction(nam)));
 var display=()=>{alert("hi "+ nam)}
var checkIn=()=>{
   var loginTime= new Date().getTime()
} 
var checkOut=()=>{var logoutTime=new Date().getTime()}
var workingHrs=()=>{
    var wh=logoutTime-loginTime}
var displayWorkingHrs=()=>{document.getElementById("demo").innerHTML = "wh";}