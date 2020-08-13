function findMatching(array, str) {
    return array.filter(driver => driver.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(array, str) {
    return array.filter(driver => driver.slice(0, str.length) === str)
}

function matchName(array, str) {
    return array.filter(driver => driver.name === str)
}