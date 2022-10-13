const repeatString = function(str, num) {
    concatString = "";

    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            concatString = concatString.concat(str);    
        }
    }

    return concatString;
};

// Do not edit below this line
module.exports = repeatString;
