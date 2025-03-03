//* Завдання 1
// Створити сторінку з списком задач (todo list) і можливістю їх відмічення як виконані. Завдання повинні зберігатися в localStorage, щоб при наступному відкритті сторінки вони залишалися в списку з відповідним статусом (виконані / невиконані).
const btn = document.querySelector("#send");
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

const listToDo = JSON.parse(localStorage.getItem('task')) || []

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();

  listToDo.push({ text: value, completed: false });

  const JSONlist = JSON.stringify(listToDo);
  localStorage.setItem("task", JSONlist);
  form.reset();
  renderLi();
});

const renderLi = () => {
  list.innerHTML = "";
  listToDo.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" ${item.completed ? "checked" : ""} data-index="${index}">
                    <span>${item.text}</span>`;
    list.appendChild(li);
  });
};

list.addEventListener("change", (e) => {
    if(e.target.matches(['input[type="checkbox"]'])) {
      const index = e.target.dataset.index
      listToDo[index].completed = e.target.checked
      localStorage.setItem("task", JSON.stringify(listToDo))
    }
})

renderLi()

//* 2
// Створіть просту форму з полями вводу і кнопкою, яка зберігає дані в localStorage. При наступному завантаженні сторінки зчитайте збережені дані з localStorage та відобразіть їх у відповідних полях вводу.

const btn2 = document.querySelector("#btn");
const input2 = document.querySelector("#input2");
const form2 = document.querySelector("#form2");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValue = input2.value;
  console.log(inputValue);
  localStorage.setItem("inputValue", JSON.stringify(inputValue));
  input2.value = "";
});

const getValue = localStorage.getItem("inputValue");
input2.value = getValue;

//* 2,5
// Створіть форму з полями для вводу логіна та пароля. Зберігайте дані про користувача в localStorage та перевіряйте, чи є користувач з таким логіном та паролем при вході на сторінку.

document.addEventListener("DOMContentLoaded", () => {
  const password = document.querySelector("#input3");
  const login = document.querySelector("#input4");
  const form3 = document.querySelector("#form3");


  const getUserInfo = localStorage.getItem("user");
  const getUserInfoParsed = JSON.parse(getUserInfo);

  if (!getUserInfoParsed) {
    form3.style.display = "block"; // Показати форму для реєстрації

    form3.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = {
        login: login.value,
        password: password.value,
      };
      if (login.value === "" || password.value === "") {
        alert("Поля логін та пароль не можуть бути пустими!");
        login.value = "";
        password.value = "";
        return false;
      }

      localStorage.setItem("user", JSON.stringify(user));
      form3.reset();
      alert("Реєстрація успішна! Перезавантажте сторінку для входу.");
    });
  } else {
    form3.style.display = "none"; // Приховати форму

    // Виконуємо запит на авторизацію лише після завантаження сторінки
    setTimeout(() => {
      const checkUserL = prompt("Enter your login", "");
      const checkUserP = prompt("Enter your password", "");

      if (
        checkUserL === getUserInfoParsed.login &&
        checkUserP === getUserInfoParsed.password
      ) {
        alert("Ви успішно авторизовані!");
      } else {
        alert("Неправильний логін або пароль!");
      }
    }, 500); // Невелика затримка для кращого користувацького досвіду
  }
});

//! 3 Створіть "закладки" — список посилань на важливі сторінки. Додавайте, видаляйте та редагуйте посилання в списку, зберігайте його в localStorage, щоб він залишався між сесіями.

const linkInput = document.querySelector("#bookmarkInput");
const linkBtn = document.querySelector("#addBookmarkBtn");
const linkList = document.querySelector("#bookmarkList");

const links = JSON.parse(localStorage.getItem("links")) || [];

linkBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const link = linkInput.value.trim(); 
  if (!link) return; 

  links.push(link);
  const linkToJSON = JSON.stringify(links);
  localStorage.setItem("links", linkToJSON);
  linkInput.value = "";
  showLinks();
});

const showLinks = () => {
  linkList.innerHTML = "";
  links.forEach((link, index) => {
  const li = document.createElement("li");
    li.dataset.id = index;
    li.innerHTML = `<a href='${link}' target='_blank'>${link}</a>
    <button class="deleteBTN">Delete</button>
    <button class="editBTN">Edit</button>`;
  linkList.appendChild(li);
  });
};

linkList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("deleteBTN")) {
    const itemId = e.target.parentElement.dataset.id;
    links.splice(itemId, 1);
    const linkToJSON = JSON.stringify(links);
    localStorage.setItem("links", linkToJSON);
    showLinks();
  }
  if (e.target.classList.contains("editBTN")) {
    const index = e.target.parentElement.dataset.id;
    linkInput.value = links[index];

    linkBtn.textContent = "Update";
    linkBtn.onclick = () =>  {
      links[index] = linkInput.value;
      localStorage.setItem("links", JSON.stringify(links));
      linkInput.value = "";
      linkBtn.textContent = "Add";
      showLinks();
      linkBtn.onclick = linkBtnClickHandler;
    }
  }
});

showLinks();

//* 4
// Створіть програму для зберігання контактів — ім'я, прізвище, телефон та електронна адреса. Зберігайте контакти в localStorage та дозволяйте користувачу додавати, видаляти та редагувати контакти.

const contactForm = document.querySelector("#contactForm");
const contactInput = document.querySelectorAll("#contactInput");
const contactBtn = document.querySelector("#contactBtn");
const contactList = document.querySelector("#contactList");
const contactBtnSave = document.querySelector("#contactBtn1");

const getItem = JSON.parse(localStorage.getItem("info")) || [];
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const info = {
    name: contactInput[0].value,
    lastName: contactInput[1].value,
    phone: contactInput[2].value,
    email: contactInput[3].value,
  };
  console.log(info);
  getItem.push(info);
  const infoToJSON = JSON.stringify(getItem);
  localStorage.setItem("info", infoToJSON);

  contactRenderInfo();
});

const contactRenderInfo = () => {
  contactList.innerHTML = "";
  getItem.forEach((inf, index) => {
    const li = document.createElement("li");
    li.dataset.id = index;
    li.innerHTML = `
  <h3>${inf.name}</h3>
  <h3>${inf.lastName}</h3>
  <h3>${inf.phone}</h3>
  <h3>${inf.email}</h3>
  <button class="editBtn">Edit Information</button>
  <button class="deleteBtn">Delete Information</button>`;
    contactList.appendChild(li);
    console.log(li);
  });
};

contactList.addEventListener("click", (e) => {
  e.preventDefault();
  const btn = e.target;
  if (btn.classList.contains("editBtn")) {
    const infoName = prompt("Enter your name", "");
    const infoLastName = prompt("Enter your lastName", "");
    const infoPhone = prompt("Enter your phone", "");
    const infoEmail = prompt("Enter your email", "");
    const listItemId = btn.parentElement.dataset.id;
    getItem[listItemId].name = infoName;
    getItem[listItemId].lastName = infoLastName;
    getItem[listItemId].phone = infoPhone;
    getItem[listItemId].email = infoEmail;
    const infoToJSON = JSON.stringify(getItem);
    localStorage.setItem("info", infoToJSON);
    contactRenderInfo();
  }
  if (btn.classList.contains("deleteBtn")) {
    const listItemId = btn.parentElement.dataset.id;
    getItem.splice(listItemId, 1);
    const infoToJSON = JSON.stringify(getItem);
    localStorage.setItem("info", infoToJSON);
    contactRenderInfo();
  }
});
contactBtn.addEventListener("click", () => {

  console.log("Hello");

  if (getItem) {
    console.log(getItem);
    contactRenderInfo();
  } else {
    alert("No contacts saved");
  }

  contactForm.reset();
});
