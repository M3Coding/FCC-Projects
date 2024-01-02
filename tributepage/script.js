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

    window.addEventListener("scroll", updateSections);
    window.addEventListener("resize", updateSections);

    // Initial check when the page loads
    updateSections();
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

    window.addEventListener("scroll", updateSections);
    window.addEventListener("resize", updateSections);

    // Initial check when the page loads
    updateSections();
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

    window.addEventListener("scroll", updateSections);
    window.addEventListener("resize", updateSections);

    // Initial check when the page loads
    updateSections();
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

    window.addEventListener("scroll", updateSections);
    window.addEventListener("resize", updateSections);

    // Initial check when the page loads
    updateSections();
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".contact-us-section");

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

    window.addEventListener("scroll", updateSections);
    window.addEventListener("resize", updateSections);

    // Initial check when the page loads
    updateSections();
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

    window.addEventListener("scroll", updateSections);
    window.addEventListener("resize", updateSections);

    // Initial check when the page loads
    updateSections();
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

    window.addEventListener("scroll", updateSections);
    window.addEventListener("resize", updateSections);

    // Initial check when the page loads
    updateSections();
});

