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


function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}

var expandedForm = (num) => {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}

function expandedForm(num) {
  num = String(num);
  let result = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 0) continue;
    else result.push(num[i] + "0".repeat(num.length -i -1))
  }
  return result.join(" + ")
}
