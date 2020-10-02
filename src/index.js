
exports.min = function min (array) {
  let min = 0;
  if (min = Math.min.apply(null, array)) {
  return min;
  } else {(array[0] === undefined) ;
     return 0;}
  };

exports.max = function max (array) {
  if (array[0] === undefined) {
  return 0;
  } else return Math.max(...array);
  };

exports.avg = function avg (array) {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
  sum += array[i];
  }
  return sum / array.length;
  
};
