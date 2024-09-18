import readDatabase from '../utils';

// Controller for express application
export default class StudentsController {
  static getAllStudents(request, response) {
    let resBody = 'This is the list of our students\n';

    readDatabase(process.argv[2]).then((data) => {
      for (const [field, names] of Object.entries(data)) {
        resBody = resBody.concat(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      }
      response.send(resBody.trim());
    }).catch(() => {
      response.statusCode = 500;
      response.send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2]).then((data) => {
        const names = data[major];

        response.send(`List: ${names.join(', ')}`);
      }).catch(() => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
    }
  }
}
