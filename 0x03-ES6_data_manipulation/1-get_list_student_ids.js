function trans(obj) {
  return obj.id;
}

export default function getListStudentIds(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  return arr.map(trans);
}
