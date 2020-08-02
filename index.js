// Code your solution here
function findMatching(arr, str) {
  return arr.filter(name => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arr, str) {
  return arr.filter(name => name.slice(0, str.length) === str);
}

function matchName(arr, str) {
  return arr.filter(obj => obj.name === str);
}