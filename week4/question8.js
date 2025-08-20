function countDigits(num) {
  num = Math.abs(num); 
  if (num === 0) return 1;
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
let number = 12345;
console.log(`Number of digits in ${number} is ${countDigits(number)}`);