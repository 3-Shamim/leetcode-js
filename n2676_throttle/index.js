/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const throttle1 = (fn, t) => {

    let remainingArgs;
    let rfn;
    let count = 0;

    return async (...args) => {

        const delay = () => {
            return new Promise(res => setTimeout(async () => {
                let _fn = rfn;
                rfn = null;
                if (_fn) {
                    res(_fn(...remainingArgs))
                    await delay();
                } else {
                    count--;
                }
            }, t))
        }

        if (count === 0) {
            fn(...args);
            count++;
            await delay();
        } else {
            remainingArgs = args;
            if (!rfn) {
                rfn = fn;
            }
        }

    }
};

const throttle = (fn, t) => {

    let remainingArgs;
    let rfn;
    let count = 0;
    let timeoutId;

    return async (...args) => {

        const wait = () => {
            timeoutId = setTimeout(() => {

                if (rfn) {
                    rfn(...remainingArgs);
                    rfn = null;
                    clearTimeout(timeoutId);
                    wait();
                } else {
                    count--;
                }

            }, t)
        }

        if (count === 0) {
            fn(...args);
            count++;
            wait();
        } else {
            remainingArgs = args;
            if (!rfn) {
                rfn = fn;
            }
        }

    }
};

const throttled = throttle(console.log, 100);
throttled("log"); // logged immediately.
throttled("log"); // logged at t=100ms.
