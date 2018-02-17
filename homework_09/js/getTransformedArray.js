function increment(num) {
  return num + 1;
}

function getTransformedArray(arr, func) {
  let arrNew = [];
  forEach(arr, function(el) {
    arrNew.push(func(el));
  });
  return arrNew;
}
