function reverseNumber(num) {
  let reversed = 0;
  let n = Math.abs(num); 
  while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  return num < 0 ? -reversed : reversed; 
}
let number = 123456; 
console.log(`Reversed number: ${reverseNumber(number)}`);