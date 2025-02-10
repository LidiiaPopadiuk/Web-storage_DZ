//! Завдання 1
// Створити сторінку з списком задач (todo list) і можливістю їх відмічення як виконані. Завдання повинні зберігатися в localStorage, щоб при наступному відкритті сторінки вони залишалися в списку з відповідним статусом (виконані / невиконані).
// const btn = document.querySelector("#send");
// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const list = document.querySelector("#list");

// const listToDo = JSON.parse(localStorage.getItem("task")) || [];

// // let listToDo = []
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = input.value;
//   console.log(listToDo);
//   listToDo.push(value);
//   const JSONvalue = JSON.stringify(listToDo);
//   localStorage.setItem("task", JSONvalue);
//   renderTodoList();
//   form.reset();
// });

// const randerWork = (toDo) => {
//   const li = document.createElement("li");
//   li.dataset.id = toDo.id;
//   li.className = `${toDo.completed ? "completed" : ""}`;
//   li.innerHTML = `<input ${
//     toDo.completed ? "completed" : ""
//   } type="checkbox">${item}`;
//   const checkbox = li.querySelector('input[type="checkbox"]');
//   checkbox.addEventListener("change", () => updatedToDOList(item.id));
//   list.appendChild(li);
// };

// const renderTodoList = () => {
//   list.innerHTML = "";
//   listToDo.forEach((item) => randerWork(item));
// };

// list.addEventListener("click", (e) => {
//   if (e.target.nodeName === "INPUT") {
//     const checkbox = e.target;
//     const id = checkbox.parentElement.dataset.id;
//     updatedToDOList(id);
//   }
// });
// const updatedToDOList = (id) => {
//   console.log(id);

//   const toDo = JSON.parse(localStorage.getItem("task"));
//   const updatedToDO = toDo.map((task) => {
//     console.log(task);

//     if (task.id === id) {
//       return { ...task, completed: task.id };
//     } else {
//       return task;
//     }
//   });
//   localStorage.setItem("task", JSON.stringify(updatedToDO));
//   renderTodoList();
// };

// const loadTask = () => {
//   // const task = JSON.parse(localStorage.getItem('task')) || []
//   listToDo.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerHTML = `<input type="checkbox">${item}`;
//     list.appendChild(li);
//   });
// };

// loadTask();

//* 2
// Створіть просту форму з полями вводу і кнопкою, яка зберігає дані в localStorage. При наступному завантаженні сторінки зчитайте збережені дані з localStorage та відобразіть їх у відповідних полях вводу.

// const btn2 = document.querySelector("#btn");
// const input2 = document.querySelector("#input2");
// const form2 = document.querySelector("#form2");

// form2.addEventListener("submit", (e) => {
//   e.preventDefault();
//   inputValue = input2.value;
//   console.log(inputValue);
//   localStorage.setItem("inputValue", JSON.stringify(inputValue));
//   input2.value = "";
// });

// const getValue = localStorage.getItem("inputValue");
// input2.value = getValue;

//* 2,5
// Створіть форму з полями для вводу логіна та пароля. Зберігайте дані про користувача в localStorage та перевіряйте, чи є користувач з таким логіном та паролем при вході на сторінку.

// document.addEventListener("DOMContentLoaded", () => {
//   const password = document.querySelector("#input3");
//   const login = document.querySelector("#input4");
//   const form3 = document.querySelector("#form3");

//   // const removeItem = localStorage.removeItem("user");

//   const getUserInfo = localStorage.getItem("user");
//   const getUserInfoParsed = JSON.parse(getUserInfo);

//   if (!getUserInfoParsed) {
//     form3.style.display = "block"; // Показати форму для реєстрації

//     form3.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const user = {
//         login: login.value,
//         password: password.value,
//       };
//       if (login.value === "" || password.value === "") {
//         alert("Поля логін та пароль не можуть бути пустими!");
//         login.value = "";
//         password.value = "";
//         return false;
//       }

//       localStorage.setItem("user", JSON.stringify(user));
//       form3.reset();
//       alert("Реєстрація успішна! Перезавантажте сторінку для входу.");
//     });
//   } else {
//     form3.style.display = "none"; // Приховати форму

//     // Виконуємо запит на авторизацію лише після завантаження сторінки
//     setTimeout(() => {
//       const checkUserL = prompt("Enter your login", "");
//       const checkUserP = prompt("Enter your password", "");

//       if (
//         checkUserL === getUserInfoParsed.login &&
//         checkUserP === getUserInfoParsed.password
//       ) {
//         alert("Ви успішно авторизовані!");
//       } else {
//         alert("Неправильний логін або пароль!");
//       }
//     }, 500); // Невелика затримка для кращого користувацького досвіду
//   }
// });

//3 Створіть "закладки" — список посилань на важливі сторінки. Додавайте, видаляйте та редагуйте посилання в списку, зберігайте його в localStorage, щоб він залишався між сесіями.

// const linkInput = document.querySelector("#input5");
// const linkBtn = document.querySelector("#btn4");
// const linkForm = document.querySelector("#form4");
// const linkList = document.querySelector("#linkList");

// let links = [];

// linkForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const link = linkInput.value;
//   console.log(link);
//   links.push(link);
//   localStorage.setItem("links", JSON.stringify(links));
//   linkInput.value = "";
// });

//4 - input type text 123?
// Створіть програму для зберігання контактів — ім'я, прізвище, телефон та електронна адреса. Зберігайте контакти в localStorage та дозволяйте користувачу додавати, видаляти та редагувати контакти.

const contactForm = document.querySelector("#contactForm");
const contactInput = document.querySelectorAll("#contactInput");
const contactBtn = document.querySelector("#contactBtn");
const contactList = document.querySelector("#contactList");
const contactBtnSave = document.querySelector("#contactBtn1");

const getItem = localStorage.getItem('info')
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const info = {
    name: contactInput[0].value,
    lastName: contactInput[1].value,
    phone: contactInput[2].value,
    email: contactInput[3].value,
  };
  console.log(info);

  const infoToJSON = JSON.stringify(info);
  localStorage.setItem("info", infoToJSON);

  contactRenderInfo(info)
});

const contactRenderInfo = (inf) => {
  const li = document.createElement("li");
  li.innerHTML = `<div class="liInfo">
  <h3>${inf.name}</h3>
  <h3>${inf.lastName}</h3>
  <h3>${inf.phone}</h3>
  <h3>${inf.email}</h3></div>`;
  contactList.innerHTML = ''
  contactList.appendChild(li);
  console.log(li);
  
};


contactBtn.addEventListener('click', () => {
  console.log('Hello');
    let parseItem
    if (getItem) {
    parseItem = JSON.parse(getItem)
    contactRenderInfo(parseItem);
  } else {
    alert('No contacts saved');
  }

  const btnRedact = document.createElement('button')
  btnRedact.textContent = 'Редагувати інформацію'

  contactList.appendChild(btnRedact);

  btnRedact.addEventListener('click', () => {
    contactInput[0].value = parseItem.name;
    contactInput[1].value = parseItem.lastName;
    contactInput[2].value = parseItem.phone;
    contactInput[3].value = parseItem.email;
  });
  

});


