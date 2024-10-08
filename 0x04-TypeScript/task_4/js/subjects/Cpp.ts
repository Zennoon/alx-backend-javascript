/// <reference path='Teacher.ts'/>
/// <reference path='Subject.ts' />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number
  }

  export class Cpp extends Subject {
    teacher: Teacher;
    getRequirements(): string {
      return "Here is the list of requirements for Cpp"
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
