// 1. Mobile Navigation Menu

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Change menu icon
    const icon = menuIcon.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});


// 2. Close Menu After Clicking a Link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");

        const icon = menuIcon.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});


// 3. Automatically Display Current Year

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// 4. Back To Top Button

const topButton = document.getElementById("topButton");

// Hide button initially
topButton.style.display = "none";

// Show button when scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

// Scroll to top when clicked
topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});