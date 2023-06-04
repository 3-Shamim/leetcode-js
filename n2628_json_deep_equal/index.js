/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */

const areDeeplyEqual = (o1, o2) => {



    if (o1 instanceof Array && o2 instanceof Array) {

        if (o1.length !== o2.length) {
            return false;
        }

        for (let i = 0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) {
                return false;
            }
        }

        return true;
    }

    if (!(o1 instanceof Object) && !(o2 instanceof Object)) {
        return o1 === o2;
    }

    if (o1 instanceof Array && o2 instanceof Object) {
        return false;
    }

    if (o1 instanceof Object && o2 instanceof Array) {
        return false;
    }

    if (o1 instanceof Object && o2 instanceof Object) {

        let keys1 = Object.keys(o1);
        let keys2 = Object.keys(o2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (!areDeeplyEqual(o1[key], o2[key])) {
                return false;
            }
        }

        return true;
    }

    return false;
};

console.log(areDeeplyEqual({"x": 1, "y": 2}, {"x": 1, "y": 2}))
console.log(areDeeplyEqual({"y": 2, "x": 1}, {"x": 1, "y": 2}))
console.log(areDeeplyEqual({"x": null, "L": [1, 2, 3]}, {"x": null, "L": ["1", "2", "3"]}))
console.log(areDeeplyEqual(true, false))
console.log(areDeeplyEqual([1, 2, 3], [1, 2, 3]))
console.log(areDeeplyEqual([1, 2, 3], ["1", "2", "3"]))
console.log(areDeeplyEqual(1, 1))
console.log(areDeeplyEqual("1", "1"))
console.log(areDeeplyEqual(null, null))
console.log(areDeeplyEqual({"0": 1}, [1]))
console.log(areDeeplyEqual([[[[[[{"y": 2, "x": 1}]]]]]], [[[[[[{"x": 1, "y": 2}]]]]]]))
console.log(areDeeplyEqual([1, 2, 3], [3, 2, 1]))
