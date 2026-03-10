//Mobile Navigation Toggle

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
        

let username = localStorage.getItem("username");

if(!username) {
    username = prompt("Enter Your Name:");
    localStorage.setItem("username", username);
}
alert("Welcome Back, " + username + '!');