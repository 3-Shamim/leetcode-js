const timeLimit1 = (fn, t) => {
    return async (...args) => {


        let i = 0;

        const interval = setInterval(async () => {

            if (i > t) {
                // clearInterval(interval);
                return Promise.reject("Time Limit Exceeded");
            }

            i++;
        }, 1)

        const res = await fn(...args)

        // clearInterval(interval);

        return res;

    }
};

const timeLimit = (fn, t) => {
    return async (...args) => {
        return new Promise((resolve, reject) => {

            const timeOut = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args).then(res => {
                clearTimeout(timeOut);
                resolve(res)
            }).catch(err => {
                clearTimeout(timeOut);
                reject(err)
            });

        })
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).then(console.log).catch(console.log) // "Time Limit Exceeded" at t=100ms

const limited1 = timeLimit(async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
}, 50);
limited1(5).then(console.log).catch(console.log)

const limited2 = timeLimit(async () => { throw "Error"; }, 1000);
limited2([]).then(console.log).catch(console.log)
