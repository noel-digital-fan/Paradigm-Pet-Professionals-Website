const hamburger = document.getElementById("hamburger-icon");
const navButtons = document.querySelector(".nav1-buttons");

hamburger.addEventListener("click", function() {
    navButtons.classList.toggle("show");
});
