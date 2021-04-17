export function isObject(obj) {
  return obj === Object(obj)
}

export function getLongestObjectInArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not an array')
  }

  return arr.reduce((acc, item) => {
    if (!isObject(acc) || !isObject(item)) {
      throw new Error('Array includes invalid item')
    }

    const accLength = Object.keys(acc).length
    const itemLength = Object.keys(item).length
    if (accLength > itemLength) {
      return acc
    }
    return item
  }, arr[0])
}
