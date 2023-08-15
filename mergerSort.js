function merge(
  array = [5, 2, 67, 54, 3, 87, 5, 6, 32, 23, 45, 654, 33, 121, 34]
) {
  //it wil start sorting elements one by one
  if (array.length === 1) return array; //base case
  //divide the array in right and left parts
  const middleIndex = Math.floor(array.length / 2);
  const left = array.splice(0, middleIndex);
  const right = array; // splice mutates the original array
  return sort(merge(left), merge(right));
}

function sort(leftArray, rightArray) {
  const sortedArray = [];
  //while both the rigths have elements
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] >= rightArray[0]) {
      //make sure it works also with repeated values
      sortedArray.push(rightArray.shift());
    } else if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(merge());
