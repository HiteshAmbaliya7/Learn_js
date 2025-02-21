//  simple structur of do...while loop.
// do...while loop is exit control loop. it means if given condition true or false but loop run once.
// first run body of loop and then condition check.
// it must end with ;(semicolon).
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

