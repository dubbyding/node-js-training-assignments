function arrSum(arr, leng) {
  if (leng == 0) {
    return arr[leng]
  }
  return arr[leng] + arrSum(arr, leng - 1)
}

var arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 1, 1, 1]

var sum = arrSum(arr, arr.length - 1)
console.log('The arrary is ', arr)
console.log('The sum is ', sum)
