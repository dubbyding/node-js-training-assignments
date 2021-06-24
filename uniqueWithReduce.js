// perfrom your getUnique task with reduce

var arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 1, 1, 1]

var notRepeated = arr.reduce(function (acc, item, index, source) {
  if (!acc.includes(item)) {
    acc.push(item)
  }
  return acc
}, [])
console.log('The Repeated Array is ', arr)
console.log('The Unique valued array is ', notRepeated)
