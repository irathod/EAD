function factorial(n) {
  if (n < 0) {
    return "Please enter a non-negative number.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
let number = 10; 
console.log(`Factorial of ${number} is ${factorial(number)}`);