function findMatching(array, string){
    return array.filter(x => x.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
    return array.filter(x => x.charAt(0) === string.charAt(0))
}

function matchName(array, string){
    return array.filter(x => x.name == string)
}
