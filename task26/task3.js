const student = {
  name: "Prithiv",
  marks: [80, 90, 85]
};

// Destructuring
const { name: studentName, marks } = student;

// Spread (copy marks)
const newMarks = [...marks];

// Rest function
function average(...nums) {
  let total = nums.reduce((sum, n) => sum + n, 0);
  return total / nums.length;
}

console.log(`${studentName}'s Average: ${average(...newMarks)}`);