const email= document.getElementById("email")
const btn1= document.getElementById("submit")
const place=document.getElementById("demo")
function display(){
    place.innerHTML=  email.v
}














document.getElementById('details').addEventListener('submit', function() {
    // Get the value of the name field.
    var email = document.getElementById('inputEmail').value;
    var inputAddress = document.getElementById("inputAddress").value;

    console.log(email)

    // Save the name in localStorage.
    localStorage.setItem('address',inputAddress)
    localStorage.setItem('email', email);
  });


var ename = localStorage.getItem('email');

  if (name != "undefined" || name != "null") {
    document.getElementById('demo').innerHTML = "Hello " + ename + "!";
  } else
    document.getElementById('demo').innerHTML = "Hello!";