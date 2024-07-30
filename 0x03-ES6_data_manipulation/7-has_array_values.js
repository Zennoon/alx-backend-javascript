export default function hasValuesFromArray(set, array) {
  // Checks if every element of an array is in a set
  for (const elem of array) {
    if (!(set.has(elem))) {
      return false;
    }
  }
  return true;
}
