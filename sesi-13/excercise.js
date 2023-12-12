function addStudent() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;

  let students = JSON.parse(localStorage.getItem("students"));

  if (students) {
    students.push({
      id: students[students.length - 1].id,
      name: name,
      address: address,
    });
  } else {
    students = [
      {
        id: 1,
        name: name,
        address: address,
      },
    ];
  }

  localStorage.setItem("students", JSON.stringify(students));
}
