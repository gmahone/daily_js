function slope(points){
  let deltaY = (points[3] - points[1]);
  let deltaX = (points[2] - points[0]);
  let result = "undefined";
  if(deltaX !== 0){
    result = String(deltaY/deltaX);
  }
  return(result);
}
