const body = document.getElementById("tbody");
const input = document.getElementById("inputName");
const addButton = document.getElementById("addBtn");
const saveButton = document.getElementById("saveBtn");

let users = [
  { id: 1, name: "Eshmat" },
  { id: 2, name: "Toshmat" },
  { id: 3, name: "Gulmat" },
];

// Read users
const getUser = () => {
  let user = "";
  user += users
    .map(
      (value, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${value.name}</td>
        <td>
        <button onclick={getEdit(${value.id})}>Edit</button>
        <button onclick={getDelete(${value.id})}>Delete</button>
        </td>
      </tr>
  `
    )
    .join("");
  body.innerHTML = user;
};
getUser();

//  Delete item
const getDelete = (id) => {
  users = users.filter((val) => val.id !== id);
  console.log(id);
  getUser();
};

// Create users
const getAdd = () => {
  if (input.value !== "") {
    users = [...users, { id: users.length + 1, name: input.value }];
    input.value = "";
    getUser();
  }
};

//  Edit user
const getEdit = (id) => {
  users.map((value) => {
    if (value.id === id) {
      input.value = value.name;
      saveButton.addEventListener("click", () => {
        value.name = input.value;
        input.value = "";
        getUser();
      });
    }
  });
};
