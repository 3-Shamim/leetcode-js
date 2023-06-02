let promisePool = async (functions, n) => {

    const next = async (fn) => {
        await fn();
        if (functions.length) await next(functions.shift())
    }

    await Promise.all(functions.splice(0, n).map(fn => next(fn)))

};

const sleep = (t) => new Promise(res => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1)
    .then(console.log) // After 900ms
