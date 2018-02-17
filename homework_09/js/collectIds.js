function collectIds(arr) {
  let movieFilter = getFilteredArray(arr, function(el) {
    return el.rating > 3;
  });

  return getTransformedArray(movieFilter, function(el) {
    return el.id;
  });
}
