const person = {
    fullName: function(ipl, country) {
      return this.firstName + " " + this.lastName + "  played for" + city + "and" + country;
    }
  }
  
  const person1 = {
    firstName:"virat",
    lastName: "kohli"
  }
  
 console.log(person.fullName.call(person1, ["rcb", "india"]));
  
