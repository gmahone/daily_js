function f(n){
  if(parseInt(n) !== n || n < 1){
    return false;
  }
  let result = Array(n).fill(1).map((e, i) => e + i).reduce((acc, c) => acc + c, 0);
  return result;
};
