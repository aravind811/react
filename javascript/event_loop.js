const seconds = new Date().getTime() / 1000;
const sec2=new Date().getTime() / 1000 - seconds

setTimeout(() => {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 500);

while (true) {
  if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("looped for 2 seconds");
    break;
  }
}
