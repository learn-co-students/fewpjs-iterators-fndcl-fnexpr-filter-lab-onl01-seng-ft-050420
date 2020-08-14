function findMatching(drivers, string) {
    return drivers.filter(function(driver) { return driver.toUpperCase() === string.toUpperCase() });
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        let numSlice = string.length;
        return driver.slice(0, numSlice).toUpperCase() === string.toUpperCase();
    })
}

function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.name === string
    })
}