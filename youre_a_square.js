var isSquare = function(n){
  return(n === (Math.floor(n**0.5)**2) ? true : false);
}


// arrow function version
const isSquare = n => {n === Math.floor((n**0.5)**2) ? true : false};


// mod. solution
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}


// integer testing solution
const isSquare = n => Number.isInteger(Math.sqrt(n));
