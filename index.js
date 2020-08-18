// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toUpperCase() === name.toUpperCase()
    })
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.startsWith(query)
    })
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name.match(name)
    })
}