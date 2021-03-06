// input should be an integer that indicates the max width of the diamond
// return is the diamond itself
// example:
// 5 ->
//   *
//  ***
// *****
//  ***
//   *
// pseudocode
//  input integer (n) indicates also the number of lines
//  loop i from 1...n
//   determine space padding with max(i, (n-1)/i) - min(i, (n-1)/i)
//   determine the number of asterisks with ((n-1)/2) - n % i)
//   draw the current line

function drawDiamond(n){
  let spacePadding;
  let asteriskNumber;
  let resultDiamond = "";
  for(let i = 1; i < (n+1); i++){
    spacePadding = Math.max(i-1, (n-1)/2) - Math.min(i-1, (n-1)/2);
    //spacePadding = (((n-1)/2) - n % i);
    asteriskNumber = n - spacePadding*2;
    //asteriskNumber = (n % i);
    console.log(spacePadding, asteriskNumber);
    resultDiamond += " ".repeat(spacePadding) + "*".repeat(asteriskNumber) + "\n";
  }
  return(resultDiamond);
}

// submitted solution
function diamond(n){
  if(!(n & 0x1) || n <= 0){
    return null
  }
  let spacePadding;
  let asteriskNumber;
  let diam = "";
  for(let i = 1; i < (n+1); i++){
    spacePadding = Math.max(i-1, (n-1)/2) - Math.min(i-1, (n-1)/2);
    asteriskNumber = n - spacePadding*2;
    diam += " ".repeat(spacePadding) + "*".repeat(asteriskNumber) + "\n";
  }
  return diam;
}

// other solutions

// different formulation with loop
function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}

// pre-filled array solution
function diamond(n){
  if (n < 0 || !(n % 2)) return null; 
  const middleIndex = Math.floor(n / 2);
  
  return Array.apply(null, {length: n})
      .map((el, index) => {
        const indentation = Math.abs(index - middleIndex);
        const numberOfAsterisks = n - indentation * 2;
        return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
      })
      .join('\n') + '\n';
}

// solution using while loops to fill lines
function diamond(n){
  if (n < 0 || n % 2 == 0) return null;
  for (var i = 0, diamond = ''; i < n; i++) {
    var stars = n - Math.abs(n - 2*i - 1);
    var spaces = (n - stars) / 2;
    while (spaces-- > 0) diamond += ' ';
    while (stars-- > 0) diamond += '*';
    diamond += '\n';
  }
  return diamond;
}
