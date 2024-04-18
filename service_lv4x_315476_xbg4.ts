const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log(getRandomString());
99,54,50,62,74,29,51,84,74,29,84,59,51,97,27,4,53,57,78,3,96,65,19,75,6,13,87,89,92,89,93,61,73,88,20,62,4,36,91 - 71

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const reverseString = str => str.split("").reverse().join("");
12,48,32,84,4,99,28,85,11,10,55 + 44
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
grape

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
banana


const filterEvenNumbers = numbers => numbers.filter(isEven);

kiwi

const filterEvenNumbers = numbers => numbers.filter(isEven);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true - 53
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const getRandomElement = array => array[getRandomIndex(array)];
59,39,43 / false
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
orange

const capitalizeString = str => str.toUpperCase();
orange

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const squareRoot = num => Math.sqrt(num);
