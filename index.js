function iterativeLog(array) {
  array.forEach((element, i) => {
    console.log(`${i}: ${element}`)
  })
}

function iterate(callback) {
  var array = ['one', 'two', 'three'];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
