window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
    } else {
        navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }
});

