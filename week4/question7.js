const prompt = require("prompt-sync")(); 
function fibonacciSeries(n) {
  let series = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    series.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return series;
}
let n = parseInt(prompt("Enter the number of terms: "));

if (isNaN(n) || n <= 0) {
  console.log("Please enter a positive integer.");
} else {
  console.log(`Fibonacci series up to ${n} terms:`);
  console.log(fibonacciSeries(n).join(", "));
}