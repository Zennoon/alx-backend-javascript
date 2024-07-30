export default function hasValuesFromArray(set, array) {
  // Checks if every element of an array is in a set
  return (set.isSupersetOf(new Set(array)));
}
