function getFilteredArray(arr, func) {
  let arrNew = [];
  forEach(arr, function(el) {
    if (func(el)) {
      arrNew.push(el);
    }
  });
  return arrNew;
}
