/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = (fn, t) => {

    let timeOutId;

    return (...args) => {

        if (timeOutId) {
            clearTimeout(timeOutId);
            timeOutId = setTimeout(() => {
                fn(...args)
            }, t);
        } else {
            timeOutId = setTimeout(() => {
                fn(...args)
            }, t);
        }

    }
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
