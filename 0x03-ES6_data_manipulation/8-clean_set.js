export default function cleanSet(set, startString) {
  // Returns a string of all the set value elements that start with a given string
  // with that string removed from each one
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  return [...set].filter((val) => typeof val === 'string' && val.startsWith(startString)).map((val) => val.replace(startString, '')).join('-');
}
