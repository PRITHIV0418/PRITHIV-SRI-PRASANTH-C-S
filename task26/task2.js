// Rest operator collects values into an array
function sumAll(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sumAll(10, 20, 30)); // 60
console.log(sumAll(5, 5));       // 10