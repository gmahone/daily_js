function high(x){
  let words = x.split(" ");
  let currentMax = 0;
  let result;
  for(let i = 0; i < words.length; i++){
    let wordScore = words[i].split("").map(a => a.charCodeAt() - 96).reduce((acc, c) => acc + c);
    // console.log(wordScore);
    if(wordScore > currentMax){
      result = words[i];
      currentMax = wordScore;
    }
  }
  return(result);
}
