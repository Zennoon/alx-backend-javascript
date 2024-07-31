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

for (const subject of [cpp, java, react]) {
  subject.setTeacher = cTeacher;
  console.log(subject.getRequirements());
  console.log(subject.getAvailableTeacher());
}
