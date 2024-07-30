export default function cleanSet(set, startString) {
  // Returns a string of all the set value elements that start with a given string
  // with that string removed from each one
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const contains = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      contains.push(item.replace(startString, ''));
    }
  }
  return contains.join('-');
}
