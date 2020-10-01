
exports.min = function min (array) {
  let noParam = 0;
  let min = 0;
  if (min = Math.min.apply(null, array)) {
  return min;
  } //else { (min = '' || min = ([])) 
    //}
    return noParam;
}

exports.max = function max (array) {
  let max = 0;
  if (max = Math.max(...array)){
  return max;
  }
  return 0;
}

exports.avg = function avg (array) {
  let arr = array;
  let sum = 0;
  for (var i = 0; i < arr.length; i++);
  sum += arr[i];
  let avg = sum / arr.length;
  return avg;
}
