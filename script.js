function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    mobileMenu.classList.toggle("active"); // Toggles the visibility of the mobile menu
    hamburgerIcon.classList.toggle("active"); // Toggles the hamburger icon animation
}

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

// Set initial icon state based on default mode
if (body.classList.contains("dark-mode")) {
    icon.classList.replace("ri-moon-fill", "ri-sun-fill"); // Default to Sun icon
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Toggle icon dynamically
    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("ri-moon-fill", "ri-sun-fill"); // Switch to Sun
    } else {
        icon.classList.replace("ri-sun-fill", "ri-moon-fill"); // Switch to Moon
    }
});