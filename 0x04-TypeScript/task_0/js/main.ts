interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alan',
  lastName: 'Turing',
  age: 32,
  location: 'England'
}

const student2: Student = {
  firstName: 'Tim',
  lastName: 'Burners-Lee',
  age: 40,
  location: 'England'
}

const studentsList: Array<Student> = [student1, student2];
const table = document.createElement('table');

studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');
  const firstNameData = document.createElement('td');
  const locationData = document.createElement('td');

  firstNameData.textContent = student.firstName;
  locationData.textContent = student.location;
  row.appendChild(firstNameData);
  row.appendChild(locationData);
  table.appendChild(row);
})
document.querySelector('body').appendChild(table);