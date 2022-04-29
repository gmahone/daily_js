function expandedForm(num) {
  let numSplit = num.toString().split("");
  let result = [];
  for(let i = 0; i < numSplit.length; i++){
    if(numSplit[i] != 0){
      result.push(numSplit[i].padEnd(numSplit.length - i, "0"));
    }
  }
  return(result.join(" + "));
}


// other solutions

// arrow function version
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

