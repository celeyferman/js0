const myMath = {
    add: function () {
        let sum = 0;
        for (const n of arguments) {
            sum = sum + n;
        }
        return sum;
    },
    mul: function () {
        let result = 1;
        for (const n of arguments) {
            result = result * n;
        }
        return result;
    },
    fact: function (num) {
        let result = num;
        for (let i = 0; i < num; i++) {
            result = result + i;
        }
        return result;
    }
}

console.log(myMath.add (1, 2, 3));
console.log(myMath.mul (1, 2, 3));
console.log(myMath.fact (3));