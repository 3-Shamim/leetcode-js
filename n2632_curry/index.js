var curry1 = function (fn) {

    var a = [];

    return function curried(...args) {

        a = [...a, ...args]

        if (a.length >= fn.length) {
            return fn(...a);
        }

        return curried;

    };
};

const curry = (fn) => {

    const a = [];

    return curried = (...args) => {

        a.push(...args)

        if (a.length >= fn.length) {
            return fn(...a);
        }

        return curried;

    };
};


function sum(a, b) {
    return a + b;
}

const csum = curry(sum);
console.log(csum(1)(2)) // 3
