function alphabetPosition(text) {
  let currLetter, result = [];
  for(let i = 0; i < text.length; i++){
    currLetter = text[i].toUpperCase().charCodeAt()
    if(currLetter > 64 && currLetter < 91){
      result.push(currLetter - 64);
    }
  }
  return(result.join(" "));
}

// other solutions

// regex solution
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}


// regex arrow function
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');


// index solution
function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().split('')
  .filter( letter => {
    let index = alphabet.indexOf(letter);
    return index > -1;
  }  )
  .map( letter => alphabet.indexOf(letter) + 1 )
  .join(' ')
}
