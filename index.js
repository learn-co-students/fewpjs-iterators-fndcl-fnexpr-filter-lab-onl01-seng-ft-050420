function findMatching(drivers, name) {
    return drivers.filter(n => {
    return n.toLowerCase() === name.toLowerCase();
    })
};

function fuzzyMatch(drivers, name) {
    return drivers.filter(n => {
    return n[0].toUpperCase() === name[0].toUpperCase();
    })
}

function matchName(drivers, name) {
    return drivers.filter(n => {
    return n.name === name
    })
}