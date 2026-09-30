document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navigation .nav-button");

    // Smooth scroll for nav buttons
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth" });
                    history.pushState(null, "", href);
                }
            }
        });
    });
});