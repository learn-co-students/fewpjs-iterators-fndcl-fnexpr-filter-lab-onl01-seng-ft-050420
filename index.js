// Code your solution here
function findMatching(drivers, name){
  let new_drivers = drivers.filter( driver => {
    return driver.toUpperCase() === name.toUpperCase();
    });
    return new_drivers
}

function fuzzyMatch(drivers, name){
  let new_drivers = drivers.filter( driver => {
    return driver.slice(0, name.length) === name;
    });
    return new_drivers
  
}

function matchName(drivers, name){
  let new_drivers = drivers.filter( driver => {
    return driver.name === name;
    });
    return new_drivers
}