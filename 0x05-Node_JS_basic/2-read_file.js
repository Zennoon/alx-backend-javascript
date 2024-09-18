const fs = require('node:fs');

// Function attempts to read file with provided
// path synchronously
const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').toString();

    const lines = data.trim().split('\n');
    const records = lines.slice(1, lines.length);

    console.log(`Number of students: ${records.length}`);
    const deptInfo = {};

    for (const studentRecord of records) {
      const fields = studentRecord.split(',');
      const fName = fields[0];
      const dept = fields[3];

      if (dept in deptInfo) {
        deptInfo[dept].studentCount += 1;
        deptInfo[dept].studentNames.push(fName);
      } else {
        deptInfo[dept] = {
          studentCount: 1,
          studentNames: [fName],
        };
      }
    }
    for (const [key, value] of Object.entries(deptInfo)) {
      if (key !== 'field') {
        const count = value.studentCount;
        const allNames = value.studentNames.join(', ');

        console.log(`Number of students in ${key}: ${count}. List: ${allNames}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
