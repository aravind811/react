function mainFunction(callback) {
    console.log("whats ur name");

    setTimeout(function() {
      callback("aravind");
    }, 1000);
  }
   
  // Define the callback function
  function callbackFunction(name) {
    console.log("name: " + name);
  }
   
  // Call the main function with the callback function
  mainFunction(callbackFunction);