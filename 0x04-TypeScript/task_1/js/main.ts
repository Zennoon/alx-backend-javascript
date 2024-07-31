interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface studentClass {
  firstName: string,
  lastName: string
}

interface studentClassConstructor {
  new(firstName: string, lastName: string): {firstName: string, lastName: string};
}

class StudentClass implements studentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
