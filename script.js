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