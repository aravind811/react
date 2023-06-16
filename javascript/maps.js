/* maps and sets
new Map()	Creates a new Map object
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
clear()	Removes all the elements from a Map
delete()	Removes a Map element specified by a key
has()	Returns true if a key exists in a Map
forEach()	Invokes a callback for each key/value pair in a Map
entries()	Returns an iterator object with the [key, value] pairs in a Map
keys()	Returns an iterator object with the keys in a Map
values()	Returns an iterator object of the values in a Map*/
var players=new Map([
    ["virat",200],
    ["rohit",100],
    ["dhoni",150]
])
//players.clear();
var bool=players.has("rohit");
players.set("st",300);
players.set("ashwin",50)
players.set("bhuvi",20)
var rohit=players.get("rohit")
console.log(players);
console.log(rohit)
console.log(bool)
 var totalInd=0;
 const arr2= new Map([...players].sort());
 console.log(arr2)
 players.forEach (function(value, key) {
   totalInd=totalInd + value 
 })
console.log(totalInd)
//ar arr=new Array(players.keys.toString)
//arr.sort()
//console.log(arr)
array = Array.from(players, ([name, score]) => ({ name, score }));
console.log(array);
//var food=new WeakMap([players])
//console.log(food)
