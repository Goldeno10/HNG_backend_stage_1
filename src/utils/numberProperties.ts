// check if a number is prime
export function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// check if a number is perfect
export function isPerfect(num: number): boolean {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

// check if a number is armstrong
export function isArmstrong(num: number): boolean {
  const digits = num.toString().split("");
  const n = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Number(digit) ** n, 0);
  return sum === num;
}

// check if a number is odd
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

// check if a number is even
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

// check if a number is a palindrome
export function isPalindrome(num: number): boolean {
  return num.toString() === num.toString().split("").reverse().join("");
}

// check if a number is a perfect square
export function isPerfectSquare(num: number): boolean {
  return Math.sqrt(num) % 1 === 0;
}

// check if a number is a perfect cube
export function isPerfectCube(num: number): boolean {
  return Math.cbrt(num) % 1 === 0;
}

// check if a number is a fibonacci number
export function isFibonacci(num: number): boolean {
  return isPerfectSquare(5 * num ** 2 + 4) || isPerfectSquare(5 * num ** 2 - 4);
}

// get digit sum of a number
export function digitSum(num: number): number {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}
