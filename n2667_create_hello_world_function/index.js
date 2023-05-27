const createHelloWorld = () => {
    return () => "Hello World"
};

const createHelloWorld1 = () => {
    return function (...args) {
        return "Hello World"
    }
};

const f = createHelloWorld();
console.log(f()); // "Hello World"