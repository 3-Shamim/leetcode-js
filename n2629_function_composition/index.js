const compose1 = (functions) => {
    return (x) => {

        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }

        return x;
    }
};

const compose = (functions) => {
    return (x) => functions.reduceRight((ac, fun) => fun(ac), x)
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9