const memoize = (fn) => {

    const map = {}

    return (...args) => {

        const _args = JSON.stringify(args);

        const cache = map[_args];

        if (cache === undefined) {
            const result = fn(...args)
            map[_args] = result
            return result;
        } else {
            return cache;
        }
    }
}

let callCount = 0;

const memoizedFn = memoize((a, b) => {
    callCount += 1;
    return a + b;
})

console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5

console.log(callCount) // 1
