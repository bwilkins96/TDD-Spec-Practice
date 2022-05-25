function myMap(inputArray, callback) {
  let newArr = [];

  inputArray.forEach( el => {
    newArr.push(callback(el));
  });

  return newArr;
}

module.exports = myMap;
