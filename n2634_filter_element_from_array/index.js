
const filter = (arr, fn) => {
    const result = []

    if (arr && arr.length > 0) {
        arr.forEach((n, i) => {
            if (fn(n, i)) {
                result.push(n);
            }
        })
    }

    return result;
};


console.log(filter(arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }))
console.log(filter(arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }))
console.log(filter(arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }))