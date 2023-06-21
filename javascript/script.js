var email= document.getElementById("inputEmail")
var address=document.getElementById()
const formDetails = document.getElementById("details");
   formDetails.addEventListener("submit", display=(ev) => {
      ev.preventDefault();
      var email = document.getElementById("inputEmail").value;
      var inputAddress = document.getElementById("inputAddress").value;
      const place=document.getElementById("demo")
      const place2=document.getElementById("demo2")
      place.innerHTML=  email
      place2.innerHTML=inputAddress})
      formDetails.addEventListener("reset")
      window.onload = function() {

        // Check for LocalStorage support.
        if (localStorage) {
      
          // Add an event listener for form submissions
          document.getElementById('details').addEventListener('submit', function() {
            // Get the value of the name field.
            var email= document.getElementById('inputEmail').value;
            var inputAddress = document.getElementById("inputAddress").value;
      
            // Save the name in localStorage.
            localStorage.setItem('email', email);
            localStorage.setItem('address',inputAddress)
          });
      
        }
      
      }
