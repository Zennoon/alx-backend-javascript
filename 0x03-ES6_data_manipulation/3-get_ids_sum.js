export default function getStudentsIdsSum(students) {
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
