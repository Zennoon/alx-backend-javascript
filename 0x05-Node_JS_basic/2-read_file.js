#!/usr/bin/node
const fs = require('node:fs');

// Function attempts to read file with provided
// path synchronously
const countStudents = (path) => {
  let data;

  try {
    data = fs.readFileSync(path).toString();
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');
  const records = lines.slice(1, lines.length);

  process.stdout.write(`Number of students: ${records.length}\n`);
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

  for (const dept in deptInfo) {
    if (dept) {
      const count = deptInfo[dept].studentCount;
      const allNames = deptInfo[dept].studentNames.join(', ');

      process.stdout.write(`Number of students in ${dept}: ${count}. List: ${allNames}\n`);
    }
  }
};

module.exports = countStudents;
