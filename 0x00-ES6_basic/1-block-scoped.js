export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    /* eslint-disable no-unused-vars */
    const task3 = task + task2;
  }

  return [task, task2];
}
