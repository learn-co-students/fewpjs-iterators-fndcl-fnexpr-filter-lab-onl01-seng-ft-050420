// Code your solution here

  
function findMatching(drivers, string){
    return drivers.filter( d => 
        d.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, target){
    return drivers.filter( d => 
        d.startsWith(target)
    )
}

function matchName(drivers, target){
    return drivers.filter( d => 
        d.name === target
    )
}