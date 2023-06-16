/*new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists
clear()	Removes all elements from a Set
forEach()	Invokes a callback for each element
values()	Returns an Iterator with all the values in a Set
keys()	Same as values()
entries()	Returns an Iterator with the [value,value] pairs from a Set*/
var team=new Set(["aravind","dinu","gopi","vicky"])
team.add("vicky")
team.add("er")
console.log(team)
var t=Array.from(team)
t.sort();
console.log(t);