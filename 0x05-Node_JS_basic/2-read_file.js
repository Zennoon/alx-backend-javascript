const fs = require('node:fs');

// Function attempts to read file with provided
// path synchronously
const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').toString();
    const lines = data.trim().split('\n');
    const records = lines.slice(1, lines.length);
    let length = 0;

    const studentsByField = {};
    for (let i = 0; i < records.length; i += 1) {
      const recordFields = records[i].split(',');
      const fieldName = recordFields[3];
      const studentName = recordFields[0];

      length += 1;
      if (fieldName in studentsByField) {
        studentsByField[fieldName].push(studentName);
      } else {
        studentsByField[fieldName] = [studentName];
      }
    }
    console.log(`Number of students: ${length}`);

    for (const [key, val] of Object.entries(studentsByField)) {
      if (key) {
        console.log(`Number of students in ${key}: ${val.length}, List: ${val.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
