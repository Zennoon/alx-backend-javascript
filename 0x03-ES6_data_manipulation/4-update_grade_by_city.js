export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const studentWithGrade = { ...student };
    const studentGrade = newGrades.filter((grade) => grade.studentId === studentWithGrade.id);
    studentWithGrade.grade = studentGrade[0] ? studentGrade.at(-1).grade : 'N/A';
    return studentWithGrade;
  });
}