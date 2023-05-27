
const reduce = (nums, fn, init) => {

    if(!nums && nums.length < 1) return init;

    nums.forEach(n => {
        init = fn(init, n);
    })

    return init;
};


console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0))
console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100))
console.log(reduce([], function sum(accum, curr) { return 0; }, 25))