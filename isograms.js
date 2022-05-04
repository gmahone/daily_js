const isIsogram = str => str.toUpperCase().split("").sort().filter((a,i,arr) => a === arr[i-1]).length ? false : true;


// other solutions

// solution using Set
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}


// regex solution
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

// other regex solution
function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}