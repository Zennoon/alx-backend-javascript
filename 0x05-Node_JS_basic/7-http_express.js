// Simple express server
const express = require('express');
const fs = require('fs');

const app = express();
const dbPath = process.argv[2];

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    } else {
      let returnString = '';
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

      returnString += `Number of students: ${length}\n`;
      for (const [key, val] of Object.entries(studentsByField)) {
        if (key) {
          returnString += `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}\n`;
        }
      }
      resolve(returnString.trim());
    }
  });
});
  

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let toSend = 'This is the list of our students\n'
  countStudents(dbPath).then((data) => {
    res.send(toSend + data);
  }).catch((err) => {
    res.send(toSend + 'Cannot load the database');
  })
});

app.listen(1245);

module.exports = app;
