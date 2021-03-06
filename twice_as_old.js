function twiceAsOld(dadYearsOld, sonYearsOld) {
  let result = 0;
  while(true){
    if ( ((dadYearsOld + result) / (sonYearsOld + result)) > 2 ) {
      result++;
    } else if ( ((dadYearsOld + result) / (sonYearsOld + result)) < 2 ) {
      result--;
    } else {
      break
    }
  }
  return Math.abs(result);
}


// add other solutions

// easy math solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// arrow function math solution
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
