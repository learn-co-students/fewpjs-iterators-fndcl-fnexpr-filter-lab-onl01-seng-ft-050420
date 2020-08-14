// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(function(driver){
       return driver.toLowerCase().startsWith(name.toLowerCase())
    })
}

function matchName (drivers, name) {
    return drivers.filter(function(obj) {
        return obj.name === name
    })
}