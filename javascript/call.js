var aravind= {
    fullName: function() {
      return "my idol is "+ this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"virat",
    lastName: "kolhi"
  }
  const person2 = {
    firstName:"cris",
    lastName: "rona"
  }
  console.log(aravind.fullName.call((person2)&&(person1)))