document.addEventListener("DOMContentLoaded", function () {
    themeToggle();
    showLastVisit();
});

function themeToggle() {
    const toggleButton = document.getElementById("themeToggle");
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        toggleButton.textContent = document.body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";
    });
}

function copyEmail() {
    let emailText = document.getElementById("email").textContent;
    navigator.clipboard.writeText(emailText);
    alert("Email copied to clipboard!");
}

function showLastVisit() {
    let lastVisit = localStorage.getItem("lastVisit");
    let now = new Date();
    if (lastVisit) {
        alert("Welcome back! Last visit: " + lastVisit);
    } else {
        alert("Welcome to my portfolio!");
    }
    localStorage.setItem("lastVisit", now);
}
