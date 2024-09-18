/// <reference path='subjects/Teacher.ts'/>
/// <reference path='subjects/Subject.ts' />
/// <reference path='subjects/Cpp.ts'/>
/// <reference path='subjects/Java.ts' />
/// <reference path='subjects/React.ts'/>

const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10
}
console.log(cTeacher)

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

const subjectsObj = {
  'C++': cpp,
  'Java': java,
  'React': react,
}

for (const label in subjectsObj) {
  console.log(label);
  subjectsObj[label].setTeacher = cTeacher;
  console.log(subjectsObj[label].getRequirements());
  console.log(subjectsObj[label].getAvailableTeacher());
}
