function mainFunction(callback) {
    console.log("whats ur name");

    setTimeout(function() {
      callback("aravind");
    }, 1000);
  }
   
  // Define the callback function
  function callback(name) {
    console.log("name is  " + name);
    
      callback2("santhosh")
    }
  
   function callback2(name){
    console.log("name is "+name)
    
      callback3("sara")
   
    function callback3(name){
      console.log("name is "+name)

    }
   }
  // Call the main function with the callback function
  mainFunction(callback);
  