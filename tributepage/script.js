document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".home-section");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add("in-focus");
            } else {
                section.classList.remove("in-focus");
            }
        });
    }

    function handleScroll() {
        updateSections();
        sections.forEach(section => {
            if (section.classList.contains("in-focus")) {
                section.style.transition = "background-color 0.3s ease"; // Add transition effect
            } else {
                section.style.transition = "none"; // Remove transition when not in focus
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check when the page loads
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".about-section");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add("in-focus");
            } else {
                section.classList.remove("in-focus");
            }
        });
    }

    function handleScroll() {
        updateSections();
        sections.forEach(section => {
            if (section.classList.contains("in-focus")) {
                section.style.transition = "background-color 0.3s ease"; // Add transition effect
            } else {
                section.style.transition = "none"; // Remove transition when not in focus
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check when the page loads
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".service-section");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add("in-focus");
            } else {
                section.classList.remove("in-focus");
            }
        });
    }

    function handleScroll() {
        updateSections();
        sections.forEach(section => {
            if (section.classList.contains("in-focus")) {
                section.style.transition = "background-color 0.3s ease"; // Add transition effect
            } else {
                section.style.transition = "none"; // Remove transition when not in focus
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check when the page loads
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".product-section");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add("in-focus");
            } else {
                section.classList.remove("in-focus");
            }
        });
    }

    function handleScroll() {
        updateSections();
        sections.forEach(section => {
            if (section.classList.contains("in-focus")) {
                section.style.transition = "background-color 0.3s ease"; // Add transition effect
            } else {
                section.style.transition = "none"; // Remove transition when not in focus
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check when the page loads
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".booking-section");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add("in-focus");
            } else {
                section.classList.remove("in-focus");
            }
        });
    }

    function handleScroll() {
        updateSections();
        sections.forEach(section => {
            if (section.classList.contains("in-focus")) {
                section.style.transition = "background-color 0.3s ease"; // Add transition effect
            } else {
                section.style.transition = "none"; // Remove transition when not in focus
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check when the page loads
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".countact-us-section");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add("in-focus");
            } else {
                section.classList.remove("in-focus");
            }
        });
    }

    function handleScroll() {
        updateSections();
        sections.forEach(section => {
            if (section.classList.contains("in-focus")) {
                section.style.transition = "background-color 0.3s ease"; // Add transition effect
            } else {
                section.style.transition = "none"; // Remove transition when not in focus
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check when the page loads
    handleScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".survey-section");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add("in-focus");
            } else {
                section.classList.remove("in-focus");
            }
        });
    }

    function handleScroll() {
        updateSections();
        sections.forEach(section => {
            if (section.classList.contains("in-focus")) {
                section.style.transition = "background-color 0.3s ease"; // Add transition effect
            } else {
                section.style.transition = "none"; // Remove transition when not in focus
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check when the page loads
    handleScroll();
});


