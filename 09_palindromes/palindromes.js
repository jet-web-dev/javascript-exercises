const palindromes = function (str) {
    str = str.replace(/[\W_]+/g,"").toLowerCase();
    str2 = str.split("").reverse().join("");
    return str === str2;
};

// Do not edit below this line
module.exports = palindromes;
