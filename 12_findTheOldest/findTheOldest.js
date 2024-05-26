const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestPerson = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentPerson = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestPerson < currentPerson ? current : oldest;
    })

};

// Do not edit below this line
module.exports = findTheOldest;
