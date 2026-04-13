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