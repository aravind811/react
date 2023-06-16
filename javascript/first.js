var players= new WeakSet()
players.add("aravind")
players.add("virat")
console. log(players)
let x = 9.656;

console.log(x.toExponential(2));
x.toExponential(4);
x.toExponential(6);
const y=12;
console.log(y+10)
let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  animal.__proto__=rabbit;
  //rabbit.__proto__ = animal;
  console.log(Number(animal.jumps))