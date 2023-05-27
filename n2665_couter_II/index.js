let createCounter = (init) => {

    let _init = init;

    return {
        increment: () => ++init,
        reset: () => init = _init,
        decrement: () => --init
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

