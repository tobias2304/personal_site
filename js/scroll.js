document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealElements.forEach(el => observer.observe(el));
});


window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.classList.add("is-visible");
    }
});