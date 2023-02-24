const fibonacci = function(a) {
    let arr = [0,1];
    let fib = 0;
    if (a < 0) {
        return "OOPS";
    }
    a = +a
    if (a === 0) {
        return fib;
    }
    if (a === 1) {
        return arr[1];
    }
    for (let i = 2; i <= a; i++) {
        fib = arr[i - 1] + arr[i - 2];
        arr.push(fib);
    }
    return arr[a];
};

// Do not edit below this line
module.exports = fibonacci;
