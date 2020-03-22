exports.min = function min (arr) {
  return (arr === undefined || arr.length === 0) ? 0 : Math.min.apply(null, arr);
}

exports.max = function max (arr) {
  return (arr === undefined || arr.length === 0) ? 0 : Math.max.apply(null, arr);
}

exports.avg = function avg (arr) {
  if(arr === undefined || arr.length === 0)
      return 0;
  let sum = 0;
  for(let i of arr) {
      sum  += i;
  }
  return sum / arr.length;
}

