const themeButton = document.getElementById("themeButton");
const toggleProjects = document.getElementById("toggleProjects");
const projekty = document.getElementById("projekty");
const styleLink = document.querySelector("link[rel='stylesheet']");

themeButton.addEventListener("click", () => {
    if (styleLink.getAttribute("href") === "red.css") {
        styleLink.setAttribute("href", "green.css");
    } else {
        styleLink.setAttribute("href", "red.css");
    }
});

toggleProjects.addEventListener("click", () => {
    if (projekty.style.display === "none") {
        projekty.style.display = "block";
    } else {
        projekty.style.display = "none";
    }
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("error-border"));

    function showError(input, msg) {
        input.classList.add("error-border");
        input.nextElementSibling.textContent = msg;
        isValid = false;
    }

    if (firstName.value.trim() === "") {
        showError(firstName, "Podaj imię");
    }

    if (lastName.value.trim() === "") {
        showError(lastName, "Podaj nazwisko");
    }

    if (email.value.trim() === "") {
        showError(email, "Podaj email");
    }

    if (message.value.trim() === "") {
        showError(message, "Podaj wiadomość");
    }

    const nameRegex = /^[A-Za-zÀ-ž\s-]+$/;

    if (firstName.value && !nameRegex.test(firstName.value)) {
        showError(firstName, "Imię nie może zawierać cyfr");
    }

    if (lastName.value && !nameRegex.test(lastName.value)) {
        showError(lastName, "Nazwisko nie może zawierać cyfr");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value && !emailRegex.test(email.value)) {
        showError(email, "Niepoprawny email");
    }

    if (isValid) {
        alert("Udało się");
        form.reset();
    }
});

fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const skillsList = document.getElementById("skillsList68188");
    const projectsList = document.getElementById("projectsList68188");

    // UMIEJĘTNOŚCI JSON
    data.skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    // PROJEKTY JSON
    data.projects.forEach(project => {
      const li = document.createElement("li");

      li.innerHTML = `${project.name}: 
        <a href="${project.link}" target="_blank">${project.link}</a>`;

      projectsList.appendChild(li);
    });

  })
  .catch(error => console.error("Błąd:", error));

  // DODAWANIE NOTATKI

const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", () => {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
        });

        li.appendChild(deleteBtn);
        notesList.appendChild(li);
    });
}

addNoteBtn.addEventListener("click", () => {
    const value = noteInput.value.trim();

    if (value === "") return;

    notes.push(value);
    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
    renderNotes();
});

renderNotes();