let arr = [5, 10, 15, 20];


let doubled = arr.map(n => n * 2);
console.log(doubled);


let even = arr.filter(n => n % 2 === 0);
console.log(even);

let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum); 

let first = arr.find(n => n > 10);
console.log(first);


let hasValue = arr.includes(10);
console.log(hasValue); 