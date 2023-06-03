var TimeLimitedCache = function () {

    this.pair = {}

};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {

    var data = this.pair[key];

    if (data !== undefined) {

        clearTimeout(data.timeoutId);
        const timeoutId = setTimeout(() => {
            delete this.pair[key];
        }, duration)

        this.pair[key] = {value, timeoutId};
        return true;
    }

    const timeoutId = setTimeout(() => {
        delete this.pair[key];
    }, duration)

    this.pair[key] = {value, timeoutId};

    return false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    var data = this.pair[key];
    if (data) {
        return data.value;
    }
    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return Object.values(this.pair).length;
};

// Your TimeLimitedCache object will be instantiated and called as such:
var obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)) // 42
console.log(obj.count()) // 1

var obj1 = new TimeLimitedCache()
console.log(obj1.count()) // null
console.log(obj1.set(1, 42, 1000)); // false
console.log(obj1.get(1)) // 42
console.log(obj1.count()) // 1
console.log(obj1.get(1)) // -1