// input will be a string that contains numbers (could have padded zeros) 
// the input string should be returned incremented by 1
//  - the number at the right end should be increased by 1
//  - if padded by zeros, this should be the same in output
//  - if there is no number in the input, a 1 should be appended
// examples:
//  - foo -> foo1
//  - foobar23 -> foobar24
//  - foo0042 -> foo0043
// pseudocode:
//  first loop over string
//  for i..n in string
//   check if/where the first number is
//   if no number:
//    return string + 1
//   else is number:
//    find out if string is padded
//    if converted number length equals string number length
//     return string + (number as number + 1)
//    else string number is padded
//     return string + (padded number + 1)

function incrementer(str){
  let result, currCharCode, subString, subNumber;
  let lastStringIndex = str.length - 1
  for(let i = 0; i < str.length; i++){
    currCharCode = str[i].charCodeAt();
    if(currCharCode >= 48 && currCharCode <= 57){
      lastStringIndex = i - 1;
      break;
    }
  }
  if(lastStringIndex === (str.length - 1)){
    result = str + 1;
  } else {
    subString = str.substring(0,lastStringIndex + 1);
    subNumber = str.substring(lastStringIndex + 1);
    if(subNumber.length === String(Number(subNumber)).length){
      result = subString + String(Number(subNumber) + 1);
    } else {
      result = subString + String(Number(subNumber) + 1).padStart(subNumber.length, "0");
    }
  }
  return result;
}

// add submitted solution
function incrementString (strng) {
  let result, currCharCode, subString, subNumber;
  let lastStringIndex = strng.length - 1
  for(let i = 0; i < strng.length; i++){
    currCharCode = strng[i].charCodeAt();
    if(currCharCode >= 48 && currCharCode <= 57){
      lastStringIndex = i - 1;
      break;
    }
  }
  if(lastStringIndex === (strng.length - 1)){
    result = strng + 1;
  } else {
    subString = strng.substring(0,lastStringIndex + 1);
    subNumber = strng.substring(lastStringIndex + 1);
    if(subNumber.length === String(Number(subNumber)).length){
      result = subString + String(Number(subNumber) + 1);
    } else {
      result = subString + String(Number(subNumber) + 1).padStart(subNumber.length, "0");
    }
  }
  return result;
}

// other solutions


// regex solution 1
function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}


// regex arrow solution
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)
