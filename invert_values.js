function invert(array) {
   return array.map(a => -1 * a);
}


// using direct negative of a
function invert(array) {
   return array.map( a => a === 0 ? a : -a);
}


// arrow function version
const invert = array => array.map(a => -a);
