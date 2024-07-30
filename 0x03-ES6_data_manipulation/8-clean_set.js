export default function cleanSet(set, startString) {
  // Returns a string of all the set value elements that start with a given string
  // with that string removed from each one
  if (startString.length === 0) {
    return '';
  }
  return [...set].filter((str) => str.startsWith(startString)).map((str) => str.replace(startString, '')).join('-');
}
