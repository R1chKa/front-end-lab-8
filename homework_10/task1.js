function debounce(callback, delay) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;
  printIteratorValue();
}

function printIteratorValue() {
  console.log("Iterator value ", iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'
