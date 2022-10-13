const removeFromArray = function(array, ...items) {
    let removalValue ;

    for (let i = 0; i < items.length; i++) {
        removalValue = items[i];
        
        array = array.filter(item => item !== removalValue)
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
