export default function iterateThroughObject(reportWithIterator) {
  const allNames = [];
  for (const name of reportWithIterator) {
    allNames.push(name);
  }

  return (allNames.join(' | '));
}
