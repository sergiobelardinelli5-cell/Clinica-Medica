document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if(menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector(".navbar:not(.solid)");
    if(navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            item.classList.toggle("active");
        });
    });

    // Animated Counters (Página Sobre)
    const counters = document.querySelectorAll(".stat-number");
    let hasCounted = false;
    const runCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / 40;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(runCounters, 40);
            } else {
                counter.innerText = target + (counter.hasAttribute("data-plus") ? "+" : "");
            }
        });
    };

    const statsSection = document.querySelector(".stats-grid");
    if (statsSection) {
        window.addEventListener("scroll", () => {
            const top = statsSection.getBoundingClientRect().top;
            if (top < window.innerHeight && !hasCounted) {
                hasCounted = true;
                runCounters();
            }
        });
    }
});