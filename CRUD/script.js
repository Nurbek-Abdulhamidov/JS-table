const nameInput = document.getElementById("inputName");
const surNameInput = document.getElementById("inputSurname");
const inputSearch = document.getElementById("searchInput");
const tbody = document.getElementById("tableBody");
const warning = document.getElementById("warning");
const warning2 = document.getElementById("warning2");
const saveBtn = document.getElementById("saveButton");
const searchBtn = document.getElementById("searchButton");

let students = [
  { id: 1, name: "Eshmat", surname: "Toshmatov" },
  { id: 2, name: "Toshmat", surname: "Eshmatov" },
  { id: 3, name: "Gulmat", surname: "Mamatov" },
];

const createStudent = () => {
  let student = "";
  student += students
    .map((value, index) =>
      value.name.toLowerCase().includes(inputSearch.value.toLowerCase())
        ? `
    <tr>
      <td>${index + 1}</td>
      <td>${value.name}</td>
      <td>${value.surname}</td>
      <td>
        <button onclick={getEdit(${value.id})}>Edit</button>
        <button onclick={getDelete(${value.id})}>Delete</button>
      </td>
    </tr>
  `
        : ""
    )
    .join("");
  searchBtn.addEventListener("click", () => {
    createStudent();
  });
  tbody.innerHTML = student;
};
createStudent();

//  Delete student
const getDelete = (id) => {
  students = students.filter((value) => value.id !== id);
  createStudent();
};

// Add student
const getAddUser = () => {
  if (nameInput.value !== "" && surNameInput.value !== "") {
    students = [
      ...students,
      {
        id: students.length + 1,
        name: nameInput.value,
        surname: surNameInput.value,
      },
    ];
    warning.innerHTML = "";
    nameInput.value = "";
    surNameInput.value = "";
  } else {
    warning.innerHTML = "Ma'lumotingizni to'liq kiriting !";
  }
  createStudent();
};

//  Edit student
const getEdit = (id) => {
  students.map((value) => {
    if (value.id === id) {
      nameInput.value = value.name;
      surNameInput.value = value.surname;
      saveBtn.addEventListener("click", () => {
        value.name = nameInput.value;
        value.surname = surNameInput.value;
        nameInput.value = "";
        surNameInput.value = "";
        createStudent();
      });
    }
  });
};
