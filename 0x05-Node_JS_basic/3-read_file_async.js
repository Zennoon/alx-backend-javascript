// Function to asynchronoussly read a file
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    } else {
      const studentsByField = {};
      const lines = data.toString().trim().split('\n');
      const records = lines.slice(1, lines.length);
      let length = 0;

      for (let i = 0; i < records.length; i += 1) {
        const fields = records[i].split(',');
        const fieldName = fields[3];
        const studentName = fields[0];

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
          console.log(`Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`);
        }
      }
      resolve(null);
    }
  });
});

module.exports = countStudents;
