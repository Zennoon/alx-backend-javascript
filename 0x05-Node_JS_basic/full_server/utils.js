import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    } else {
      const studentsByField = {};
      const lines = data.toString().trim().split('\n');
      const records = lines.slice(1, lines.length);

      for (let i = 0; i < records.length; i += 1) {
        const fields = records[i].split(',');
        const fieldName = fields[3];
        const studentName = fields[0];

        if (fieldName in studentsByField) {
          studentsByField[fieldName].push(studentName);
        } else {
          studentsByField[fieldName] = [studentName];
        }
      }

      resolve(studentsByField);
    }
  });
});

export default readDatabase;
