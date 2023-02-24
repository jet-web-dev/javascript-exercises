const findTheOldest = function(objArr) {
    const thisYear = new Date().getFullYear();

    const oldSort = objArr.sort((a, b) => {
        const lastGuy = (a.yearOfDeath || thisYear) - a.yearOfBirth;
        const nextGuy = (b.yearOfDeath || thisYear) - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
      })
    
    return oldSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
