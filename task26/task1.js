const original = [1, 2, 3];

// Copy array
const copy = [...original];

// Modify copy
copy.push(4);

console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]