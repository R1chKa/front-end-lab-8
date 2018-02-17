function cypherPhrase(obj, str) {
  str = str.split("");

  str = getTransformedArray(str, function(el) {
    for (let key in obj) {
      if (el === key) {
        return (el = obj[el]);
      }
    }
    return el;
  });
  return str.join("");
}
