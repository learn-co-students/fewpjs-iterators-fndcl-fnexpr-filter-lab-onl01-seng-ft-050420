function findMatching(arr,str){
    let lowerStr = str.toLowerCase()
    let match = arr.filter(n => {
       return n.toLowerCase() === lowerStr 
    });
    return match 
};

function fuzzyMatch(arr,str){
    let splitz = str.split("")
    let match = arr.filter(n => {
        return n.split("")[0] === splitz[0]
    });
    return match 
};

function matchName(arr,str){
    let match = arr.filter(n => {
        return n.name.split("")[0] === str.split("")[0]
    });
    return match;
}
