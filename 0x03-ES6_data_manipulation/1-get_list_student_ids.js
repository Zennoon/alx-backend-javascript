export default function getListStudentIds(students) {
  return (students instanceof Array ? students.map((student) => student.id) : []);
}
