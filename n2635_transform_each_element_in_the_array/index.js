
const map = (arr, fn) => {
    return arr.map((...args) => fn(...args))
};


console.log(map(arr = [1,2,3], fn = function plusone(n) { return n + 1; }))
console.log(map(arr = [1,2,3], fn = function plusI(n, i) { return n + i; }))