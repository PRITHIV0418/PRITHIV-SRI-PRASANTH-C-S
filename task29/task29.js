console.log("Program Start");

// After 2 seconds
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

// Counter every 1 second
let i = 1;
setInterval(() => {
    console.log("Count:", i);
    i++;
}, 1000);

console.log("Program End");