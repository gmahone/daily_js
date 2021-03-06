function removeSmallest(numbers) {
  numbers.splice(numbers.indexOf(Math.min(...numbers)),1);
  return(numbers);
}
// this version mutates the original array and therefore fails some testing

// this solution doesn't mutate the first array, but maps it into a second array
function removeSmallest(numbers) {
  let result = numbers.map(a => a)
  result.splice(numbers.indexOf(Math.min(...numbers)),1);
  return(result);
}

// simply using something like "let result = numbers" doesn't work because then both variables just point to the input array


// other solutions

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}


function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}


const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
