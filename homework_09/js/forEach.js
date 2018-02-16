function forEach(arr, func) {
  arr.forEach(func);
  for (let i = 0; i < arr.length; i++) {
    return arr[i];
  }
}

forEach([3, 5, 2], function(el) {
  console.log(el);
});
