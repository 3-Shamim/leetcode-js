var curry = function(fn) {

    var a = [];

    return function curried (...args) {

        a = [...a, ...args]

        return curried;

    };
};


function sum(a, b) { return a + b; }
const csum = curry(sum);
csum(1)(2) // 3
