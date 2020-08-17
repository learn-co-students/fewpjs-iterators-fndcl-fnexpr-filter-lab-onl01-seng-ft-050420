
const findMatching = (drivers, string) => drivers.filter( d => d.toLowerCase() === string.toLowerCase());
const fuzzyMatch = (drivers, string) => drivers.filter( d => d.slice(0, string.length) === string);
const matchName = (drivers, string) => drivers.filter( d => d.name === string);
